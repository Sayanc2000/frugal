"use server";
import {API_HOST} from "@/utils/constants";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {EntryType, EntryValues} from "@/utils/datatypes";
import {cookies} from "next/headers";

export async function getAllEntries(token: string | undefined) {
    const res = await fetch(API_HOST + "/entries", {
        method: 'GET',
        headers: {
            "Authorization": "bearer " + token
        },
        cache: 'no-store'
    })
    if (res.status == 200){
        return res.json();
    }
    else if(res.status == 401){

    }
}

export async function makeNewEntry(data: EntryValues) {
    const useCookie = cookies()
    const token = useCookie.get("token")?.value
    const payload = {
        amount: data.amount,
        kind: data.kind,
        expenseKind: data.kind == EntryType.EXPENSE ? data.expenseKind : undefined
    }
    const url = API_HOST + "/entries"
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    if (res.status == 200){
        return res.json();
    }
    else if(res.status == 401){

    }
}

export async function deleteEntry(entry_id: string){
    const useCookie = cookies()
    const token = useCookie.get("token")?.value
    const url = API_HOST + "/entries/" + entry_id
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    })
    if (res.ok){
        return true
    }
    else {

    }
}

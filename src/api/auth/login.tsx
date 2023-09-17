"use server";
import {API_HOST} from "@/utils/constants";

import {UserToken} from "@/utils/datatypes";
import {cookies} from "next/headers";

export async function doLogin(data: { email: string, password: string }) {
    const res = await fetch(API_HOST + "/auth/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        cache: 'no-store',
        body: JSON.stringify(data)
    })
    if(res.ok){
        const data: UserToken = await res.json()
        const token_data = data.access_token
        const useCookie = cookies()
        useCookie.set("token", token_data)
        return true
    }
    else{
        return false
    }
}
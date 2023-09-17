"use client";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";
import Layout from "@/components/Layout";

export default function Profile() {
    const router = useRouter()
    function handleLogout() {
        deleteCookie("token")
        router.push("/login")
    }
    return (
        <Layout>
            <h1>This is profile</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </Layout>

    )
}
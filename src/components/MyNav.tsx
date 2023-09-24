"use client"
import {Button, Group, Title} from "@mantine/core"
import {useRouter} from "next/navigation";
import {deleteCookie, getCookie} from "cookies-next";

export default function MyNav() {
    const router = useRouter()
    const token = getCookie("token")

    return (
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <Group>
                    <Title order={1}>Frugal</Title>
                </Group>
                {token ? <Group>
                    <Button type="button" onClick={async () => {
                        router.push("/dashboard")
                    }}>
                        Dashboard
                    </Button>
                    {<Button type="button" onClick={async () => {
                        deleteCookie("token")
                        router.push("/login")
                    }}>
                        Logout
                    </Button>}
                </Group> : ""}
            </div>
    )
}
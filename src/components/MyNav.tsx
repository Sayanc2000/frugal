import {Button, Group, Title} from "@mantine/core"
import {useRouter} from "next/navigation";
import {deleteCookie, setCookie} from "cookies-next";

export default function MyNav() {
    const router = useRouter()

    return (
            <header style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <Group>
                    <Title order={1}>Frugal</Title>
                </Group>
                {<Button type="button" onClick={async () => {
                    deleteCookie("token")
                    router.push("/login")
                }}>Logout
                </Button>}
            </header>


    )
}
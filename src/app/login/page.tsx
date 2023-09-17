"use client";
import {doLogin} from "@/api/auth/login";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import Layout from "@/components/Layout";
import {Card, Text, TextInput, Anchor, PasswordInput, Center, Button, Alert} from "@mantine/core";
import {MdOutlineMail} from "react-icons/md";
import {HiOutlineLockClosed} from "react-icons/hi";
import {LoginValues} from "@/utils/datatypes";

export default function Login() {
    const router = useRouter()
    const {register, handleSubmit} = useForm<LoginValues>()

    const onSubmit = handleSubmit (async (data) => {
        const res: boolean = await doLogin(data)
        if (res){
            router.push("/")
        }
    })

    return (
        <Layout>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <Card w="30%" shadow="xs">
                    <Text fz="lg" mb="">Welcome back!</Text>
                    <Text fz="md">Not a user <Anchor href="/auth/signup">Signup</Anchor></Text>
                    <form method="post" className="w-full" onSubmit={onSubmit}>
                        <TextInput icon={<MdOutlineMail/>} my="10px" {...register("email")} placeholder="Email"/>
                        <PasswordInput icon={<HiOutlineLockClosed/>} my="10px" {...register("password")} placeholder="Password"/>
                        <br/>
                        <Center>
                            <Button type="submit">Submit</Button>
                        </Center>
                    </form>
                </Card>
                {/*{error &&<Alert withCloseButton onClose={() => setError("")} title="Bummer!" color="red" style={{position: 'absolute', bottom: '20px', left: '50%',*/}
                {/*    transform: 'translateX(-50%)', zIndex: 999}}>*/}
                {/*    {error}*/}
                {/*</Alert>}*/}
            </div>
        </Layout>
    )
}
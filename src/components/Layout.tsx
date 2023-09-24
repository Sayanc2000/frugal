"use client";
import {MantineProvider} from "@mantine/core";
import {ReactNode} from "react";
import MyNav from "@/components/MyNav";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <main>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
                <MyNav/>
                {children}
            </MantineProvider>
        </main>

    )
}
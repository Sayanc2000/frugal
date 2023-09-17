"use client";
import {MantineProvider} from "@mantine/core";
import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
            <main>
                {children}
            </main>
        </MantineProvider>

    )
}
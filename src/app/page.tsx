"use client";
import {Grid, Tabs} from "@mantine/core";
import {getCookie} from "cookies-next";
import {deleteEntry, getAllEntries} from "@/api/entries";
import {useEffect, useState} from "react";
import {Entry, EntryType} from "@/utils/datatypes";
import Layout from "@/components/Layout";
import {FaMoneyCheckDollar} from "react-icons/fa6";
import {TbPigMoney, TbReportMoney} from "react-icons/tb";
import EntryCard from "@/components/EntryCard";
import MyNav from "@/components/MyNav";
import EntryMenu from "@/components/EntryMenu";
import EntryModal from "@/components/EntryModal";
import {useDisclosure} from "@mantine/hooks";


export default function Home() {
    const token = getCookie("token")
    const [opened, { open, close }] = useDisclosure(false)
    const [entries, setEntries] = useState<Entry[]>([])

    async function handleDelete(entry_id: string) {
        const res = await deleteEntry(entry_id)
        if (res) {
            setEntries(entries.filter(entry => entry.id !== entry_id))
        }
    }

    useEffect(() => {
        // Define your async function
        async function getEntries() {
            try {
                const res = await getAllEntries(token);
                setEntries(res);
            } catch (error) {
                // Handle any errors that may occur during the API call
                console.error('Error fetching entries:', error);
            }
        }

        // Call the function
        getEntries();
    }, [token]);
    return (
        <main>
            <Layout>
                    <MyNav/>
                    <EntryModal opened={opened} close={close}/>
                    <div>
                        <Tabs mt={10} p={4} defaultValue="expenses">
                            <Tabs.List mb={10}>
                                <Tabs.Tab fz={20} value="expenses" icon={<FaMoneyCheckDollar size={20} />}>Expenses</Tabs.Tab>
                                <Tabs.Tab fz={20} value="incomes" icon={<TbPigMoney size={20} />}>Incomes</Tabs.Tab>
                                <Tabs.Tab fz={20} value="all" icon={<TbReportMoney size={20} />}>All</Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="expenses" pt="xs">
                                <Grid>
                                    {entries && entries.map((entry: Entry) => (
                                        (entry.kind == EntryType.EXPENSE) &&
                                        <Grid.Col key={entry.id} span={4}><EntryCard onDelete={(entry_id: string) => handleDelete(entry_id)} key={entry.id} entry={entry}/></Grid.Col>
                                    ))}
                                </Grid>
                            </Tabs.Panel>

                            <Tabs.Panel value="incomes" pt="xs">
                                <Grid>
                                    {entries && entries.map((entry: Entry) => (
                                        (entry.kind == EntryType.INCOME) &&
                                        <Grid.Col key={entry.id} span={4}><EntryCard onDelete={(entry_id: string) => handleDelete(entry_id)} key={entry.id} entry={entry}/></Grid.Col>
                                    ))}
                                </Grid>
                            </Tabs.Panel>

                            <Tabs.Panel value="all" pt="xs">
                                <Grid>
                                    {entries && entries.map((entry: Entry) => (
                                        <Grid.Col key={entry.id} span={4}><EntryCard onDelete={(entry_id: string) => handleDelete(entry_id)} key={entry.id} entry={entry}/></Grid.Col>
                                    ))}
                                </Grid>
                            </Tabs.Panel>
                        </Tabs>
                    </div>
                    <EntryMenu open={open}/>
            </Layout>
        </main>
    )
}

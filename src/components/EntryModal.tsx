import {Autocomplete, Button, Center, Modal, NumberInput, SegmentedControl, Space, TextInput} from "@mantine/core";
import {FaIndianRupeeSign} from "react-icons/fa6";
import {EntryType, EntryValues, ExpenseKind} from "@/utils/datatypes";
import {useState} from "react";
import {useForm} from "@mantine/form";
import {makeNewEntry} from "@/api/entries";
import {getCookie} from "cookies-next";
import {useStore} from "@/utils/store";

export default function EntryModal({opened, close}: {
    opened: boolean,
    close: () => void
}){
    const [value, setValue] = useState("EXPENSE");
    const {suggestions, addSuggestion} = useStore()
    const form = useForm<EntryValues>({
        initialValues: {
            title: '',
            amount: 100,
            kind: EntryType.INCOME,
            expenseKind: ExpenseKind.WANT
        },
    })
    const token = getCookie("token")
    return (
        <Modal opened={opened} onClose={close} centered title="New Entry">
                <form method="post" onSubmit={
                    form.onSubmit(async (values) => {
                        addSuggestion(values.title)
                        await makeNewEntry(values)
                        form.reset()
                        close()
                    })
                }>
                    <Autocomplete
                        required
                        {...form.getInputProps('title')}
                        label="Title"
                        data={suggestions}
                    />
                    <Space h={10}/>
                    <NumberInput
                        required
                        {...form.getInputProps('amount')}
                        label="Amount"
                        min={1}
                        defaultValue={100}
                        icon={<FaIndianRupeeSign/>}
                    />
                    <Space h={20}/>
                    <SegmentedControl
                        {...form.getInputProps('kind')}
                        data={[
                            { label: 'Expense', value: EntryType.EXPENSE },
                            { label: 'Income', value: EntryType.INCOME }
                        ]}
                    />
                    <Space h={20}/>
                    <SegmentedControl
                        {...form.getInputProps('expenseKind')}
                        disabled={form.values.kind == EntryType.INCOME}
                        data={[
                            { label: 'Want', value: ExpenseKind.WANT },
                            { label: 'Need', value: ExpenseKind.NEED }
                        ]}
                    />
                    <br/>
                    <Space h={20}/>
                    <Center>
                        <Button type="submit">Submit</Button>
                    </Center>
                </form>
        </Modal>
    )
}
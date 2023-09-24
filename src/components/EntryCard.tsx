import {Card, Text, Badge, Group, Menu, ActionIcon, Title, Space} from "@mantine/core";
import {Entry} from "@/utils/datatypes";
import {HiDotsHorizontal} from "react-icons/hi";
import {MdOutlineDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";

function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    // You can customize the date and time formatting as needed
    const formattedDate = date.toLocaleDateString('en-IN');
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${formattedDate} ${formattedTime}`;
}

export default function EntryCard({entry, onDelete}: {entry: Entry, onDelete: (entry_id: string) => void}) {
    if(entry.kind == "INCOME"){
        return (

            <Card m={10} mt={15} mb={15} bg="grey.8" withBorder shadow="sm" style={{overflow: 'visible'}}>
                <Group style={{justifyContent: 'space-between'}}>
                    <Title order={4}>{entry.title}</Title>
                    <Menu>
                        <Menu.Target>
                            <ActionIcon>
                                <HiDotsHorizontal/>
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item icon={<MdOutlineModeEditOutline/>}>
                                Edit
                            </Menu.Item>
                            <Menu.Item onClick={() => onDelete(entry.id)} icon={<MdOutlineDeleteOutline/>}>
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
                <Space h={10}/>
                <Group style={{justifyContent: 'end'}}>
                    <Text color="green.9">₹ {entry.amount}</Text>
                </Group>
                <Space h={20}/>
                <Group style={{justifyContent: 'end'}}>
                    <Text>{formatTimestamp(entry.timestamp)}</Text>
                </Group>
            </Card>
        )
    }
    else{
        return (
            <Card m={10} mt={15} mb={15} bg="grey.8" withBorder shadow="sm" style={{overflow: 'visible'}}>
                <Group style={{justifyContent: 'space-between'}}>
                        <Title order={4}>{entry.title}</Title>
                        <Menu>
                            <Menu.Target>
                                <ActionIcon>
                                    <HiDotsHorizontal/>
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item icon={<MdOutlineModeEditOutline/>}>
                                    Edit
                                </Menu.Item>
                                <Menu.Item onClick={() => onDelete(entry.id)} icon={<MdOutlineDeleteOutline/>}>
                                    Delete
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                <Space h={10}/>
                <Group style={{justifyContent: 'space-between'}}>
                    {entry.expenseKind ? <Badge>
                        {entry.expenseKind}
                    </Badge>: ""}
                    <Text color="red.9">₹ {entry.amount}</Text>
                </Group>
                <Space h={20}/>
                <Group style={{justifyContent: 'end'}}>
                    <Text>{formatTimestamp(entry.timestamp)}</Text>
                </Group>
            </Card>
        )
    }

}
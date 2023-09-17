import {Card, Text, Badge, Group, Menu, ActionIcon} from "@mantine/core";
import {Entry} from "@/utils/datatypes";
import {HiDotsHorizontal} from "react-icons/hi";
import {MdOutlineDeleteOutline, MdOutlineModeEditOutline} from "react-icons/md";

function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp);

    // You can customize the date and time formatting as needed
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${formattedDate} ${formattedTime}`;
}

export default function EntryCard({entry, onDelete}: {entry: Entry, onDelete: (entry_id: string) => void}) {
    if(entry.kind == "INCOME"){
        return (

            <Card m={10} mt={15} mb={15} bg="grey.8" withBorder shadow="sm" style={{overflow: 'visible'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text>{formatTimestamp(entry.timestamp)}</Text>
                    <Group>
                        <Text color="green.9">₹ {entry.amount}</Text>
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
                </div>
            </Card>
        )
    }
    else{
        return (
            <Card m={10} mt={15} mb={15} bg="grey.8" withBorder shadow="sm" style={{overflow: 'visible'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text>{formatTimestamp(entry.timestamp)}</Text>
                    <Group>
                        <Text color="red.9">₹ {entry.amount}</Text>
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
                </div>
                {entry.expenseKind && <Badge mt={10}>
                    {entry.expenseKind}
                </Badge>}
            </Card>
        )
    }

}
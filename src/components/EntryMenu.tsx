import {Affix, Button, Menu, rem} from "@mantine/core";
import {IoMdAddCircleOutline} from "react-icons/io";

export default function EntryMenu({open}: {open: () => void}) {
    return (
        <Affix position={{ bottom: rem(10), right: rem(10) }}>
            <Button h={50} w={50} radius={50} p={4} onClick={open}><IoMdAddCircleOutline size={25}/></Button>
        </Affix>
    )
}
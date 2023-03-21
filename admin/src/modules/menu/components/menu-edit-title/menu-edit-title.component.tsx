import {useRecordContext} from "react-admin";
import {Menu} from "@app/core/types";

export const MenuEditTitle = () => {
    const menuItem = useRecordContext<Menu>()
    if(!menuItem){
        return null
    }
    return <div>{menuItem.title}</div>
}
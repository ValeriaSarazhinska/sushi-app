import {AppBar as AppBarOriginal, AppBarProps} from "react-admin"
import {FC} from "react";
import {UserMenu} from "@app/common/components/user-menu/user-menu.component";

export const AppBar: FC<AppBarProps> = (props) => {
    return <AppBarOriginal {...props} userMenu={<UserMenu/>}/>
}
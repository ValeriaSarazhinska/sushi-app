import {Layout as LayoutOriginal, LayoutProps} from "react-admin";
import {AppBar} from "@app/common/components/app-bar/app-bar.component";
import {FC} from "react";

export const Layout:FC <LayoutProps> = (props) => {
    return(
        <LayoutOriginal {...props} appBar={AppBar}/>
    )
}
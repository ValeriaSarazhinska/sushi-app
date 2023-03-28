import {FC} from "react";
import {SaveButton, Toolbar, ToolbarProps} from "react-admin";

export const SettingsEditToolbar: FC<ToolbarProps> = (props) => {
    return (
        <Toolbar {...props}>
            <SaveButton/>
        </Toolbar>
    )

}
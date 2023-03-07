import { MenuItem } from "../menu-item/menu-item.component";
import {FC} from "react";
import {Sushi} from "@app/modules/menu/types/sushi"

interface MenuListProps{
    items: Sushi[]
}
export const MenuList: FC<MenuListProps> = ({items}) => {
    return (
        <div className="flex flex-wrap gap-10 justify-center">
            {items.map(({image, ...sushi}) => (
                <MenuItem {...sushi} imagePath={'assets/sushi/' + image} key={`sushi-${sushi.id}`}/>
            ))}
        </div>
    )
}
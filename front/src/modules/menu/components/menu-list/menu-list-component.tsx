import {MenuItem} from "../menu-item/menu-item.component";
import {FC} from "react";
import {Menu, useGetSettingsQuery} from "@app/core/types";

interface MenuListProps {
    items: Menu[]
}

export const MenuList: FC<MenuListProps> = ({items}) => {
    const {data: settings} = useGetSettingsQuery({fetchPolicy:'cache-only'})
    return (
        <div className="flex flex-wrap gap-10 justify-center">
            {items.map(({image, ...sushi}) => (
                <MenuItem
                    {...sushi}
                    image={image}
                    key={`sushi-${sushi.id}`}
                    fitImage={sushi.category_id === settings?.settings[0].cocktails_category}/>
            ))}
        </div>
    )
}
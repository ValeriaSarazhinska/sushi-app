import sushiMenu from '@app/mocks/sushi.json'
import { MenuItem } from "../menu-item/menu-item.component";

export const MenuList = () => {
    return (
        <div className="flex flex-wrap gap-10">
            {sushiMenu.map(({image, ...sushi}) => (
                <MenuItem {...sushi} imagePath={'assets/sushi/' + image}/>
            ))}
        </div>
    )
}
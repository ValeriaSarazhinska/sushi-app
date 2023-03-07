import {Header} from "@app/common/commonts/header/header.component";
import {MenuList} from "@app/modules/menu/components/menu-list/menu-list-component";
import sushiMenu from "@app/mocks/sushi.json"
import {Footer} from "@app/common/commonts/footer/footer.component";
export const App = () => {
    return (
        <div>
            <Header/>
            <div className="mx-12 mb-24"><MenuList items={sushiMenu}/></div>
            <Footer/>
        </div>
    );
}


import {FC} from "react";
import {cloudinary} from "@app/core/cloudinary";
import {AdvancedImage} from "@cloudinary/react";
import clsx from "clsx";

interface MenuItemProps {
    image: string;
    weight?: number;
    title: string;
    ingredients?: string | null;
    price: number;
    fitImage?: boolean;
}


export const MenuItem: FC<MenuItemProps> = ({
                                                image,
                                                weight,
                                                title,
                                                ingredients,
                                                price,
                                                fitImage = false,
                                            }) => {
    const transfomation = ['w_384', 'h_240']
    if (!fitImage) {
        transfomation.unshift('c_pad')
    }

    const imageCld = cloudinary.image(image);
    console.log('###', imageCld)

    imageCld.addTransformation(transfomation.join(','));

    const  titleClasses = clsx('text-xl font-semibold', {
        "md-2": ingredients,
        "mb-8": !ingredients
    })

    return (
        <div className="w-96 shadow-xl rounded-2xl bg-white">
            <div className="relative">
                <AdvancedImage cldImg={imageCld} widt={384} height={240} className="rounded-t-2xl"/>
                {weight &&
                    <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
           {weight} g
            </span>}
            </div>
            <div className="p-8">
                <h2 className={titleClasses}> {title}</h2>
                {ingredients && <p className="mb-8">{ingredients}</p>}
                <span className="text-xl font-semibold"> {price} грн.</span>
            </div>
        </div>
    )
}
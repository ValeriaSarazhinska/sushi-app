import {FooterLink} from "@app/common/commonts/footer-link/footer-link.component";

export const Footer = () => {
    return (
        <div className="bg-gray-900 pt-12 px-12 pb-8">
            <div>
                <div className="mb-4">
                    <span className="uppercase font-bold text-sm text-zinc-500">Contacts
                    </span>
                </div>
                <div className="mb-8">
                    <ul>
                        <FooterLink href="tel:+380961221155">096 122 11 55</FooterLink>
                        <FooterLink href="mailto:lera.sarazhinska@gmail.com">lera.sarazhinska@gmail.com</FooterLink>
                    </ul>
                </div>
                <hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8'/>
                <div>
                    <span className="text-xl font-semibold text-white ">
                        Sushi App
                    </span>
                </div>
            </div>
        </div>
    )
}

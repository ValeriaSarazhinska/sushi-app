import {FC, PropsWithChildren} from "react";

interface FooterLinkProps {
    href: string;
}

export  const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({href, children}) => {
    return(
        <li>
            <a href={href}
               className="font-bold test-sm text-gray-400 hover:test-gray-300 hover:underline">
                {children}
            </a>
        </li>
    )
}

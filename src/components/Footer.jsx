import { Container } from "./Container"
import { social } from "../constants"

export const Footer = () => {
    return(
        <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16 ">
            <Container className="
            flex 
            flex-col 
            gap-3 
            lg:flex-row 
            lg:gap-1 
            items-center 
            justify-between
            body-3
            text-n-3
            ">
                <div className="flex items-center gap-4">
                    {social.map((social) => (
                        <a key={social.id} title={social.alt} href={social.link} target="_blank" rel="noopener noreferrer">
                            <img src={social.ico} alt={social.alt} width={20} height={20} />
                        </a>
                    ))}
                </div>
                <div className="splace-x-4">
                    <a href="#/" target="_blank" rel="noopener noreferrer">
                        terms & conditions
                    </a>
                    <a href="#/" target="_blank" rel="noopener noreferrer">
                        privacy policy
                    </a>

                </div>
                <div>
                    &copy; {new Date().getFullYear()} Innova Solutions . All rights reserved{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Innova Solutions
                    </a>
                </div>
            </Container>
        </div>
    )
}
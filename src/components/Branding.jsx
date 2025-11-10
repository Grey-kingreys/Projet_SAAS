import { Container } from "./Container"
import { branding } from "../constants"

export const Branding = () => {
    return(
       <Container>
        {branding.map((brand) => (
            <img src={brand.image} width={180} height={96} alt={brand.alt} />
        ))}
       </Container>
    )
}
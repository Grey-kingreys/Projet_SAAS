import { Container } from "./Container";
import { Button } from "./Button";
import { icoArrowRight } from "../assets";

export const CallToAction = ({ minify = false }) => {
    return (
       <Container>
        <div className="max-w-4xl mx-auto py-5 lg:py-10">
            <div className={
                `flex flex-col items-center rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8
                ${
                    minify
                        ? "lg:flex lg:flex-row lg:items-center lg:justify-between"
                        : ""
                }`
            }>
                <div className={minify ? "text-center space-y-4 lg:text-start lg:space-y-1" : "text-center space-y-4"}>
                    <div className="caption-1 text-n-1/50">Prêt à commencer ?</div>
                    <h3 className="h3">Commencez votre essai gratuit dès aujourd'hui !</h3>
                </div>
                <Button theme="primary" className="flex items-center justify-center gap-1">
                    <span>Commencer</span>
                    <img src={icoArrowRight} alt="Arrow Right" width={24} height={24} />
                </Button>
            </div>
        </div>
       </Container>
    );
}
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Branding } from "./components/Branding";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { BullePoints } from "./components/BulletPoints";
import { Princing } from "./components/Princing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <BullePoints />
      <Princing />
      <CallToAction minify />
      <Footer />
    </>
  );
}

export default App;

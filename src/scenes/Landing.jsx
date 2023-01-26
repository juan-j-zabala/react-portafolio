import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Landing() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")  

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16">
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div>
             
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  )
}

export default Landing;

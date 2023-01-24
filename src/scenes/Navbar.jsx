import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

function Link({ page, selectedPage, setSelectedPage }) {
  const LowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === LowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
      href={`#${LowerCasePage}`}
      onClick={() => setSelectedPage(LowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

function Navbar({ selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>
        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>                            
    </nav>
  );
}

export default Navbar;  

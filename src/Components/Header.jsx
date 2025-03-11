import { useState } from "react";
import Navabr from "./Navabr"
import { Link } from "react-router";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className={`${isMobileMenuOpen ? 'mb-72':'mb-20'} flex justify-between p-1  `}>
           <Link to={"/"}><img src="./Logo.png" className="w-32"/></Link>
           <Navabr isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
           
            
        </header>
    )
}

export default Header

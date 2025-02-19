import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { ImMenu3 } from "react-icons/im";
import { PropsWithChildren } from 'react';
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import '@/Style/Guest.css'

export default function Guest({ children }: PropsWithChildren) {
    

    const [isVisible, setIsVisible] = useState(true); // Contrôle de la visibilité de la navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Dernière position de scroll

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Cacher la navbar si on défile vers le bas
        } else {
            setIsVisible(true); // Afficher la navbar si on remonte
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='container'>
             <div className={`navbar  ${isVisible ? "visible" : "hidden"}`}>
            
                <div className="logosection ">
                    <img 
                        src={logo} 
                        alt="Logo"  
                        
                    />
                </div>

                <div className='menusection'>
                    
                    <div className='menu ' onClick={ () => window.open('/','_self')}>Accueil</div>
                    <div className='menu ' onClick={ () => window.open('/presentation','_self')}>
                        Présentation
                        {/* <div className="dropdown-content">
                            <div className="submenu" >Mot du Directeur</div>
                            <div className="submenu" >Campus</div>
                        </div> */}
                    </div>
                    <div className='menu ' onClick={ () => window.open('/ecole','_self')}>Filieres</div>
                    <div className='menu  ' onClick={ () => window.open('/partenaire','_self')}>Partenaires</div>
                    <div className='menu ' onClick={ () => window.open('/actualités','_self')}>Actualités</div>
                    <div className='menu ' >Offres de stage</div>
                    

                </div>
                <div className='menu2 ' onClick={toggleMenu}>
                        {menuOpen ? <ImMenu3 /> : <ImMenu3 />}
                </div>
            </div>

            <div className={`navbar2  ${isVisible ? "visible" : "hidden"}`}>
            
            <div className="logosection2 ">
                <img 
                    src={logo} 
                    alt="Logo"  
                    
                />
            </div>

            <div className='menu2 ' onClick={toggleMenu}>
                    {menuOpen ? <IoMdCloseCircleOutline /> : <LuMenu />}
                </div>
        </div>



            {menuOpen && (
                <>  
                <nav className='menu3'>
                    <ul>
                        <li onClick={ () => window.open('/','_self')}>Accueil</li>
                        <li onClick={ () => window.open('/presentation','_self')}>Presentation</li>
                        <li onClick={ () => window.open('/ecole','_self')}>Filieres</li>
                        <li onClick={ () => window.open('/partenaire','_self')}>Partenaires</li>
                        <li onClick={ () => window.open('/actualités','_self')}>Actualités</li>
                        <li>Offres de stage</li>
                    </ul>
                    
                </nav>
                </>

            )}

            <div className='guestchildren'>
                {children}
            </div>
            
        </div>
    );
}

import Guest from '@/Layouts/GuestLayout';
import Footer from '@/Layouts/Footer';
import { FaCircleArrowDown } from "react-icons/fa6";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import React from 'react';
import image from "@/Assets/SiteSud.8d60a40fc4177a07cebc.jpg"
import '@/Style/Ecoles.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { usePage } from '@inertiajs/react';
import { useEffect } from "react"; // Ajout de useEffect pour les animations

const Ecoles = () => {
  const { filieres } = usePage().props as unknown as { filieres: { id: number, cycle: string, nom_filiere: string, debouchés: string }[] };
  
  const filieresIngenieur = filieres.filter(filiere => filiere.cycle === 'Cycle Ingénieur');

  const filieresTechnicien = filieres.filter(filiere => filiere.cycle === 'Cycle Technicien Supérieur');

 
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durée de l'animation
        once: false, // Permet de rejouer l'animation à chaque passage
    });
}, []);  


  return (
    <Guest>
    <div className='presentation-container'>

    
      <div className="blurred-image-container">
            <img
            src={image} // Remplace par l'URL de ton image
            alt="Background"
            className="background-image"
            />
            <div className="overlay"></div>
            <div className="slider-text">
                <h2>Nos Formations</h2>
                      
            </div>
      </div>
      <div className="page-formation-alt">
                <h1>Cycle Technicien Supérieur<FaCircleArrowDown /></h1>
                <div className="schools-list" >
                    {filieresTechnicien.map((filiere, index) => (
                        <div key={index} className="school-block" data-aos="zoom-out-up" data-aos-once="false" style={{ borderLeft: `10px solid #555` }}>
                            <div className="school-info" >
                                <h4>{filiere.nom_filiere}</h4>
                                <p>{filiere.debouchés}</p>
                            </div>
                        </div>
                    ))}
                </div>
            {/* </div> */}
            

        <div className="page-formation-alt2">
          <h1>Cycle Ingénieur<FaCircleArrowDown /></h1>
          <div className="schools-list" >
                    {filieresIngenieur.map((filiere, index) => (
                        <div key={index} className="school-block" data-aos="zoom-out-up" data-aos-once="false" style={{ borderLeft: `10px solid #555` }}>
                            <div className="school-info" >
                                <h4>{filiere.nom_filiere}</h4>
                                <p>{filiere.debouchés}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>

      </div>



      <footer className="footer-container">
      <div className="footer-left">
        <h3>ESTP</h3>
        <p>École Supérieure des travaux publiques</p>
        
      </div>

      <div className="footer-links">
        <h3>Liens rapides</h3>
        <ul>
          <li onClick={(e) => { e.preventDefault(); window.open('/','_self'); }}>Accueil</li>
          <li onClick={(e) => { e.preventDefault(); window.open('/presentation','_self'); }}>Présentation</li>
          <li onClick={(e) => { e.preventDefault(); window.open('/ecole','_self'); }}>Filières</li>
          <li onClick={(e) => { e.preventDefault(); window.open('/partenaire','_self'); }}>Partenaires</li>
          <li onClick={(e) => { e.preventDefault(); window.open('/actualites/page','_self'); }}>Actualités</li>
          <li><a className="no-underline" href="https://www.careercenter.inphb.app/" target="_blank" rel="noopener noreferrer">Offres de stage</a></li>
        </ul>

      </div>

      <div className="footer-contact">
        <h3>Contact</h3>
        <p>📍 INP-HB SUD, Yamoussoukro, Côte d'Ivoire</p>
        <p>📞 +225 27 30 64 66 61 | 05 01 80 00 19</p>
        <p>✉️ <a href="mailto:secretariat.escae@inphb.ci">secretariat.estp@inphb.ci</a></p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ESTP. Tous droits réservés.</p>
        
      </div>
      </footer>
      {/* <Footer></Footer> */}
    </div>
    </Guest>
  );
};

export default Ecoles;

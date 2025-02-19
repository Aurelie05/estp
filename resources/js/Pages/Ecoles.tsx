import Guest from '@/Layouts/GuestLayout';
// import Footer from '@/Layouts/Footer';
import { FaCircleArrowDown } from "react-icons/fa6";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import React from 'react';
import image from "@/Assets/SiteSud.8d60a40fc4177a07cebc.jpg"
import '@/Style/Ecoles.css';
import { usePage } from '@inertiajs/react';

const Ecoles = () => {
  const { filieres } = usePage().props as unknown as { filieres: { id: number, cycle: string, nom_filiere: string, debouchés: string }[] };
  
  const filieresIngenieur = filieres.filter(filiere => filiere.cycle === 'Cycle Ingénieur');

  const filieresTechnicien = filieres.filter(filiere => filiere.cycle === 'Cycle Technicien Supérieur');

 
 

  return (
    <Guest>
      <div className="blurred-image-container">
            <img
            src={image} // Remplace par l'URL de ton image
            alt="Background"
            className="background-image"
            />
            <div className="overlay"></div>
      </div>
      <div className="page-formation-alt">
                <h1>Cycle Technicien Supérieur <FaCircleArrowDown /></h1>
                <div className="schools-list">
                    {filieresTechnicien.map((filiere, index) => (
                        <div key={index} className="school-block" style={{ borderLeft: `10px solid #6200EA` }}>
                            <div className="school-info">
                                <h4>{filiere.nom_filiere}</h4>
                                <p>{filiere.debouchés}</p>
                            </div>
                        </div>
                    ))}
                </div>
            {/* </div> */}

        <div className="page-formation-alt2">
          <h1>Cycle Ingénieur<FaCircleArrowDown /></h1>
          <div className="schools-list">
                    {filieresIngenieur.map((filiere, index) => (
                        <div key={index} className="school-block" style={{ borderLeft: `10px solid #6200EA` }}>
                            <div className="school-info">
                                <h4>{filiere.nom_filiere}</h4>
                                <p>{filiere.debouchés}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>

        {/* <div className='box8'>
                    <h2>
                        Débouchés <FaCircleArrowDown />
                    </h2>
                    <div className="table-container">
                        {rows.map((row, index) => (
                            <div className="table-row" key={index}>
                            <div className="table-title">{row.title}</div>
                            <div className="table-description">{row.description}</div>
                            </div>
                        ))}
                    </div>
        </div> */}
      </div>



        <footer className="footer-container">
      <div className="footer-section">
        <h3>ECOLE SUPERIEURE DES TRAVAUX PUBLICS</h3>
        <ul>
          <li>Contacts</li>
          <li>Adresse électronique</li>
          <li>Nous suivre sur les réseaux</li>
        </ul>
      </div>

      <div className="footer-center">
        <img src={logo} alt="Logo ESTP" className="footer-logo" />
        <p>Newsletter</p>
        <div className="newsletter-container">
          <input type="email" placeholder="Votre email" className="newsletter-input" />
          <button className="newsletter-button">SOUMETTRE</button>
        </div>
      </div>

      <div className="footer-section">
        <h3>NOS PARTENAIRES</h3>
        <ul>
          <li>Contacts</li>
          <li>Adresse électronique</li>
          <li>Nous suivre sur les réseaux</li>
        </ul>
        </div>
    
      <div className="footer-bottom">
        <p>By INP-HB Digital Copyright © 2025</p>
      </div>
    </footer>            
      {/* <Footer></Footer> */}
    </Guest>
  );
};

export default Ecoles;

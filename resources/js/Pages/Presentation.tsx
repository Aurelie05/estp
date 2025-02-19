import React from "react";
import { usePage } from '@inertiajs/react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import Guest from '@/Layouts/GuestLayout';
import '@/Style/Presentation.css'
import Slider from "react-slick";
import image from "@/Assets/SiteSud.8d60a40fc4177a07cebc.jpg"
import image2 from '@/Assets/INP-HB_files/ESTP.6022a53348fd04e97539.png'
import slide1 from '@/Assets/SiteSud3.5deff3c7f79f2664d30c.jpg'
import slide2 from '@/Assets/SiteSud4.287cfcf705cf36fa10d2.jpg'
import slide3 from '@/Assets/SiteSud6.df1e344005c77a58d5a5.jpg'

interface Information {
  id: number;
  titre: string;
  image: string;
  nom_image: string;
  description: string;
}

interface PageProps {
  auth: any;
  informations: Information[];  // Tableau d'objets Information
  [key: string]: any;
}
export default function Presentation() {
  const { auth, informations } = usePage<PageProps>().props;

  console.log(informations);

  return (
    <Guest>
    <div className="presentation-container">
      {/* Composant Guest */}
     

      {/* Section avec l'image floutée */}
      <div className="blurred-image-container">
            <img
            src={image} // Remplace par l'URL de ton image
            alt="Background"
            className="background-image"
            />
            <div className="overlay"></div>
      </div>
      <div className="presentation-section">
            {informations && informations.length > 0 ? (
                informations.map((information) => (
                    <div key={information.id} className="director-container">
                        {/* Image du Directeur */}
                        <div className="director-image">
                            <img src={`/storage/${information.image}`} alt="Information" className="director-photo" />
                            <h3 className="director-name">{information.nom_image ?? 'Directeur'}</h3>
                        </div>

                        {/* Contenu du texte */}
                        <div className="director-content">
                            <h2 className="director-title">{information.titre ?? 'Directeur'}</h2>
                            <p className="director-text">
                                {information.description ?? 'Aucune information disponible.'}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Aucune information disponible.</p>  // Message si le tableau est vide
            )}
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
    </div>
    </Guest>
  );
};



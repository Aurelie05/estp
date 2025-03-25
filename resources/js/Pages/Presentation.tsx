// import React from "react";
import { usePage } from '@inertiajs/react';
import React, { useState } from "react";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import Guest from '@/Layouts/GuestLayout';
import '@/Style/Presentation.css'
import Footer from "@/Layouts/Footer";
import { useEffect } from "react"; // Ajout de useEffect pour les animations
import Slider from "react-slick";
import image from "@/Assets/SiteSud.8d60a40fc4177a07cebc.jpg"
import image2 from '@/Assets/INP-HB_files/ESTP.6022a53348fd04e97539.png'
import slide1 from '@/Assets/SiteSud3.5deff3c7f79f2664d30c.jpg'
import slide2 from '@/Assets/SiteSud4.287cfcf705cf36fa10d2.jpg'
import slide3 from '@/Assets/SiteSud6.df1e344005c77a58d5a5.jpg'
import AOS from "aos";
import "aos/dist/aos.css";


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

  // Liste des points forts
const pointsForts = [
  {
    title: "Excellence académique",
    description:
      "Des programmes rigoureux conçus pour répondre aux plus hauts standards internationaux.",
    icon: "🎓", // Icône (tu peux remplacer par des images)
  },
  {
    title: "Partenariats prestigieux",
    description:
      "Des collaborations avec plus de 10 entreprises et 10 universités internationales pour enrichir l'expérience étudiante.",
    icon: "🤝",
  },
  {
    title: "Dimension internationale",
    description:
      "Des opportunités d’échanges académiques, des stages à l’étranger et un environnement multiculturel.",
    icon: "🌍",
  },
  {
    title: "Insertion professionnelle",
    description:
      "Un taux d'insertion de 94% et un réseau d'alumni présent dans les plus grandes entreprises nationales et internationales.",
    icon: "💼",
  },
  {
    title: "Corps professoral qualifié",
    description:
      "Des enseignants-chercheurs et des intervenants professionnels experts dans leur domaine.",
    icon: "👨‍🏫",
  },
  {
    title: "Infrastructures modernes",
    description:
      "Un campus équipé des dernières technologies et des espaces de travail adaptés aux besoins des étudiants.",
    icon: "🏢",
  },
];

useEffect(() => {
  AOS.init({
      duration: 1000, // Durée de l'animation
      once: false, // Permet de rejouer l'animation à chaque passage
  });
}, []); 

const [isOpen, setIsOpen] = useState(false);
const [selectedId, setSelectedId] = useState<number | null>(null);


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
        <div className="presentation-section" data-aos="flip-up" data-aos-once="false">
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
                            <div className="voir">
                            <button
                                        className="open-button"
                                        onClick={() => {
                                            setSelectedId(information.id);  // ✅ Enregistre l'ID sélectionné
                                            setIsOpen(true);
                                        }}
                                    >
                                        Voir plus
                                    </button>
                              
                            </div>

                        </div>
                    </div>
                ))
            ) : (
                <p>Aucune information disponible.</p>  // Message si le tableau est vide
            )}
        </div>
        <div>

{isOpen && (
  <div className="modal-overlay">
      <div className="modal-content">
          <h2>Mot du Directeur</h2>
          <p className="director-texto">
              {informations.find(info => info.id === selectedId)?.description ?? 'Aucune information disponible.'}
          </p>
          <button 
              className="close-button" 
              onClick={() => setIsOpen(false)}
          >
              Fermer
          </button>
      </div>
  </div>
)}
</div>
        <div className="section1" data-aos="zoom-out-up" data-aos-once="false">
          <h2>A propos</h2>
          <p className="text-section">Crée en 1963, l’École Nationale Supérieure des travaux
            Publics (ENSTP) initialement à Abidjan a été transférée
            à Yamoussoukro en 1979. À la faveur de la restructuration
            des grandes écoles de Yamoussoukro en 1996, l’INP-HB
            a été créé. Il regroupe huit (08) grandes écoles dont
            l’École Supérieure des Travaux Publics (ESTP).
            Transfuge de l’ex-ENSTP, l’ESTP est chargée d’assurer
            la formation initiale dans le domaine du Génie Civil.
            L’ESTP a pour mission :
            <ul>
              <li>la Formation initiale de Techniciens Supérieurs et d’Ingénieurs
                    dans les domaines du Génie Civil et de toutes spécialités
                    connexes
              </li>
              <li>la Production</li>
              <li>la Prestation et expertise pour les entreprises et les
              collectivités locales.</li>
            </ul>
          </p>
        </div>

        <section className="points-forts-section">
          <h2>Nos points forts</h2>
          <div className="points-forts-container" >
            {pointsForts.map((point, index) => (
              <div key={index} className="point-card" data-aos="zoom-out-up" data-aos-once="false">
                <div className="icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
              
            ))}
          </div>
        </section>

        

    



    {/* <footer className="footer-container">
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
    </footer> */}
    <Footer></Footer>
    </div>
    </Guest>
  );
};



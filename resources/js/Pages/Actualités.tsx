import React from "react";
import "@/Style/Actualités.css";
import Guest from "@/Layouts/GuestLayout";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import image1 from '@/Assets/genie civil.jpg'
import image2 from '@/Assets/porte ouverte.jpg'
import image3 from '@/Assets/partenariat.jpg'

const actualites = [
  {
    id: 1,
    title: "Conférence internationale sur le génie civil",
    date: "20 Janvier 2025",
    description:
      "Participez à notre conférence annuelle sur les avancées dans le domaine du génie civil.",
    image: image1,
  },
  {
    id: 2,
    title: "Journée portes ouvertes",
    date: "15 Février 2025",
    description:
      "Découvrez nos infrastructures et rencontrez nos enseignants lors de la journée portes ouvertes.",
    image: image2,
  },
  {
    id: 3,
    title: "Nouveaux partenariats d'entreprises",
    date: "10 Mars 2025",
    description:
      "ESTP s'associe avec des entreprises internationales pour des stages et des opportunités de carrière.",
    image: image3,
  },
];

const Actualite = () => {
  return (

    <Guest>
    <div className="actualite-container">
      {/* En-tête */}
      <header className="actualite-header">
        <h1>Actualités de l'ESTP</h1>
        <p>Toutes les dernières nouvelles et événements de notre université.</p>
      </header>

      {/* Liste des actualités */}
      <div className="actualite-list">
        {actualites.map((actu) => (
          <div key={actu.id} className="actualite-card">
            <img src={actu.image} alt={actu.title} className="actualite-image" />
            <div className="actualite-content">
              <h2 className="actualite-title">{actu.title}</h2>
              <p className="actualite-date">{actu.date}</p>
              <p className="actualite-description">{actu.description}</p>
              <button className="actualite-button">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
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
    </Guest>
  );
};

export default Actualite;

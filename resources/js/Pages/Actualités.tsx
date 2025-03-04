import React from "react";
import { usePage } from "@inertiajs/react";
import "@/Style/Actualités.css";
import Guest from "@/Layouts/GuestLayout";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import image1 from '@/Assets/genie civil.jpg'
import image2 from '@/Assets/porte ouverte.jpg'
import image3 from '@/Assets/partenariat.jpg'

interface Actualite {
  id: number;
  titre: string;
  image: string;
  date: string;
  lieu: string;
  description: string;
}




const Actualite = () => {
  const { actualites = [] } = usePage().props as { actualites?: Actualite[] };

  console.log("Données reçues :", usePage().props);
  

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
          {actualites.length > 0 ? (
            actualites.map((actu) => (
              <div key={actu.id} className="actualite-card">
                <img src={`/storage/${actu.image}`} alt={actu.titre} className="actualite-image" />
                <div className="actualite-content">
                  <h2 className="actualite-title">{actu.titre}</h2>
                  <p className="actualite-date">{actu.date}</p>
                  <p className="actualite-description">{actu.description}</p>
                  <button className="actualite-button">En savoir plus</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-actualites">Aucune actualité disponible.</p>
          )}
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


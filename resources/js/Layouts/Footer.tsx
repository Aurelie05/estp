import React from "react";
import "@/Style/Footer.css";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;

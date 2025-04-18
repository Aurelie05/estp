import React from "react";
import Footer from "@/Layouts/Footer";
import '@/Style/Partenaires.css';
import Guest from "@/Layouts/GuestLayout";
import "slick-carousel/slick/slick.css";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import "slick-carousel/slick/slick-theme.css";
import Pa from "@/Assets/INP-HB_files/PA (2).592d777f90d86ce57947.png"
import college from '@/Assets/logo-college-montmorency.png'
import Slider from "react-slick";
import image from "@/Assets/SiteSud4.287cfcf705cf36fa10d2.jpg"
import slide2 from "@/Assets/INP-HB_files/PE (2).0bbba88c4d6cae1d2614.png"
import slide3 from "@/Assets/INP-HB_files/PE (3).6c49da634e18ba182378.png"
import slide4 from "@/Assets/INP-HB_files/PE (6).4a4a7e32114788396eba.png"
import slide5 from "@/Assets/INP-HB_files/PE (8).cc92af4dbb97457ae5ce.png"
import logo1 from '@/Assets/25.jpg'
import logo2 from '@/Assets/logo-enpc-ip-cmjn_vertical.jpg'
import logo3 from '@/Assets/深圳职业技术大学logo.jpg'
import logo4 from '@/Assets/Razel-Bec_Logo.png'
import logo5 from '@/Assets/pfo.png'
import logo6 from '@/Assets/btp.png'
import logo7 from '@/Assets/images.jpg'
import logo8 from '@/Assets/1631302844732.jpg'
import logo9 from '@/Assets/AGEROUTE.jpg'




// Exemple de données pour les partenaires (vous pouvez remplacer avec des données dynamiques)
const partenairesAcademiques = [
  { id: 1,  logo: Pa },
  { id: 2,  logo: logo3 },
  { id: 3,  logo: college },
  { id: 4,  logo: logo1 },
  { id: 5,  logo: logo2 },
  
];

const partenairesEntreprises = [
  { id: 1,  logo:  slide2},
  { id: 1,  logo:  slide3},
  { id: 1,  logo:  slide4},
  { id: 1,  logo:  slide5},
  { id: 1,  logo:  logo4},
  { id: 1,  logo:  logo5},
  { id: 1,  logo:  logo6},
  { id: 1,  logo:  logo7},
  { id: 1,  logo:  logo8},
  { id: 1,  logo:  logo9},

];

const Partenaire = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768, // Pour les petits écrans
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480, // Pour les très petits écrans
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <Guest>
      <div className="blurred-image-container">
            <img
            src={image} // Remplace par l'URL de ton image
            alt="Background"
            className="background-image"
            />
            <div className="overlay"></div>
            <div className="slider-text">
                <h2>Nos Partenaires</h2>
                      
            </div>
      </div>
     <div className="partenaire-container">
      {/* <h1 className="partenaire-title">Nos Partenaires</h1> */}

      {/* Section Partenaires Académiques */}
      <section className="partenaire-section">
        <h2 className="section-title">Quelques Partenaires Académiques</h2>
        <Slider {...sliderSettings}>
          {partenairesAcademiques.map((partenaire) => (
            <div key={partenaire.id} className="slider-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <div className="logo-container">
                <img
                  src={partenaire.logo}
                //   alt={partenaire.name}
                  className="partenaire-logo"
                />
                {/* <p className="partenaire-name">{partenaire.name}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Section Partenaires Entreprises */}
      <section className="partenaire-section">
        <h2 className="section-title">Quelques Partenaires Entreprises</h2>
        <Slider {...sliderSettings}>
          {partenairesEntreprises.map((partenaire) => (
            <div key={partenaire.id} className="slider-item">
              <div className="logo-container">
                <img
                  src={partenaire.logo}
                //   alt={partenaire.name}
                  className="partenaire-logo"
                />
                {/* <p className="partenaire-name">{partenaire.name}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </section>
      
    </div>

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
    </Guest>
  );
};

export default Partenaire;

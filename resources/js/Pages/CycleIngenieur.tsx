import React from "react";
import "@/Style/CycleIng.css";
import Footer from "@/Layouts/Footer";
import Guest from "@/Layouts/GuestLayout";

const CycleIngenieur = () => {
  

  return (
    <Guest>
      <div className="cycle-container">
      {/* Section avec image de fond */}
      {/* <div className="overlay"></div> */}
      <div className="header-section">
        <h1>Cycle Ingenieur (BAC +5)</h1>
        <p>Formation professionnalisante de niveau Ingenieur</p>
      </div>

      {/* Section contenu */}
      <div className="content-section">
        <h2>Une formation d'excellence</h2>
        <p>
          Le cycle Ingenieur vous prépare en 2 ans dans le domaine du genie civil avec 3 options :Bâtiment et Urbanisme, Hydraulique et Environnement et Infrastructures et Transports.
        </p>
        <p>
           Nos formations de niveau BAC+5 sont élaborées 
           pour vous doter de compétences techniques et 
           théoriques solides, facilitant ainsi votre intégration
            professionnelle .
        </p>
      </div>
      <div className="filiere-container">

{/* Technicien Supérieur spécialité Bâtiment et Urbanisme */}
    <div className="filiere-card">
      <h3>Génie Civil option Bâtiment et Urbanisme</h3>
      <p>
        L'urbanisme est un domaine qui étudie et planifie l'organisation des villes, englobant 
        l’aménagement du territoire, le développement urbain et la gestion des espaces urbains 
        pour assurer un cadre de vie fonctionnel et harmonieux.
      </p>
      <ul>
        <strong>Débouchés professionnels :</strong>
        <li>Collectivités locales</li>
        <li>Administration pour la planification et la gestion de l’urbanisation des villes</li>
        <li>Cabinets d’architectes ou d’urbanistes</li>
        <li>Sociétés immobilières</li>
        <li>Bureaux d’études</li>
        <li>Bureaux de contrôle</li>
        <li>Laboratoires spécialisés</li>
      </ul>
    </div>

{/* Technicien Supérieur spécialité Hydraulique et Environnement */}
    <div className="filiere-card">
      <h3>Génie Civil option Hydraulique et Environnement</h3>
      <p>
        L'hydraulique est la discipline qui étudie le comportement et le mouvement des liquides, 
        en particulier de l'eau, ainsi que leur utilisation dans divers systèmes et applications.
      </p>
      <ul>
        <strong>Débouchés professionnels :</strong>
        <li>Collectivités locales</li>
        <li>Administration</li>
        <li>Bureaux d’études spécialisés</li>
        <li>Entreprises de gestion des ressources en eau</li>
        <li>Organismes environnementaux</li>
      </ul>
    </div>

{/* Technicien Supérieur spécialité Routes et Transports */}
    <div className="filiere-card">
      <h3>Génie Civil option Infrastructures et Transports</h3>
      <p>
        Cette spécialité concerne la conception, la construction et la maintenance des infrastructures routières et 
        des systèmes de transport pour assurer des déplacements sûrs et efficaces.
      </p>
      <ul>
        <strong>Débouchés professionnels :</strong>
        <li>Collectivités locales</li>
        <li>Administration</li>
        <li>Bureaux d’études et de contrôle</li>
        <li>Entreprises de construction d’ouvrages de voirie et de transport</li>
      </ul>
    </div>

{/* Technicien Supérieur spécialité Géomètre */}
    <div className="filiere-card">
      <h3>Géomètre Topographe</h3>
      <p>
        Le géomètre-topographe est un expert en mesure et en analyse des terrains. Il joue un rôle clé dans la 
        gestion foncière, la cartographie et les projets de construction.
      </p>
      <ul>
        <strong>Débouchés professionnels :</strong>
        <li>Bureaux de géomètres-experts</li>
        <li>Cabinets de topographie</li>
        <li>Collectivités locales</li>
        <li>Administration cadastrale et foncière</li>
        <li>Bureaux d’études en urbanisme et construction</li>
      </ul>
    </div>

</div>
      </div>
      <Footer></Footer>
    </Guest>
  );
};

export default CycleIngenieur;

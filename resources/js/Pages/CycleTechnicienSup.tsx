import React from "react";
import "@/Style/CycleTech.css";
import Guest from "@/Layouts/GuestLayout";
import Footer from "@/Layouts/Footer";

const CycleTechnicienSup = () => {
  const filieres = [
    { title: " Technicien Supérieur spécialité Bâtiment et Urbanisme", description: "L'urbanisme est à la fois un champ disciplinaire et un champ professionnel recouvrant l'étude du phénomène urbain, l'action d'urbanisation et l'organisation de la ville et de ses territoires. Les personnes qui exercent ce métier sont des urbanistes." },
    { title: "Technicien Supérieur spécialité Hydraulique et Environnement", description: "L'hydraulique désigne la branche de la physique qui étudie la circulation des liquides, principalement l'eau et par extension de tout autre liquide tel que l'huile." },
    { title: "Technicien Supérieur spécialité Routes et Transports", description: "L'infrastructure est un ensemble d'éléments interconnectés qui fournissent le cadre pour supporter la totalité de la structure. Le terme est souvent utilisé d'une façon très abstraite." },
    { title: "Technicien Supérieur spécialité Géomètre", description: "Le géomètre-topographe ou topographe, professionnel qui pratique la topographie. Le géomètre-expert, personne exerçant un métier qui consiste à établir différentes mesures touchant les propriétés foncières." }
  ];

  return (
    <Guest>
      <div className="cycle-container">
      {/* Section avec image de fond */}
      <div className="header-section">
        <h1>Cycle Technicien Supérieur (BAC +3)</h1>
        <p>Formation professionnalisante de niveau Grade Licence</p>
      </div>

      {/* Section contenu */}
      <div className="content-section">
        <h2>Une formation d'excellence</h2>
        <p>
          Le cycle Technicien Supérieur vous prépare en 3 ans dans le domaine du genie civil.
        </p>
        <p>
           Nos formations de niveau BAC+3 sont élaborées 
           pour vous doter de compétences techniques et 
           théoriques solides, facilitant ainsi votre intégration
            professionnelle ou la poursuite d’études en cycle ingénieur.
        </p>
      </div>
    <div className="filiere-container">

      {/* Technicien Supérieur spécialité Bâtiment et Urbanisme */}
          <div className="filiere-card">
            <h3>Technicien Supérieur spécialité Bâtiment et Urbanisme</h3>
            <p>
              L'urbanisme est un domaine qui étudie et planifie l'organisation des villes, englobant 
              l’aménagement du territoire, le développement urbain et la gestion des espaces urbains 
              pour assurer un cadre de vie fonctionnel et harmonieux.
            </p>
            <ul>
              <strong>Quelques Débouchés professionnels :</strong>
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
            <h3>Technicien Supérieur spécialité Hydraulique et Environnement</h3>
            <p>
              L'hydraulique est la discipline qui étudie le comportement et le mouvement des liquides, 
              en particulier de l'eau, ainsi que leur utilisation dans divers systèmes et applications.
            </p>
            <ul>
              <strong>Quelques Débouchés professionnels :</strong>
              <li>Collectivités locales</li>
              <li>Administration</li>
              <li>Bureaux d’études spécialisés</li>
              <li>Entreprises de construction d’ouvrages de voirie et de transport</li>
              <li>Organismes environnementaux</li>
            </ul>
          </div>

      {/* Technicien Supérieur spécialité Routes et Transports */}
          <div className="filiere-card">
            <h3>Technicien Supérieur spécialité Routes et Transports</h3>
            <p>
              Cette spécialité concerne la conception, la construction et la maintenance des infrastructures routières et 
              des systèmes de transport pour assurer des déplacements sûrs et efficaces.
            </p>
            <ul>
              <strong>Quelques Débouchés professionnels :</strong>
              <li>Collectivités locales</li>
              <li>Administration</li>
              <li>Bureaux d’études et de contrôle</li>
              <li>Entreprises de construction :
                <li>Routes</li>
                <li>Ponts</li>
                <li>Châteaux d’eau</li>
                <li>Assainissement</li>
                <li>Aménagement hydro-agricole</li>
              </li>
            </ul>
          </div>

      {/* Technicien Supérieur spécialité Géomètre */}
          <div className="filiere-card">
            <h3>Technicien Supérieur spécialité Géomètre</h3>
            <p>
              Le géomètre-topographe est un expert en mesure et en analyse des terrains. Il joue un rôle clé dans la 
              gestion foncière, la cartographie et les projets de construction.
            </p>
            <ul>
              <strong>Quelques Débouchés professionnels :</strong>
              <li>Cabinet de géomètre-expert</li>
              <li>Cadastre</li>
              <li>Domaine de la conservation foncière</li>
              <li>Entreprises de construction d’ouvrages</li>
            </ul>
          </div>

    </div>

      </div>
      <Footer></Footer>
    </Guest>

  );
};

export default CycleTechnicienSup;

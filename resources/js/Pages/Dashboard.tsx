import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Inertia } from '@inertiajs/inertia';
import AOS from "aos";
import "aos/dist/aos.css";
import '@/Style/Dash.css';

interface DashboardProps {
  userName: string;
  evenements: Evenement[];
  filieres: Filiere[];
  informations: Information[];
}

interface Evenement {
  id: number;
  titre: string;
  date: string;
  lieu: string;
}

interface Information {
  id: number;
  titre: string;
  image: string;
  nom_image?: string;
  description: string;
}

interface Filiere {
  id: number;
  cycle: string;
  nom_filiere: string;
  debouchés: string;
}

export default function Dashboard() {
  const { userName, evenements, informations = [], filieres = [] } = usePage().props as unknown as DashboardProps;

  const [menuOpen, setMenuOpen] = useState(false);
  const [newDebouche, setNewDebouche] = useState("");
  const [selectedFiliere, setSelectedFiliere] = useState<Filiere | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const deleteInformation = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer cette information ?")) {
      Inertia.delete(`/information/${id}`, {
        onSuccess: () => {
          console.log("Information supprimée avec succès !");
        }
      });
    }
  };

  const filieresIngenieur = filieres.filter(filiere => filiere.cycle === 'Cycle Ingénieur');
  const filieresTechnicien = filieres.filter(filiere => filiere.cycle === 'Cycle Technicien Supérieur');

  const handleEdit = (filiere: Filiere) => {
    setSelectedFiliere(filiere);
    setNewDebouche(filiere.debouchés);
  };

  const handleSave = () => {
    if (!selectedFiliere) return;

    Inertia.put(`/filieres/${selectedFiliere.id}`, { debouchés: newDebouche }, {
      onSuccess: () => {
        setSelectedFiliere(null);
      }
    });
  };

  return (
    <AuthenticatedLayout>
      <main className="dashboard">
        <div className="top-bar flex justify-between items-center p-4 bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar p-2 rounded-md border border-gray-300"
          />
          <div className="user-section flex items-center gap-4">
            <span className="notification">{userName ? userName : 'Invité'}</span>
            <span className="text-4xl">
              <IoPersonCircleSharp />
            </span>
          </div>
          <div className='menu2' onClick={toggleMenu}>
            {menuOpen ? <BiMenu /> : <TbMenuDeep />}
          </div>
        </div>

        {menuOpen && (
          <div className='aside' data-aos="zoom-out-right" data-aos-once="false">
            <nav>
              <ul>
                <li onClick={() => window.open('/dashboard', '_self')}>Dashboard</li>
                <li onClick={() => window.open('/sliders', '_self')}>Slider</li>
                <li onClick={() => window.open('/events', '_self')}>Evenement</li>
                <li onClick={() => window.open('/information', '_self')}>Information</li>
                <li onClick={() => window.open('/filieres', '_self')}>Filiere</li>
                <li onClick={() => window.open('/actualites', '_self')}>Actualités</li>
              </ul>
            </nav>
          </div>
        )}
         {/* Section de récapitulatif des événements */}
         <div className="events-summary bg-gray-200 p-6 rounded-lg shadow-lg mt-8 m-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Événements récents</h2>
                    <div className="events-list">
                        {evenements.length > 0 ? (
                            evenements.map(event => (
                                <div key={event.id} className="event-card p-4 border-b border-gray-200">
                                    <h3 className="text-lg font-medium">{event.titre}</h3>
                                    <p className="text-sm text-gray-600">Date: {event.date}</p>
                                    <p className="text-sm text-gray-600">Lieu: {event.lieu}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Aucun événement à afficher.</p>
                        )}
                    </div>
        </div>
        {/* Informations récentes */}
        <div className="events-summary2 bg-gray-200 p-6 rounded-lg shadow-lg mt-8 m-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations récentes</h2>
          <div className="events-list2">
            {informations.length > 0 ? (
              informations.map((information) => (
                <div key={information.id} className="event-card2 p-4 border-b border-gray-200">
                  <div className="director-image">
                    <img src={`/storage/${information.image}`} alt={information.nom_image ?? 'Information'} />
                  </div>
                  <h3 className="text-lg font-medium">{information.titre ?? 'Titre indisponible'}</h3>
                  <p className="text-sm text-gray-600">{information.description ?? 'Aucune description disponible.'}</p>
                  <div className="button-group">
                    <button onClick={() => window.open(`/information/edit/${information.id}`, '_self')} className="btn-modifier">Modifier</button>
                    <button onClick={() => deleteInformation(information.id)} className="btn-supprimer">Supprimer</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Aucune information disponible.</p>
            )}
          </div>
        </div>

        {/* Gestion des Filières */}
    
        <div className="events-summary bg-gray-200 p-6 rounded-lg shadow-lg mt-8 m-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos Filières</h2>

        {/* Cycle Technicien Supérieur */}
        <div className="events-list">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Cycle Technicien Supérieur</h3>
            {filieresTechnicien.length > 0 ? (
            filieresTechnicien.map((filiere) => (
                <div key={filiere.id} className="event-card p-4 border-b border-gray-200">
                <h4 className="text-md font-semibold">{filiere.nom_filiere}</h4>
                <p className="text-sm text-gray-600">{filiere.debouchés}</p>
                <div className="button-group">
                <button className="btn-modifier" onClick={() => window.open(`/filieres/${filiere.id}/edit-debouche`, '_self')}>
                    Modifier
                </button>


                </div>
                </div>
            ))
            ) : (
            <p className="text-gray-500">Aucune filière disponible.</p>
            )}
        </div>

        {/* Cycle Ingénieur */}
        <div className="events-list mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Cycle Ingénieur</h3>
            {filieresIngenieur.length > 0 ? (
            filieresIngenieur.map((filiere) => (
                <div key={filiere.id} className="event-card p-4 border-b border-gray-200">
                <h4 className="text-md font-semibold">{filiere.nom_filiere}</h4>
                <p className="text-sm text-gray-600">{filiere.debouchés}</p>
                <button className="btn-modifier" onClick={() => window.open(`/filieres/${filiere.id}/edit-debouche`, '_self')}>
                    Modifier
                </button>
                </div>
            ))
            ) : (
            <p className="text-gray-500">Aucune filière disponible.</p>
            )}
        </div>
        </div>


      </main>
    </AuthenticatedLayout>
  );
}

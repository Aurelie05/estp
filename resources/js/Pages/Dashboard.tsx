import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png';
import { usePage } from '@inertiajs/react';
import { IoPersonCircleSharp } from "react-icons/io5";
import '@/Style/Dash.css';
import AOS from "aos";
import { Inertia } from '@inertiajs/inertia';
import "aos/dist/aos.css";


interface DashboardProps {
  userName: string;
  evenements: Evenement[];
  informations: Information[]; // Ajout de informations
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
  interface PageProps {
    auth: any;
    informations: Information[];  // Tableau d'objets Information
    [key: string]: any;
  }
export default function Dashboard() {
    
  const { userName, evenements,informations = [] } = usePage().props as unknown as DashboardProps;
  // console.log(user);
  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durée de l'animation
        once: false, // Permet de rejouer l'animation à chaque passage
    });
}, []);  
const deleteInformation = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer cette information ?")) {
        Inertia.delete(`/information/${id}`, {
            onSuccess: () => {
                console.log("Information supprimée avec succès !");
            }
        });
    }
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
                      
                      <span className="notification">{userName ? userName : 'Invité'}</span> {/* Affiche le nom de l'utilisateur ou 'Invité' si non défini */}
                          {/* <span className="settings">Settings</span> */}
                          <span className="text-4xl"> {/* Augmentation de la taille de l'icône */}
                            <IoPersonCircleSharp />
                          </span>                    
                    </div>
                    <div className='menu2 ' onClick={toggleMenu}>
                          {menuOpen ? <BiMenu /> : <TbMenuDeep />}
                      </div>
                </div>


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

                {menuOpen && (
                <>  
                <div className='aside' data-aos="zoom-out-right" data-aos-once="false">
                  
                  <nav>
                    <ul>
                      <li onClick={ () => window.open('/dashboard','_self')}>Dashboard</li>
                      <li onClick={ () => window.open('/sliders','_self')}>Slider</li>
                      <li onClick={ () => window.open('/events','_self')}>Evenement</li>
                      <li onClick={ () => window.open('/information','_self')}>Information</li>
                      <li onClick={ () => window.open('/filieres','_self')}>Filiere</li>
                      <li onClick={ () => window.open('/actualites','_self')}>Actualités</li>
                    </ul>
                  </nav>
                </div>
                </>

                )}
                <div className="events-summary2 bg-gray-200 p-6 rounded-lg shadow-lg mt-8 m-8">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations récentes</h2>

    <div className="events-list2">
        {Array.isArray(informations) && informations.length > 0 ? (
            informations.map((information) => (
                <div key={information.id} className="event-card2 p-4 border-b border-gray-200">
                    <div className="director-image">
                        <img src={`/storage/${information.image}`} alt={information.nom_image ?? 'Information'} />
                    </div>
                    <h3 className="text-lg font-medium">{information.titre ?? 'Titre indisponible'}</h3>
                    <p className="text-sm text-gray-600">{information.description ?? 'Aucune description disponible.'}</p>
                    
                    <div className="button-group">
                        {/* Bouton Modifier */}
                        <button 
                            onClick={() => window.open(`/information/edit/${information.id}`, '_self')}
                            className="btn-modifier"
                        >   
                            Modifier
                        </button>

                        {/* Bouton Supprimer */}
                        <button 
                            onClick={() => deleteInformation(information.id)}
                            className="btn-supprimer"
                        >   
                            Supprimer
                        </button>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-gray-500">Aucune information disponible.</p>
        )}
    </div>
</div>



            </main>
        </AuthenticatedLayout>
    );
}

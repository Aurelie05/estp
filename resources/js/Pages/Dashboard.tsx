import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png';
import { usePage } from '@inertiajs/react';
import { IoPersonCircleSharp } from "react-icons/io5";
import '@/Style/Dash.css';

interface DashboardProps {
  userName: string;
  evenements: Evenement[];
}

interface Evenement {
  id: number;
  titre: string;
  date: string;
  lieu: string;
}
export default function Dashboard() {
  // const { evenements = [] } = usePage().props as { evenements?: Evenement[] };
  // const { user } = usePage().props as unknown as { user: { name: string } }; 
  const { userName, evenements } = usePage().props as unknown as DashboardProps;
  // console.log(user);
  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
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

                {/* <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                    <div className="stats-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h3 className="text-3xl font-semibold">155+</h3>
                        <p className="text-sm text-gray-600">Completed Courses</p>
                    </div>
                    <div className="stats-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h3 className="text-3xl font-semibold">39+</h3>
                        <p className="text-sm text-gray-600">Earned Certificates</p>
                    </div>
                    <div className="stats-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h3 className="text-3xl font-semibold">25+</h3>
                        <p className="text-sm text-gray-600">Courses in Progress</p>
                    </div>
                    <div className="stats-card bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <h3 className="text-3xl font-semibold">18k+</h3>
                        <p className="text-sm text-gray-600">Community Support</p>
                    </div>
                </div> */}

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
                <div className='aside'>
                  <div className="logo">
                    <img src={logo} alt="" />
                    ESTP
                  </div>
                  <nav>
                    <ul>
                      <li onClick={ () => window.open('/dashboard','_self')}>Dashboard</li>
                      <li onClick={ () => window.open('/sliders','_self')}>Slider</li>
                      <li onClick={ () => window.open('/events','_self')}>Evenement</li>
                      <li onClick={ () => window.open('/information','_self')}>Information</li>
                      <li onClick={ () => window.open('/filieres','_self')}>Filiere</li>
                      
                    </ul>
                  </nav>
                </div>
                </>

                )}

                {/* Section des filières récentes */}
                {/* <div className="filieres-summary bg-gray-200 p-6 rounded-lg shadow-lg mt-8 m-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Filières disponibles</h2>
                    <ul className="filieres-list space-y-2">
                        
                        <li className="filiere-card p-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium">Informatique</h3>
                            <p className="text-sm text-gray-600">Débouchés: Développeur, Analyste</p>
                        </li>
                        <li className="filiere-card p-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium">Génie Civil</h3>
                            <p className="text-sm text-gray-600">Débouchés: Architecte, Ingénieur</p>
                        </li>
                        <li className="filiere-card p-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium">Marketing</h3>
                            <p className="text-sm text-gray-600">Débouchés: Responsable Marketing</p>
                        </li>
                    </ul>
                </div> */}
            </main>
        </AuthenticatedLayout>
    );
}

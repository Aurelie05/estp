import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png';
import { Inertia } from '@inertiajs/inertia';
import { BiMenu } from "react-icons/bi";
import { TbMenuDeep } from "react-icons/tb";
import { useEffect, useState } from 'react'; // Import de useState et useEffect
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { IoPersonCircleSharp } from "react-icons/io5";
import '@/Style/SliderPage.css';

interface Slider {
  id: number;
  titre: string;
  image: string;
}

export default function SliderPage() {
  const { slider = [] } = usePage().props as { slider?: Slider[] }; // Récupère les données depuis Inertia
  const [sliders, setSliders] = useState<Slider[]>(slider); // Initialisez l'état local avec les sliders reçus

  
  // Fonction pour gérer la suppression d'un slider
  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce slider ?')) {
      // Effectuer la suppression via une requête Inertia
      Inertia.delete(`/sliders/${id}`, {
        onSuccess: () => {
          // Met à jour l'état local après suppression, en filtrant le slider supprimé
          Inertia.visit('/SliderPage');
        },
      });
    }
  };

  const[menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  return (
    <Authenticated>
      <div className="p-6">
      
        <div className="flex justify-between items-center mb-6">
         
          <h1 className="text-xl font-bold">Sliders</h1>
          <Link
            href="/sliders/create"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Slider
          </Link>
          <div className='menu2 ' onClick={toggleMenu}>
              {menuOpen ? <BiMenu /> : <TbMenuDeep />}
          </div>
        </div>

        <ul>
          {sliders.length > 0 ? (
            sliders.map((item) => (
              <li key={item.id} className="mb-4">
                <h3 className="font-semibold">{item.titre}</h3>
                <img
                  src={`/storage/${item.image}`}
                  alt={item.titre}
                  className="w-full max-w-sm rounded"
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleDelete(item.id)} // Appeler la fonction de suppression
                    className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>Aucun slider disponible pour le moment.</p>
          )}
        </ul>


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
      </div>
    </Authenticated>
  );
}


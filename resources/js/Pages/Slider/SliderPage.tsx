import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png';
import { Inertia } from '@inertiajs/inertia';
import { BiMenu } from "react-icons/bi";
import { router } from "@inertiajs/react";
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
  const { slider = [] } = usePage().props as { slider?: Slider[] }; 

  
   // Fonction pour gérer la suppression d'un slider
   const deleteSlider = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer ce slider ?")) {
        Inertia.post(`/admin/sliders/${id}/delete`, {}, {
            onSuccess: () => {
                console.log("Suppression réussie !");
            }
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
            Ajouter Slider
          </Link>
          
        </div>

        <ul>
          {slider.length > 0 ? (
            slider.map((item) => (
              <li key={item.id} className="mb-4">
                <h3 className="font-semibold">{item.titre}</h3>
                <img
                  src={`/storage/${item.image}`}
                  alt={item.titre}
                  className="w-full max-w-sm rounded"
                />
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => deleteSlider(item.id)} // Appeler la fonction de suppression
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


        
      </div>
    </Authenticated>
  );
}


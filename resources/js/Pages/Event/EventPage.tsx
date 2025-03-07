import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react'; // Import de useState et useEffect
import '@/Style/EventPage.css'

interface Evenement {
    id: number;
    titre: string;
    image: string;
    date: string;
    lieu: string;
    description: string;
  }
// interface ExtendedPageProps {
//     auth: { user: { id: number; name: string; email: string } };  
//     evenements: Event[];
//     [key: string]: any;
// }


export default function EventPage() {
    

    
    const { evenements = [] } = usePage().props as { evenements?: Evenement[] }; // Récupère les données depuis Inertia
  const [evenementsList, setEvenementsList] = useState<Evenement[]>(evenements); // Initialisez l'état local avec les événements reçus
    console.log('Valeur de events:', evenements);
    // const { evenements } = usePage().props as { evenements: any[] };
    useEffect(() => {
        setEvenementsList(evenements); // Met à jour les événements à chaque changement de `evenements` dans les props
      }, [evenements]);
    

    // Fonction pour gérer la suppression d'un événement
    const deleteEvenement = (id: number) => {
      if (confirm("Voulez-vous vraiment supprimer cet événement ?")) {
          Inertia.delete(`/evenements/${id}`, {
              onSuccess: () => {
                  console.log("Événement supprimé avec succès !");
              }
          });
      }
  };


  return (
    <Authenticated>
        <div className="container">
            <div className="header">
                <h1 className="title">Événements</h1>
                <Link href="/events/create" className="btn-add">
                    Ajouter Evenement
                </Link>
            </div>

            <ul className="event-list">
                {evenements.length > 0 ? (
                    evenements.map((event) => (
                        <li key={event.id} className="event-card">
                            <h3 className="event-title">{event.titre}</h3>
                            <img src={`/storage/${event.image}`} alt={event.titre} className="event-image" />

                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Lieu:</strong> {event.lieu}</p>
                            <p className="event-description">{event.description}</p>

                            <div className="event-actions">
                                <button onClick={() =>deleteEvenement(event.id)} className="btn-delete">
                                    Supprimer
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-events">Aucun événement disponible.</p>
                )}
            </ul>
        </div>
    </Authenticated>
);

}

import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { useEffect, useState } from 'react';
import '@/Style/ActualitePage.css';

interface Actualite {
  id: number;
  titre: string;
  image: string;
  date: string;
  lieu: string;
  description: string;
}

export default function ActualitePage() {
  const { actualites = [] } = usePage().props as { actualites?: Actualite[] };
  const [actualitesList, setActualitesList] = useState<Actualite[]>(actualites);

  
  useEffect(() => {
    setActualitesList(actualites);
  }, [actualites]);

  // Fonction pour supprimer une actualité
  const deleteActualite = (id: number) => {
    if (confirm("Voulez-vous vraiment supprimer cette actualité ?")) {
        Inertia.delete(`/actualites/${id}`, {
            onSuccess: () => {
                console.log("Actualité supprimée avec succès !");
            }
        });
    }
};

  return (
    <Authenticated>
      <div className="container">
        <div className="header">
          <h1 className="title">Actualités</h1>
          <Link href="/actualites/create" className="btn-add">
            Ajouter une Actualité
          </Link>
        </div>

        <ul className="actualite-list">
          {actualites.length > 0 ? (
            actualites.map((actu) => (
              <li key={actu.id} className="actualite-card">
                <h3 className="actualite-title">{actu.titre}</h3>
                <img
                  src={`/storage/${actu.image}`}
                  alt={actu.titre}
                  className="actualite-image"
                />

                <p><strong>Date:</strong> {actu.date}</p>
                <p><strong>Lieu:</strong> {actu.lieu}</p>
                <p className="actualite-description">{actu.description}</p>

                <div className="actualite-actions">
                  <button onClick={() => deleteActualite(actu.id)} className="btn-delete">
                    Supprimer
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="no-actualites">Aucune actualité disponible.</p>
          )}
        </ul>
      </div>
    </Authenticated>
  );
}

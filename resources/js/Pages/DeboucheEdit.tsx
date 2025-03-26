import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import '@/Style/InformationForm.css'

interface Filiere {
  id: number;
  nom_filiere: string;
  debouchés: string;
}

interface Props {
  filiere: Filiere;
}

export default function DeboucheEdit({ filiere }: Props) {
  const { data, setData, put, processing, errors } = useForm({
    debouchés: filiere.debouchés,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    put(`/filieres/${filiere.id}/debouche`);
  };

  return (
    <AuthenticatedLayout>
      <Head title="Modifier Débouché" />
      <div className="form-container">
        <div className="form-box">
          <h1 className="form-title">Modifier le Débouché</h1>
          <form className="form" onSubmit={handleSubmit}>
            {/* Affichage de la filière (lecture seule) */}
            <div className="form-group">
              <label htmlFor="nom_filiere" className="form-label">Filière</label>
              <input
                id="nom_filiere"
                type="text"
                value={filiere.nom_filiere}
                readOnly
                className="form-input"
              />
            </div>

            {/* Champ modifiable pour le débouché */}
            <div className="form-group">
              <label htmlFor="debouche" className="form-label">Débouché</label>
              <textarea
                id="debouche"
                className="form-textarea"
                value={data.debouchés}
                onChange={(e) => setData('debouchés', e.target.value)}
              />
              {errors.debouchés && <span className="error-text">{errors.debouchés}</span>}
            </div>

            <button type="submit" className="form-submit" disabled={processing}>
              Modifier
            </button>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

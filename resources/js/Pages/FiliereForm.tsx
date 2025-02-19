import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler } from 'react';
import { useForm } from "@inertiajs/react"; 
import '@/Style/FiliereForm.css'

export default function FiliereForm({ cycles = [], filieres = [] }: { cycles?: string[], filieres?: { cycle: string, id: string, nom_filiere: string }[] }) {
    const { data, setData, post, errors } = useForm({
        cycle: "",
        nom_filiere: "",
        debouchés: "",
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/filieres');
    };

    const uniqueCycles = [...new Set(filieres.map(filiere => filiere.cycle))];

    return (
        <Authenticated>
            <div className="form-container">
                <div className="form-box">
                    <h1 className="form-title">Ajouter une Filière</h1>
                    <form onSubmit={handleSubmit} className="form">
                        
                        {/* Cycle */}
                        <div className="form-group">
                            <label className="form-label">Cycle</label>
                            <select
                                value={data.cycle}
                                onChange={(e) => setData("cycle", e.target.value)}
                                className="form-input"
                            >
                                <option value="">Sélectionner un cycle</option>
                                {uniqueCycles.map((cycle, index) => (
                                    <option key={index} value={cycle}>{cycle}</option>
                                ))}
                            </select>
                            {errors.cycle && <p className="error-text">{errors.cycle}</p>}
                        </div>

                        {/* Nom de la Filière */}
                        <div className="form-group">
                            <label className="form-label">Nom de la Filière</label>
                            <select
                                value={data.nom_filiere}
                                onChange={(e) => setData("nom_filiere", e.target.value)}
                                className="form-input"
                            >
                                <option value="">Sélectionner une filière</option>
                                {filieres.map((filiere, index) => (
                                    <option key={index} value={filiere.nom_filiere}>{filiere.nom_filiere}</option>
                                ))}
                            </select>
                            {errors.nom_filiere && <p className="error-text">{errors.nom_filiere}</p>}
                        </div>

                        {/* Débouchés */}
                        <div className="form-group">
                            <label className="form-label">Débouchés</label>
                            <textarea
                                value={data.debouchés}
                                onChange={(e) => setData("debouchés", e.target.value)}
                                className="form-textarea"
                            />
                            {errors.debouchés && <p className="error-text">{errors.debouchés}</p>}
                        </div>

                        {/* Bouton de soumission */}
                        <button 
                            type="submit" 
                            className="form-submit"
                        >
                            Soumettre
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}

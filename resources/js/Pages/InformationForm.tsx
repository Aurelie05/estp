import React from 'react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import '@/Style/InformationForm.css';

export default function InformationForm() {
    const { data, setData, post, processing, errors } = useForm({
        titre: '',
        image: null as File | null,
        nom_image: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/information');
    };

    return (
        <Authenticated>
            <div className="form-container">
                <div className="form-box">
                    <h1 className="form-title">Ajouter Information</h1>
                    <form onSubmit={handleSubmit} className="form">
                        
                        {/* Titre */}
                        <div className="form-group">
                            <label htmlFor="titre" className="form-label">Titre</label>
                            <input
                                type="text"
                                id="titre"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="form-input"
                            />
                            {errors.titre && <span className="error-text">{errors.titre}</span>}
                        </div>

                        {/* Image */}
                        <div className="form-group">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setData('image', e.target.files[0]);
                                    }
                                }}
                                className="form-input"
                            />
                            {errors.image && <span className="error-text">{errors.image}</span>}
                        </div>

                        {/* Nom de l'image */}
                        <div className="form-group">
                            <label htmlFor="nom_image" className="form-label">Nom de l'image</label>
                            <input
                                type="text"
                                id="nom_image"
                                value={data.nom_image}
                                onChange={(e) => setData('nom_image', e.target.value)}
                                className="form-input"
                            />
                            {errors.nom_image && <span className="error-text">{errors.nom_image}</span>}
                        </div>

                        {/* Description */}
                        <div className="form-group">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="form-textarea"
                            />
                            {errors.description && <span className="error-text">{errors.description}</span>}
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className="form-submit"
                            disabled={processing}
                        >
                            {processing ? 'Envoi...' : 'Soumettre'}
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}

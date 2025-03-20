import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import '@/Style/InformationForm.css'

interface InformationProps {
    information: {
        id: number;
        titre: string;
        image?: string;
        nom_image?: string;
        description: string;
    };
}

export default function InformationEdit({ information }: InformationProps) {
    const { data, setData, put, processing, errors } = useForm({
        id: information.id,
        titre: information.titre,
        image: null as File | null,
        nom_image: information.nom_image ?? '',
        description: information.description,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/information/update/${data.id}`);
    };

    return (
        <Authenticated>
            <div className="form-container">
                <div className="form-box">
                    <h1 className="form-title">Modifier Information</h1>
                    <form onSubmit={handleSubmit} className="form">
                        
                        {/* Titre */}
                        <div className="form-group">
                            <label className="form-label">Titre</label>
                            <input
                                type="text"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="form-input"
                            />
                            {errors.titre && <span className="error-text">{errors.titre}</span>}
                        </div>

                        {/* Image */}
                        <div className="form-group">
                            <label className="form-label">Changer l'Image</label>
                            <input
                                type="file"
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
                            <label className="form-label">Nom de l'image</label>
                            <input
                                type="text"
                                value={data.nom_image}
                                onChange={(e) => setData('nom_image', e.target.value)}
                                className="form-input"
                            />
                            {errors.nom_image && <span className="error-text">{errors.nom_image}</span>}
                        </div>

                        {/* Description */}
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="form-textarea"
                            />
                            {errors.description && <span className="error-text">{errors.description}</span>}
                        </div>

                        {/* Bouton de soumission */}
                        <button type="submit" className="form-submit" disabled={processing}>
                            {processing ? 'Modification...' : 'Modifier'}
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}

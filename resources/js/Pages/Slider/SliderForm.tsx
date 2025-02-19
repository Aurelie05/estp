import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler, useState } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; // Importer useForm
import '@/Style/SliderForm.css'

export default function SliderForm() {
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post("/sliders", {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Slider ajouté avec succès");

                // Redirection sans rechargement
                Inertia.visit("/sliders", { method: "get" as Method, preserveState: true });

                // Réinitialiser le formulaire
                reset();
            },
        });
    };

    return (
        <Authenticated>
            <div className="container">
                <div className="form-container">
                    <h1 className="form-title">Add Slider</h1>
                    <form onSubmit={submit} encType="multipart/form-data">
                        
                        {/* Titre */}
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="form-input"
                            />
                            {errors.titre && <p className="form-error">{errors.titre}</p>}
                        </div>
    
                        {/* Image */}
                        <div className="form-group">
                            <label className="form-label">Image</label>
                            <input
                                type="file"
                                onChange={(e) => setData('image', e.target.files?.[0] || null)}
                                className="form-input"
                            />
                            {errors.image && <p className="form-error">{errors.image}</p>}
                        </div>
    
                        {/* Bouton de soumission */}
                        <button type="submit" className="form-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
    
}

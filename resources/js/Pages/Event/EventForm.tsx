import Authenticated from '@/Layouts/AuthenticatedLayout';
import { FormEventHandler } from 'react';
import { Inertia, Method } from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react"; 
import '@/Style/EventForm.css';


export default function EventForm() {
    const { data, setData, post, reset, errors } = useForm({
        titre: "",
        date: "",
        lieu: "",
        description: "",
        image: null as File | null,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        post("/events", {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Événement ajouté avec succès");

                Inertia.visit("/events", { method: "get" as Method, preserveState: true });

                reset();
            },
        });
    };

    return (
        <Authenticated>
            <div className="form-container">
                <div className="form-box">
                    <h1 className="form-title">Ajouter un Événement</h1>
                    <form onSubmit={submit} encType="multipart/form-data" className="form">
                        
                        {/* Titre */}
                        <div className="form-group">
                            <label className="form-label">Titre</label>
                            <input
                                type="text"
                                value={data.titre}
                                onChange={(e) => setData("titre", e.target.value)}
                                className="form-input"
                            />
                            {errors.titre && <p className="error-text">{errors.titre}</p>}
                        </div>
    
                        {/* Date */}
                        <div className="form-group">
                            <label className="form-label">Date</label>
                            <input
                                type="date"
                                value={data.date}
                                onChange={(e) => setData("date", e.target.value)}
                                className="form-input"
                            />
                            {errors.date && <p className="error-text">{errors.date}</p>}
                        </div>
    
                        {/* Lieu */}
                        <div className="form-group">
                            <label className="form-label">Lieu</label>
                            <input
                                type="text"
                                value={data.lieu}
                                onChange={(e) => setData("lieu", e.target.value)}
                                className="form-input"
                            />
                            {errors.lieu && <p className="error-text">{errors.lieu}</p>}
                        </div>
    
                        {/* Description */}
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData("description", e.target.value)}
                                className="form-textarea"
                            />
                            {errors.description && <p className="error-text">{errors.description}</p>}
                        </div>
    
                        {/* Image */}
                        <div className="form-group">
                            <label className="form-label">Image</label>
                            <input
                                type="file"
                                onChange={(e) => setData("image", e.target.files?.[0] || null)}
                                className="form-input"
                            />
                            {errors.image && <p className="error-text">{errors.image}</p>}
                        </div>
    
                        {/* Bouton de soumission */}
                        <button type="submit" className="form-submit">
                            Soumettre
                        </button>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
    
}

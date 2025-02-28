import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import '@/Style/Register.css';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="glass-wrapper">
            <Head title="Inscription" />
            <div className="glass-card">
                {/* Logo de l'université */}
                <img src={logo} alt="Université Logo" className="logo" />

                <h2 className="title">Créer un compte</h2>

                <form onSubmit={submit} className="form-container">
                    <div className="input-group">
                        <InputLabel htmlFor="name" value="Nom complet" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="glass-input"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="input-error" />
                    </div>

                    <div className="input-group">
                        <InputLabel htmlFor="email" value="Adresse email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="glass-input"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="input-error" />
                    </div>

                    <div className="input-group">
                        <InputLabel htmlFor="password" value="Mot de passe" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="glass-input"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="input-error" />
                    </div>

                    <div className="input-group">
                        <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="glass-input"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="input-error" />
                    </div>

                    <div className="options">
                        <Link href={route('login')} className="forgot-password">
                            Déjà inscrit ? Connectez-vous
                        </Link>
                    </div>

                    <PrimaryButton className="glass-button" disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}

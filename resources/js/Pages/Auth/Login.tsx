import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import logo from '@/Assets/ESTP.f30db3437790b8dbc7d7.png'
import '@/Style/Login.css';

interface LoginForm extends Record<string, any> {
    email: string;
    password: string;
    remember: boolean;
}

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <div className="glass-wrapper">
            <div className="glass-card">
                {/* Logo de l'université */}
                <img src={logo} alt="Université Logo" className="logo" />

                <Head title="Connexion" />

                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

                <h2 className="text-white text-xl font-semibold mb-4">Connexion</h2>

                <form onSubmit={submit} className="form-container">
                    <div className="input-group">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="glass-input"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="input-error" />
                    </div>

                    <div className="options">
                        <label className="flex items-center text-white">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm">Se souvenir de moi</span>
                        </label>
                    </div>

                    <div className="options">
                        {canResetPassword && (
                            <Link href={route('password.request')} className="forgot-password">
                                Mot de passe oublié ?
                            </Link>
                        )}
                    </div>

                    <PrimaryButton className="glass-button" disabled={processing}>
                        Connexion
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}

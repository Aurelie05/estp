import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import '@/Style/Register.css'

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
            <Head title="Register" />
            <div className="glass-card">
                <div className="profile-icon">👤</div>
                <form onSubmit={submit} className="form-container">
                    <div className="input-group">
                        <InputLabel htmlFor="name" value="Name" className="input-icon" />
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
                        <InputLabel htmlFor="email" value="Email" className="input-icon" />
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
                        <InputLabel htmlFor="password" value="Password" className="input-icon" />
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
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="input-icon" />
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
                            Already registered?
                        </Link>
                    </div>

                    <button type="submit" className="glass-button" disabled={processing}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

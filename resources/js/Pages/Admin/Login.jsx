import { Head, Link, useForm } from '@inertiajs/react';
import { Lock } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({ password: '' });

    function submit(event) {
        event.preventDefault();
        post('/admin/login');
    }

    return (
        <>
            <Head title="Admin Login" />
            <main className="grid min-h-screen place-items-center bg-[#f6f7f2] px-5">
                <form className="w-full max-w-md rounded-lg border border-[#dfe4d4] bg-white p-7 shadow-sm" onSubmit={submit}>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#17211a] text-[#f5c542]">
                        <Lock size={22} />
                    </div>
                    <h1 className="mt-6 text-3xl font-black">Gallery admin</h1>
                    <p className="mt-2 text-[#607058]">Upload academy photos that appear automatically on the website.</p>
                    <label className="mt-6 block text-sm font-bold" htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="mt-2 w-full rounded-md border border-[#cfd8c8] px-4 py-3 outline-none focus:border-[#2f7d32] focus:ring-2 focus:ring-[#2f7d32]/20"
                        type="password"
                        value={data.password}
                        onChange={(event) => setData('password', event.target.value)}
                    />
                    {errors.password && <p className="mt-2 text-sm font-semibold text-red-700">{errors.password}</p>}
                    <button className="mt-6 w-full rounded-md bg-[#17211a] px-4 py-3 font-bold text-white hover:bg-[#2f7d32]" disabled={processing}>
                        {processing ? 'Signing in...' : 'Sign in'}
                    </button>
                    <Link className="mt-5 inline-flex text-sm font-bold text-[#2f7d32]" href="/">Back to website</Link>
                </form>
            </main>
        </>
    );
}

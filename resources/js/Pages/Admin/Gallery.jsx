import { Head, Link, router, useForm } from '@inertiajs/react';
import { ImagePlus, LogOut, Trash2 } from 'lucide-react';

export default function Gallery({ images = [] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        caption: '',
        image: null,
    });

    function submit(event) {
        event.preventDefault();
        post('/admin/gallery', {
            forceFormData: true,
            onSuccess: () => reset('title', 'caption', 'image'),
        });
    }

    function destroy(id) {
        if (confirm('Delete this image from the website?')) {
            router.delete(`/admin/gallery/${id}`);
        }
    }

    return (
        <>
            <Head title="Manage Gallery" />
            <main className="min-h-screen bg-[#f6f7f2] text-[#17211a]">
                <header className="border-b border-[#dfe4d4] bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#69735f]">Luckyfellas FC</p>
                            <h1 className="text-2xl font-black">Gallery admin</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link className="rounded-md border border-[#cfd8c8] px-4 py-2 text-sm font-bold hover:bg-[#eef1e7]" href="/">View site</Link>
                            <button className="inline-flex items-center gap-2 rounded-md bg-[#17211a] px-4 py-2 text-sm font-bold text-white hover:bg-[#2f7d32]" onClick={() => router.post('/admin/logout')}>
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    </div>
                </header>

                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[380px_1fr]">
                    <form className="h-fit rounded-lg border border-[#dfe4d4] bg-white p-6 shadow-sm" onSubmit={submit}>
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#17211a] text-[#f5c542]">
                            <ImagePlus size={24} />
                        </div>
                        <h2 className="mt-5 text-2xl font-black">Upload image</h2>
                        <p className="mt-2 text-sm leading-6 text-[#607058]">New images are stored in Laravel public storage and appear on the homepage gallery.</p>

                        <label className="mt-6 block text-sm font-bold" htmlFor="title">Title</label>
                        <input id="title" className="field" value={data.title} onChange={(event) => setData('title', event.target.value)} />
                        {errors.title && <p className="error">{errors.title}</p>}

                        <label className="mt-4 block text-sm font-bold" htmlFor="caption">Caption</label>
                        <textarea id="caption" className="field min-h-28" value={data.caption} onChange={(event) => setData('caption', event.target.value)} />
                        {errors.caption && <p className="error">{errors.caption}</p>}

                        <label className="mt-4 block text-sm font-bold" htmlFor="image">Image</label>
                        <input id="image" className="mt-2 block w-full text-sm" type="file" accept="image/*" onChange={(event) => setData('image', event.target.files[0])} />
                        {errors.image && <p className="error">{errors.image}</p>}

                        <button className="mt-6 w-full rounded-md bg-[#17211a] px-4 py-3 font-bold text-white hover:bg-[#2f7d32]" disabled={processing}>
                            {processing ? 'Uploading...' : 'Publish image'}
                        </button>
                    </form>

                    <section>
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#69735f]">Published</p>
                                <h2 className="text-3xl font-black">Website gallery</h2>
                            </div>
                            <p className="text-sm font-bold text-[#607058]">{images.length} image{images.length === 1 ? '' : 's'}</p>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {images.map((image) => (
                                <article className="overflow-hidden rounded-lg border border-[#dfe4d4] bg-white shadow-sm" key={image.id}>
                                    <img className="aspect-[4/3] w-full object-cover" src={image.url} alt={image.title || 'Gallery upload'} />
                                    <div className="p-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#69735f]">{image.created_at}</p>
                                        <h3 className="mt-2 text-lg font-black">{image.title || 'Untitled image'}</h3>
                                        <p className="mt-2 min-h-12 text-sm leading-6 text-[#607058]">{image.caption || 'No caption added.'}</p>
                                        <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm font-bold text-red-700 hover:bg-red-100" onClick={() => destroy(image.id)}>
                                            <Trash2 size={16} /> Delete
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {images.length === 0 && (
                            <div className="mt-6 rounded-lg border border-dashed border-[#b9c6b0] bg-white p-10 text-center">
                                <p className="font-bold">No uploaded images yet.</p>
                                <p className="mt-2 text-[#607058]">Use the upload form to publish the first academy photo.</p>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
}

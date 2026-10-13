import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, Award, CalendarDays, Dumbbell, Goal, GraduationCap, HeartHandshake, Mail, MapPin, ShieldCheck, Trophy, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const fallbackImages = [
    'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80',
];

const values = [
    { icon: ShieldCheck, title: 'Discipline', text: 'Structured football habits, respect for coaches, and a professional attitude in every session.' },
    { icon: HeartHandshake, title: 'Character', text: 'Players are developed as people first, with teamwork, humility, and responsibility built into training.' },
    { icon: Trophy, title: 'Excellence', text: 'The academy pushes young footballers to improve technically, physically, tactically, and mentally.' },
];

const programs = [
    { icon: Dumbbell, title: 'Technical Training', text: 'Ball mastery, passing, finishing, first touch, movement, and position-specific development.' },
    { icon: Goal, title: 'Match Preparation', text: 'Game intelligence, tactical shape, decision-making, and competitive match scenarios.' },
    { icon: GraduationCap, title: 'Player Pathway', text: 'A guided route for talented players to grow from academy training into higher-level opportunities.' },
    { icon: Users, title: 'Mentorship', text: 'Coach-led support that encourages confidence, leadership, and commitment on and off the pitch.' },
];

export default function Home({ gallery = [], club }) {
    const galleryImages = gallery.length ? gallery : fallbackImages.map((url, index) => ({
        id: `fallback-${index}`,
        title: ['Academy training', 'Player development', 'Competitive football'][index],
        caption: 'Upload academy images from the admin area to replace this preview.',
        url,
    }));

const featuredGalleryImages = galleryImages.slice(0, 6);
const sliderGalleryImages = galleryImages.slice(6);

    return (
        <>
            <Head title="Football Academy" />
            <main className="min-h-screen bg-[#FAF7F5] text-[#2B1A1A]">
                <section className="hero-grid relative min-h-[92vh] overflow-hidden bg-[#5C0017] text-white">
                    <img
                        className="absolute inset-0 h-full w-full object-cover opacity-55"
                        src={fallbackImages[0]}
                        alt="Luckyfellas Football Club players in training"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(92,0,23,0.95),rgba(128,0,32,0.75),rgba(128,0,32,0.25))]" />
                    <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/luckyfellaslogo.png"
                                    alt={`${club.name} Logo`}
                                    className="h-16 w-16 object-contain"
                                />

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#E6C9D0]">
                                        Lucky Fellas 
                                    </p>
                                    <p className="text-base font-semibold">Football Club</p>
                                </div>
                            </div>
                        </div>
                        {/* <Link className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white hover:text-[#17211a]" href="/admin/gallery">
                            Admin <ArrowUpRight size={16} />
                        </Link> */}
                    </nav>
                    <div className="relative z-10 mx-auto grid min-h-[calc(92vh-84px)] w-full max-w-7xl content-center px-5 pb-16 pt-10 sm:px-8">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex rounded-full bg-[#800020]/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#F3D6DD] ring-1 ring-[#A52A4D]/40">
                                {club.profileTitle}
                            </p>
                            <h1 className="text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">{club.name}</h1>
                            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                                An ambitious football academy focused on identifying, training, mentoring, and showcasing young players through disciplined development and competitive football.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <a className="inline-flex items-center gap-2 rounded-full bg-[#800020] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5C0017]" href="#programs">
                                    Explore academy <ArrowUpRight size={17} />
                                </a>
                                <a className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#800020]" href="#contact">
                                    Contact team
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-b border-[#dfe4d4] bg-white">
                    <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
                        {[
                            ['Focus', 'Grassroots talent development'],
                            ['Method', 'Technical, tactical, physical, and mental training'],
                            ['Outcome', 'Confident players ready for competitive opportunities'],
                        ].map(([label, value]) => (
                            <div key={label}>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#800020]">{label}</p>
                                <p className="mt-2 text-lg font-bold">{value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="section-kicker">Club Profile</p>
                        <h2 className="section-title">Building footballers with skill, discipline, and purpose.</h2>
                    </div>
                    <div className="space-y-6 text-lg leading-8 text-[#465141]">
                        <p>
                            Luckyfellas Football Club is presented as a football academy with a clear development identity: train young players properly, expose them to competitive standards, and help them grow into responsible athletes.
                        </p>
                        <p>
                            The academy experience is designed around regular coaching, match readiness, mentorship, and a pathway mindset so each player understands what improvement looks like and how to work toward it.
                        </p>
                    </div>
                </section>

                <section className="bg-[#5C0017] py-20 text-white">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="max-w-2xl">
                            <p className="section-kicker text-[#F3D6DD]">Academy Values</p>
                            <h2 className="section-title text-white">A player development culture with standards.</h2>
                        </div>
                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {values.map(({ icon: Icon, title, text }) => (
                                <article className="rounded-lg border border-white/12 bg-white/6 p-6" key={title}>
                                    <Icon className="text-[#D9A7B5]" size={28} />
                                    <h3 className="mt-5 text-xl font-black">{title}</h3>
                                    <p className="mt-3 leading-7 text-white/72">{text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="programs" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="section-kicker">Training Program</p>
                            <h2 className="section-title">Complete academy support for developing players.</h2>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#800020]">
                            <CalendarDays size={18} /> Season-ready training model
                        </div>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {programs.map(({ icon: Icon, title, text }) => (
                            <article className="rounded-lg border border-[#E6D5D9] bg-white p-6 shadow-sm transition hover:border-[#800020]/40 hover:shadow-lg" key={title}>
                                <Icon className="text-[#800020]" size={28} />
                                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                                <p className="mt-3 leading-7 text-[#5A4A4A]">{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="gallery" className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="section-kicker">Gallery</p>

                                <h2 className="section-title">
                                    Academy moments from training and matches.
                                </h2>
                            </div>
                        </div>

                        {/* Featured Images (First 6) */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredGalleryImages.map((image) => (
                                <figure
                                    className="group overflow-hidden rounded-lg bg-[#F8F1F3]"
                                    key={image.id}
                                >
                                    <img
                                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                                        src={image.url}
                                        alt={image.title || 'Luckyfellas academy gallery'}
                                    />

                                    <figcaption className="min-h-28 p-5">
                                        <h3 className="font-black">
                                            {image.title || 'Luckyfellas FC'}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#6B4B4B]">
                                            {image.caption || 'Academy image'}
                                        </p>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        {/* Additional Images Slider */}
                        {sliderGalleryImages.length > 0 && (
                            <div className="mt-16">
                                <div className="mb-8 flex items-center justify-between">
                                    <h3 className="text-3xl font-black text-[#800020]">
                                        More Gallery Moments
                                    </h3>

                                    <p className="text-sm text-[#6B4B4B]">
                                        Swipe to explore more academy memories
                                    </p>
                                </div>

                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    spaceBetween={20}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    {sliderGalleryImages.map((image) => (
                                        <SwiperSlide key={image.id}>
                                            <figure className="group overflow-hidden rounded-lg bg-[#F8F1F3] shadow-md">
                                                <img
                                                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                                                    src={image.url}
                                                    alt={
                                                        image.title ||
                                                        'Luckyfellas academy gallery'
                                                    }
                                                />

                                                <figcaption className="min-h-28 p-5">
                                                    <h3 className="font-black">
                                                        {image.title || 'Luckyfellas FC'}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-[#6B4B4B]">
                                                        {image.caption ||
                                                            'Academy image'}
                                                    </p>
                                                </figcaption>
                                            </figure>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </section>

                <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                        <p className="section-kicker">Contact</p>
                        <h2 className="section-title">Ready to connect with Luckyfellas Football Club?</h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#53604d]">
                            Use the contact details below for academy inquiries, player registration, partnerships, scouting conversations, or media requests.
                        </p>
                    </div>
                    <div className="rounded-lg bg-[#5C0017] p-6 text-white shadow-xl">
                        <div className="flex gap-4 border-b border-white/12 py-4">
                            <MapPin className="text-[#D9A7B5]" />
                            <div><p className="text-sm uppercase tracking-[0.18em] text-white/55">Location</p><p className="mt-1 font-bold">{club.location}</p></div>
                        </div>
                        <div className="flex gap-4 border-b border-white/12 py-4">
                            <Mail className="text-[#D9A7B5]" />
                            <div><p className="text-sm uppercase tracking-[0.18em] text-white/55">Email</p><p className="mt-1 font-bold">{club.email}</p></div>
                        </div>
                        <div className="flex gap-4 py-4">
                            <Award className="text-[#D9A7B5]" />
                            <div><p className="text-sm uppercase tracking-[0.18em] text-white/55">Academy</p><p className="mt-1 font-bold">{club.phone}</p></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

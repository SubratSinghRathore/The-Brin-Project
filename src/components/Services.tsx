export default function Services() {
    const services = [
        {
            title: "Counseling and Empowerment",
            desc: "Prashant’s role as a counselor is marked by his ability to connect deeply with people and guide them through personal and professional challenges.",
            img: "./assets/C&E.jpg"
        },
        {
            title: "Blogging and Digital Influence",
            desc: "Sharing expertise and experiences with a global audience through thought-provoking blog content and digital media.",
            img: "./assets/B&I.jpg"
        },
        {
            title: "Empowering Organizations",
            desc: "Providing strategic support to businesses and startups to overcome challenges and achieve sustainable growth.",
            img: "./assets/E&O.webp"
        },
        {
            title: "Entrepreneurship & Microfinance",
            desc: "Creating economic opportunities through microfinance, skill development, and entrepreneurship programs.",
            img: "./assets/E&M.webp"
        },
        {
            title: "Events, Talk Shows & Voice",
            desc: "A dynamic speaker and voice artist, engaging audiences with impactful messages in events and talk shows.",
            img: "./assets/scroll4.jpg"
        },
        {
            title: "Economic Empowerment",
            desc: "Helping individuals achieve financial stability through structured empowerment programs and initiatives.",
            img: "./assets/E&E.jpg"
        },
    ];

    return (
        <section className="py-20 bg-black text-white" id="services">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12 text-center">
                    Who We Are
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-zinc-900 rounded-xl overflow-hidden border border-yellow-500 shadow-lg group transition"
                        >
                            {/* Image */}
                            <div className="h-52 w-full overflow-hidden">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="w-full h-full object-cover group-hover:scale-110 transition"
                                />
                            </div>

                            {/* Overlay: always visible on mobile, hover on desktop */}
                            <div className="
                                absolute inset-0 bg-black/70
                                opacity-100
                                md:opacity-0 md:group-hover:opacity-100
                                transition
                                flex flex-col justify-center p-6
                            ">
                                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

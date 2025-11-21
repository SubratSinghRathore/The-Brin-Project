export default function Book() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Book Image Section (Empty for now) */}
                <div className="w-full h-80 bg-zinc-900 border border-yellow-500 rounded-xl flex items-center justify-center">
                    <img
                    src="./assets/Book.jpg"
                    />
                </div>

                {/* Book Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                        The Brim – Book Overview
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-[15px]">
                        The Brim is a book which revolves around a few characters who are heavily stressed
                        by today’s cut-throat, bewildering experiences of life. They hail from different 
                        backgrounds and cities and share the agonies at the cosmic café, wherein they come 
                        across a healer who soothes them and takes them into the hand-holding journey of 
                        cosmic healing.
                        <br /><br />
                        The pathway is intriguing yet interesting. Both characters start journaling, watching 
                        their breath, and slowly each one comes out of their trauma. They feel fresh, ready 
                        for a comeback after setbacks, and begin to witness the brim of nectar served into 
                        their lives.
                        <br /><br />
                        They all live smooth and confident thereafter.  
                        <span className="text-yellow-400 font-semibold">
                            The brim of cosmic nectar blossomed.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
}

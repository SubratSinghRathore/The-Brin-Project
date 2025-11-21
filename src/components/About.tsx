export default function About() {
  return (
    <section
      className="px-6 md:px-20 py-16 bg-[#FFF7DB] text-[#222] scroll-mt-20"
      id="about"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#D4A017] mb-10 tracking-wide">
        About the Founder
      </h2>

      <div className="max-w-4xl mx-auto bg-white/70 p-6 sm:p-10 rounded-2xl shadow-md border border-yellow-200">
        
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#E6B325] mb-4">
          FOUNDER: The Brim
        </h3>

        <p className="text-base sm:text-lg leading-relaxed text-[#444] mb-6">
          Prashant Mishra is a visionary business coach and motivational speaker who believes
          in breaking the limits of conventional coaching to unlock extraordinary results.
          With a career spanning over{" "}
          <span className="font-semibold text-[#D4A017]">10+ years</span>, he has guided
          countless individuals and organizations through transformative growth with his
          innovative and holistic coaching approach.
        </p>

        <h4 className="text-xl sm:text-2xl font-bold text-[#E6B325] mb-3">
          Our Achievements
        </h4>

        <p className="text-base sm:text-lg leading-relaxed text-[#444]">
          As a motivational speaker, Prashant captivates audiences with his dynamic presence
          and thought-provoking insights. His sessions combine inspiration with actionable
          strategies, helping entrepreneurs, corporate leaders, and diverse groups transcend
          limitations and achieve meaningful success. His message resonates deeply, pushing
          people to rise above challenges and lead with clarity and confidence.
        </p>

      </div>
    </section>
  );
}

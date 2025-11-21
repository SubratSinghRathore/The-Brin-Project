export default function Footer() {
    return (
        <footer className="bg-[#0E0E0E] text-[#FFF8E5] py-16 px-6 border-t border-[#2A2A2A]" id="footer">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Connect Us */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4 text-[#F4C430] uppercase tracking-wide">
                        Connect Us
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        The Brim – Media Company  
                        <br />
                        Strategic Branding • Identity Design • Market Research  
                        <br />
                        AI • Blockchain • IoT • Youth Empowerment  
                    </p>
                </div>

                {/* Send Message */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4 text-[#F4C430] uppercase tracking-wide">
                        Send Message
                    </h4>

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-[#1A1A1A] border border-[#3A3A3A] px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-[#F4C430] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-[#1A1A1A] border border-[#3A3A3A] px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-[#F4C430] outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="bg-[#1A1A1A] border border-[#3A3A3A] px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-[#F4C430] outline-none"
                        ></textarea>

                        <button className="bg-[#F4C430] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#E8B923] transition shadow-md">
                            Send
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-2xl font-semibold mb-4 text-[#F4C430] uppercase tracking-wide">
                        Follow Us
                    </h4>

                    <div className="flex items-center gap-6">

                        {/* X */}
                        <a
                            href="https://x.com/prashantshares?t=fL5oQWKPJ_bFoe98seZrDg&s=09"
                            className="hover:scale-110 transition hover:text-[#F4C430]"
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L11.1935 12.8065M17 7L12.8065 11.1935M12.8065 11.1935L9.77778 7H7L11.1935 12.8065M12.8065 11.1935L17 17H14.2222L11.1935 12.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/prashantshares01?utm_source=qr&igsh=MXBpajYydnV2cTd5MQ%3D%3D"
                            className="hover:scale-110 transition hover:text-[#F4C430]"
                        >
                            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/prashant-m-15a46b272/"
                            className="hover:scale-110 transition hover:text-[#F4C430]"
                        >
                            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                                <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100000645296564"
                            className="hover:scale-110 transition hover:text-[#F4C430]"
                        >
                            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>

                    </div>
                </div>

            </div>

            {/* Location */}
            <div className="mt-20">
                <h3 className="text-3xl font-bold mb-6 text-[#F4C430]">Our Location</h3>

                <div className="rounded-lg overflow-hidden shadow-xl border border-[#333]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3571.0201403774554!2d80.2837658754249!3d26.48729637690328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI5JzE0LjMiTiA4MMKwMTcnMTAuOCJF!5e0!3m2!1sen!2sin!4v1737736750803!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        loading="lazy"
                        className="border-0 w-full"
                    ></iframe>
                </div>
            </div>

            <p className="text-center text-gray-500 mt-10 text-lg">
                © 2025 The Brim — All Rights Reserved
            </p>
        </footer>
    );
}

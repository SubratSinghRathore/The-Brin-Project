export default function ConnectUs() {
  return (
    <section className="py-20 bg-blue-50" id="connect">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Connect With Us
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Have questions or want to collaborate? Reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white shadow-md p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Email</h3>
            <p className="text-gray-700">thebrimofficial@gmail.com</p>
          </div>

          <div className="bg-white shadow-md p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Phone</h3>
            <p className="text-gray-700">+91 9876543210</p>
          </div>

        </div>
      </div>
    </section>
  );
}

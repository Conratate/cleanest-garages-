export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Cleanest Garages</h1>
            <div className="space-x-4">
              <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Professional Garage Cleaning Services
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Transform your garage into a spotless, organized space. Our expert team provides
            comprehensive cleaning and organization services for residential and commercial garages.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Deep Cleaning', 'Organization', 'Pressure Washing'].map((service) => (
              <div key={service} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service}</h4>
                <p className="text-slate-600">
                  Professional {service.toLowerCase()} services tailored to your garage needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">Cleanest Garages © {new Date().getFullYear()}</p>
          <p className="text-slate-400">Professional garage cleaning services</p>
        </div>
      </footer>
    </main>
  )
}

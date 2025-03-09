export default function ContactPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
            Contact Us
          </h1>
  
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-medium">Wireless Research Lab</p>
            <p>Room No - 206/IIA</p>
            <p>Bharti School of Telecom</p>
            <p>Indian Institute of Technology Delhi</p>
            <p>Hauz Khas, New Delhi-110016, INDIA</p>
  
            <div className="flex items-center gap-2">
              <span className="font-semibold">📞</span>
              <a href="tel:01126582050" className="hover:text-blue-600">
                011-26582050
              </a>
            </div>
  
            <div className="flex items-center gap-2">
              <span className="font-semibold">📧</span>
              <a
                href="mailto:support@vlab.co.in"
                className="hover:text-blue-600"
              >
                support@vlab.co.in
              </a>
            </div>
          </div>
  
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://maps.google.com/maps?q=IIT%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
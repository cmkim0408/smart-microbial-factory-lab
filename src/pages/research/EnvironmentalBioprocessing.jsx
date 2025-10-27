import SideNav from "../../components/SideNav";
import HeaderBar from "../../components/HeaderBar";

export default function EnvironmentalBioprocessing() {
  const papers = [
    {
      id: 1,
      strain: "Hexavalent chromium removal",
      title: "Hexavalent chromium as a cathodic electron acceptor in a bipolar membrane microbial fuel cell with the simultaneous treatment of electroplating wastewater",
      journal: "Chemical Engineering Journal",
      volume: "Volume 328, 15 November 2017, Pages 703-707",
      image: "/src/assets/Metal_1.jpg",
      link: "https://www.sciencedirect.com/science/article/pii/S138589471731224X"
    },
    {
      id: 2,
      strain: "Indium recovery process",
      title: "Spontaneous and applied potential driven indium recovery on carbon electrode and crystallization using a bioelectrochemical system",
      journal: "Bioresource Technology",
      volume: "Volume 258, June 2018, Pages 203-207",
      image: "/src/assets/Metal_2.jpg",
      link: "https://www.sciencedirect.com/science/article/pii/S0960852418303006"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-teal-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20 space-y-24">
          
          {/* -------------------- Title Section -------------------- */}
          <section>
            <h1 className="text-6xl font-bold text-teal-800 mb-8">
              Sustainable Environmental Bioprocessing
            </h1>
          </section>

          {/* -------------------- Overview Section -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 border-b-4 border-teal-400 pb-2 inline-block">
              Overview
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Our lab develops sustainable bioprocessing platforms that address environmental challenges and promote circular resource utilization.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  We integrate biosensing, microbial conversion, and process engineering to transform pollutants and waste streams into valuable products.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  This research establishes environmentally responsible biotechnologies that link carbon neutrality with real-world applications in waste and water systems.
                </p>
                <p className="text-3xl italic text-teal-700 font-semibold text-center mt-8 whitespace-nowrap">
                  "Designing sustainable bioprocesses for a cleaner and carbon-neutral environment."
                </p>
              </div>
            </div>
          </section>

          {/* -------------------- Key Research Themes -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-teal-800 mb-8 border-b-4 border-teal-400 pb-2 inline-block">
              Key Research Themes
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Development of biosensor-linked systems for real-time monitoring of environmental parameters
                  </h3>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Microbial conversion of organic pollutants and waste carbon sources
                  </h3>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Microplastic and waste valorization through integrated bioprocess design
                  </h3>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Application of bioelectrochemical and biotechnological tools for metal recovery and pollutant mitigation
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- Papers -------------------- */}
          <section>
            <h2 className="text-4xl font-bold text-teal-800 mb-8 border-b-4 border-teal-400 pb-2 inline-block">
              Papers
            </h2>
            
            <div className="space-y-8">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left: Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={paper.image} 
                        alt={paper.strain}
                        className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-gray-200"
                      />
                    </div>
                    
                    {/* Center: Description */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-teal-700 mb-3">
                        {paper.strain}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-2">
                        {paper.title}
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        {paper.journal}
                      </p>
                      {paper.volume && (
                        <p className="text-lg text-gray-600">
                          {paper.volume}
                        </p>
                      )}
                    </div>
                    
                    {/* Right: Link Button */}
                    <div className="flex-shrink-0">
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-800 transition"
                      >
                        Link →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

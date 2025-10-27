import SideNav from "../../components/SideNav";
import HeaderBar from "../../components/HeaderBar";

export default function AutonomousBioprocessing() {
  const papers = [
    {
      id: 1,
      strain: "Biohydrogen process",
      title: "Coupling gas purging with inorganic carbon supply to enhance biohydrogen production with Clostridium thermocellum",
      journal: "Chemical Engineering Journal",
      volume: "Volume 456, 15 January 2023, 141028",
      image: "/src/assets/CO2.jpg",
      link: "https://www.sciencedirect.com/science/article/pii/S1385894722065093"
    },
    {
      id: 2,
      strain: "BioelectrolyzerTEA",
      title: "BioelectrolyzerTEA: A techno-economic and carbon-energy framework for low-power, membrane-free bioelectrolyzer systems",
      journal: "in preparation",
      volume: "",
      image: "/src/assets/Bioelectrolyzer.jpg",
      link: "#"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-purple-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20 space-y-24">
          
          {/* -------------------- Title Section -------------------- */}
          <section>
            <h1 className="text-6xl font-bold text-purple-800 mb-8">
              Smart Carbon-Neutral Biofoundry
            </h1>
          </section>

          {/* -------------------- Overview Section -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-purple-800 mb-8 border-b-4 border-purple-400 pb-2 inline-block">
              Overview
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Our lab is building a Smart Carbon-Neutral Biofoundry — an unmanned, sensor-integrated platform that combines automated bioprocessing with CO₂-neutral electro-bioconversion.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  By linking biosensors, robotic sampling systems, and water-electrolysis-coupled bioreactors, we create self-operating laboratories that recycle or fix CO₂ while performing continuous microbial cultivation and analysis.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  This approach represents the convergence of automation, electrochemistry, and carbon-neutral process engineering toward next-generation sustainable manufacturing.
                </p>
                <p className="text-3xl italic text-purple-700 font-semibold text-center mt-8 whitespace-nowrap">
                  "From autonomous operation to carbon-neutral bioprocessing — the Smart Biofoundry vision."
                </p>
              </div>
            </div>
          </section>

          {/* -------------------- Key Research Themes -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-purple-800 mb-8 border-b-4 border-purple-400 pb-2 inline-block">
              Key Research Themes
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Sensor-linked automation for unmanned cultivation, sampling, and analysis
                  </h3>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Electrolysis-coupled bioreactors for CO₂ recycling and H₂-driven microbial conversion
                  </h3>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Electroactive bioprocess design integrating biosensors with process control
                  </h3>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Carbon-neutral process modeling and monitoring through real-time gas and energy analysis
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- Papers -------------------- */}
          <section>
            <h2 className="text-4xl font-bold text-purple-800 mb-8 border-b-4 border-purple-400 pb-2 inline-block">
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
                      <h3 className="text-2xl font-bold text-purple-700 mb-3">
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
                        className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition"
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

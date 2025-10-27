import SideNav from "../../components/SideNav";
import HeaderBar from "../../components/HeaderBar";

export default function MicrobialCatalysts() {
  const papers = [
    {
      id: 1,
      strain: "Klebsiella variicola JYP01",
      title: "A newly isolated Klebsiella variicola JYP01 strain with iron-interaction capability for energy-efficient production of 1,3-propanediol",
      journal: "Journal of the Taiwan Institute of Chemical Engineers",
      volume: "Volume 161, August 2024, 105555",
      image: "/src/assets/BioCatalyst_1.jpg",
      link: "https://www.sciencedirect.com/science/article/pii/S187610702400213X"
    },
    {
      id: 2,
      strain: "Stenotrophomonas maltophilia SO-01",
      title: "Genome-scale and machine-learning analyses reveal coordinated acetate assimilation in a newly isolated Stenotrophomonas maltophilia toward acetate valorization",
      journal: "in revision",
      volume: "",
      image: "/src/assets/BioCatalyst_2.jpg",
      link: "#"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-green-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20 space-y-24">
          
          {/* -------------------- Title Section -------------------- */}
          <section>
            <h1 className="text-6xl font-bold text-green-800 mb-8">
              Smart Microbial Catalysts
            </h1>
          </section>

          {/* -------------------- Overview Section -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
              Overview
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Our lab focuses on discovering and characterizing industrially important and electroactive microbes that enable energy-efficient and sustainable bioprocesses.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  We investigate their carbon and energy conversion mechanisms through genome-scale metabolic modeling and fluxomics analysis, linking microbial physiology to process-level functionality.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  This work lays the foundation for developing bioelectrochemical and carbon-valorizing platforms that bridge biological and electrochemical catalysis.
                </p>
                <p className="text-3xl italic text-green-700 font-semibold text-center mt-8">
                  "Exploring nature's catalysts to design the next generation of energy-efficient microbes."
                </p>
              </div>
            </div>
          </section>

          {/* -------------------- Key Research Themes -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
              Key Research Themes
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Isolation of novel industrial and marine microbial strains with distinct metabolic or redox activities
                  </h3>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Electroactive microorganism discovery for bioelectrochemical systems (BES, MES)
                  </h3>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Fluxomics and metabolic modeling of energy and carbon conversion pathways
                  </h3>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Functional screening under electrochemical and saline environments
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- Papers -------------------- */}
          <section>
            <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
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
                      <h3 className="text-2xl font-bold text-green-700 mb-3 italic">
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
                        className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition"
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

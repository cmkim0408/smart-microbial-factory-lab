import SideNav from "../../components/SideNav";
import HeaderBar from "../../components/HeaderBar";

export default function ComputationalDesign() {
  const papers = [
    {
      id: 1,
      strain: "FBA/FVA + ML",
      title: "Genome-scale and machine-learning analyses reveal coordinated acetate assimilation in a newly isolated Stenotrophomonas maltophilia toward acetate valorization",
      journal: "in revision",
      volume: "",
      image: "/src/assets/BioCatalyst_2.jpg",
      link: "#"
    },
    {
      id: 2,
      strain: "BioelectrolyzerTEA",
      title: "BioelectrolyzerTEA: A techno-economic and carbon-energy framework for low-power, membrane-free bioelectrolyzer systems",
      journal: "in preparation",
      volume: "",
      image: "/src/assets/Bioelectrolyzer.jpg",
      link: "#"
    },
    {
      id: 3,
      strain: "BioElecTEA",
      title: "BioElecTEA: A reproducible, Uncertainty-aware techno-economic platform for microbial fuel cell-enabled nature-based wastewater treatment",
      journal: "in preparation",
      volume: "",
      image: "",
      link: "#"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-blue-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20 space-y-24">
          
          {/* -------------------- Title Section -------------------- */}
          <section>
            <h1 className="text-6xl font-bold text-blue-800 mb-8">
              Computational Bioprocess Design
            </h1>
          </section>

          {/* -------------------- Overview Section -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-blue-800 mb-8 border-b-4 border-blue-400 pb-2 inline-block">
              Overview
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Our lab develops data-driven computational frameworks that connect microbial metabolism with process engineering.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  By integrating fluxomics, techno-economic analysis (TEA), and AI-based optimization, we design and evaluate sustainable bioprocesses from the cellular to the industrial scale.
                </p>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  These models serve as digital twins of experimental systems, guiding efficient process design and automation.
                </p>
                <p className="text-3xl italic text-blue-700 font-semibold text-center mt-8 whitespace-nowrap">
                  "From cellular fluxes to industrial flows — modeling the biology behind sustainable manufacturing."
                </p>
              </div>
            </div>
          </section>

          {/* -------------------- Key Research Themes -------------------- */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-blue-800 mb-8 border-b-4 border-blue-400 pb-2 inline-block">
              Key Research Themes
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Genome-scale metabolic modeling (GSM), flux balance/variability analysis (FBA/FVA), and fluxomics integration
                  </h3>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Techno-economic analysis (TEA) of microbial and electrochemical processes using BioSTEAM- and BioElecTEA-based frameworks
                  </h3>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    AI/ML-assisted prediction and optimization of strain and process performance
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- Papers -------------------- */}
          <section>
            <h2 className="text-4xl font-bold text-blue-800 mb-8 border-b-4 border-blue-400 pb-2 inline-block">
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
                      {paper.image ? (
                        <img 
                          src={paper.image} 
                          alt={paper.strain}
                          className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-gray-200"
                        />
                      ) : (
                        <div className="w-48 h-32 bg-gray-200 rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Center: Description */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-blue-700 mb-3">
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
                        className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition"
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

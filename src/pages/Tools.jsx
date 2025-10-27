import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default function Tools() {
  const tools = [
    {
      name: "BioElecTEA",
      desc: "A techno-economic analysis (TEA) package for bioelectrochemical systems integrating energy, carbon, and cost flows.",
      link: "https://github.com/cmkim0408/BioElecTEA",
    },
    {
      name: "BioElectrolyzerTEA",
      desc: "A comprehensive techno-economic analysis framework for bioelectrolyzer systems and microbial electrosynthesis processes.",
      link: "#",
    },
    {
      name: "FBA-ML Pipeline",
      desc: "A Python-based platform integrating metabolic flux data with machine learning for predictive metabolic engineering.",
      link: "#",
    },
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-purple-50">
        <HeaderBar />

        <div className="pt-24 px-10 md:px-20">
          {/* -------------------- Intro Section -------------------- */}
          <section className="mb-20">
            <h1 className="text-6xl font-bold text-purple-800 mb-6">Tools</h1>
            <p className="text-3xl text-gray-700 max-w-5xl">
              We develop and share open-source modeling frameworks for the design and analysis of biotechnological and bioelectrochemical processes.
            </p>
          </section>

          {/* -------------------- Tools List -------------------- */}
          <section className="space-y-10">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-purple-700 mb-2">
                      {tool.name}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl">{tool.desc}</p>
                  </div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 inline-block bg-purple-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-purple-800 transition"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

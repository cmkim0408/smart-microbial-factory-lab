import { useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default function Research() {
  const navigate = useNavigate();

  const researchAreas = [
    {
      id: "microbial-catalysts",
      title: "Smart Microbial Catalysts",
      tagline: "Discovering electroactive and industrially important microbes",
      description: "Isolation and flux-based analysis of novel microbes with unique carbon and energy conversion capabilities for sustainable bioelectrochemical processes.",
      icon: "🧫",
      color: "bg-green-100 hover:bg-green-200",
      textColor: "text-green-800",
      borderColor: "border-green-300"
    },
    {
      id: "computational-design",
      title: "Computational Bioprocess Design",
      tagline: "Modeling and optimizing sustainable bioprocesses through data-driven simulation",
      description: "We integrate fluxomics, techno-economic analysis (TEA), and AI-based modeling to connect microbial metabolism with process design and guide efficient, scalable biomanufacturing.",
      icon: "💻",
      color: "bg-blue-100 hover:bg-blue-200",
      textColor: "text-blue-800",
      borderColor: "border-blue-300"
    },
    {
      id: "autonomous-bioprocessing",
      title: "Smart Carbon-Neutral Biofoundry",
      tagline: "Developing a Smart Biofoundry for autonomous and CO₂-neutral bioprocessing",
      description: "We integrate biosensors, robotics, and water-electrolysis-coupled bioreactors to build an unmanned platform for sustainable, self-operating biomanufacturing.",
      icon: "🏭",
      color: "bg-purple-100 hover:bg-purple-200",
      textColor: "text-purple-800",
      borderColor: "border-purple-300"
    },
    {
      id: "environmental-biotech",
      title: "Sustainable Environmental Bioprocessing",
      tagline: "Designing sustainable bioprocesses for environmental challenges and circular resource utilization",
      description: "We develop biosensing and microbial conversion platforms that transform pollutants and waste streams into valuable products for carbon-neutral environmental applications.",
      icon: "🌿",
      color: "bg-teal-100 hover:bg-teal-200",
      textColor: "text-teal-800",
      borderColor: "border-teal-300"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-blue-50">
        <HeaderBar />

        <div className="pt-24 px-10 md:px-20">
          {/* -------------------- Research Vision Hero Section -------------------- */}
          <section className="mb-20">
            <h1 className="text-6xl font-bold text-blue-800 mb-6">Research</h1>
            <h2 className="text-4xl font-semibold text-blue-700 mb-8">
              From Microbe to Process — Toward the Fully Automated Biofactory
            </h2>
            <p className="text-2xl text-gray-700 max-w-7xl mb-8">
              We create <strong>smart microbial factories</strong> that connect <strong>microbial design</strong>, <strong>process modeling</strong>, and <strong>robotic automation</strong>.
              Our goal is simple: build a <strong>fully automated bioprocess ecosystem</strong> that transforms <strong>waste carbon</strong> into <strong>valuable products</strong>.
            </p>
            <p className="text-2xl text-gray-600 max-w-7xl mb-6">
              We integrate <strong>systems biology</strong>, <strong>bioelectrochemical engineering</strong>, and <strong>AI-driven control</strong> to <strong>electrify biology</strong> — from <strong>strain discovery</strong> to <strong>process automation</strong>.
              Through this approach, we bridge <strong>microbes</strong>, <strong>models</strong>, and <strong>machines</strong> to enable <strong>sustainable biomanufacturing</strong>.
            </p>
            <p className="text-2xl italic text-blue-700 font-semibold">
              "From microbe to process, and from process to the fully automated lab."
            </p>
          </section>

          {/* -------------------- Research Flow Visualization -------------------- */}
          <section className="mb-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-8xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Research Flow</h2>
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-20">
                <div className="text-center">
                  <div className="text-8xl mb-4">🧫</div>
                  <p className="text-3xl font-bold text-gray-700">Microbial<br/>Catalyst</p>
                </div>
                <div className="text-6xl text-blue-600">→</div>
                <div className="text-center">
                  <div className="text-8xl mb-4">💻</div>
                  <p className="text-3xl font-bold text-gray-700 whitespace-nowrap">Modeling & Simulation</p>
                </div>
                <div className="text-6xl text-blue-600">→</div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🏭</div>
                  <p className="text-3xl font-bold text-gray-700">Automated<br/>Process</p>
                </div>
                <div className="text-6xl text-blue-600">→</div>
                <div className="text-center">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-3xl font-bold text-gray-700">Sustainable<br/>Environment</p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------- Research Areas -------------------- */}
          <section className="mb-32">
            <h2 className="text-5xl font-bold text-blue-800 mb-10 border-b-4 border-blue-400 pb-2 inline-block">
              Research Areas
            </h2>

            <div className="flex flex-col space-y-12">
              {researchAreas.map((area) => (
                <div
                  key={area.id}
                  onClick={() => {
                    const routes = {
                      'microbial-catalysts': '/research/microbial-catalysts',
                      'computational-design': '/research/computational-design',
                      'autonomous-bioprocessing': '/research/autonomous-bioprocessing',
                      'environmental-biotech': '/research/environmental-bioprocessing'
                    };
                    navigate(routes[area.id]);
                  }}
                  className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 cursor-pointer"
                >
                  <div className="text-8xl mb-6 md:mb-0 md:mr-10">
                    {area.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-2">
                      <strong>Focus:</strong> {area.tagline}
                    </p>
                    <p className="text-xl text-blue-600 font-medium">
                      <strong>Description:</strong> {area.description}
                    </p>
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

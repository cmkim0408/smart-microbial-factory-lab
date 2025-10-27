import { useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default function People() {
  const navigate = useNavigate();

  const researchers = [
    {
      name: "Dr. Hyeongwoo",
      image: "/src/assets/researcher1.jpg",
      interests: "Bioinformatics",
      contact: "creo9447@naver.com",
    },
    {
      name: "Dukwoo Kim",
      image: "/src/assets/researcher2.jpg",
      interests: "Metabolic Flux Modelling",
      contact: "hippo9808@gmail.com",
    },
    {
      name: "Suesaengthong Kodchaphon",
      image: "/src/assets/researcher3.jpg",
      interests: "Isolation and Characterization of Industrial Microbe",
      contact: "dogdog13579@hotmail.com",
    },
    {
      name: "Phathompant Araya",
      image: "/src/assets/researcher4.jpg",
      interests: "Microbial Biosensor",
      contact: "araya.papoy1515@gmail.com",
    },
    {
      name: "Seong Jun Kang",
      image: "/src/assets/researcher5.jpg",
      interests: "Biofoundry and Robotics",
      contact: "kawg0420@gmail.com",
    },
    {
      name: "Mui Gu",
      image: "/src/assets/researcher6.jpg",
      interests: "Biofoundry and Robotics",
      contact: "muimui1253@gmail.com",
    },
    {
      name: "Minwoo Jo",
      image: "/src/assets/researcher7.jpg",
      interests: "Techno-Economic Analysis Modelling",
      contact: "300__@naver.com",
    },
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-green-50">
        <HeaderBar />

        <div className="pt-24 px-10 md:px-20">
          {/* -------------------- Principal Investigator -------------------- */}
          <section className="mb-32">
            <h2 className="text-5xl font-bold text-green-800 mb-10 border-b-4 border-green-400 pb-2 inline-block">
              Principal Investigator
            </h2>

            <div
              onClick={() => navigate("/people/pi")}
              className="cursor-pointer bg-white rounded-xl shadow-lg p-8 w-96 text-center hover:scale-105 transition mx-auto"
            >
              <img
                src="/src/assets/Changman.jpg"
                alt="Prof. Changman Kim"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-md"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Prof. Changman Kim
              </h3>
              <p className="text-gray-600 mt-2">
                Associate Professor, Department of Biotechnology & Bioengineering
              </p>
              <p className="text-blue-600 mt-3 font-medium">cmkim@jnu.ac.kr</p>
              <p className="mt-4 text-green-700 font-semibold underline">
                View Details →
              </p>
            </div>
          </section>

          {/* -------------------- Current Members -------------------- */}
          <section className="mb-32">
            <h2 className="text-5xl font-bold text-green-800 mb-10 border-b-4 border-green-400 pb-2 inline-block">
              Current Members
            </h2>

            <div className="flex flex-col space-y-12">
              {researchers.map((r) => (
                <div
                  key={r.name}
                  className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-10"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {r.name}
                    </h3>
                    <p className="text-xl text-gray-600 mb-2">
                      <strong>Research interests:</strong> {r.interests}
                    </p>
                    <p className="text-lg text-blue-600 font-medium">
                      <strong>Contact:</strong> {r.contact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

              {/* -------------------- Alumni -------------------- */}
              <section className="mb-32">
                <h2 className="text-5xl font-bold text-green-800 mb-10 border-b-4 border-green-400 pb-2 inline-block">
                  Alumni
                </h2>

                <p className="text-2xl text-gray-600 text-center py-8">
                  Alumni information will be updated soon.
                </p>
              </section>
        </div>
      </div>
    </div>
  );
}
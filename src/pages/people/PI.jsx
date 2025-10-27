import SideNav from "../../components/SideNav";
import HeaderBar from "../../components/HeaderBar";

export default function PI() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-green-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20 space-y-24">
          
          {/* -------------------- Profile Section -------------------- */}
          <section className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-xl rounded-2xl p-10">
            <img
              src="/src/assets/Changman.jpg"
              alt="Prof. Changman Kim"
              className="w-64 h-80 rounded-lg object-cover shadow-md"
            />
            <div>
              <h1 className="text-5xl font-bold text-green-800 mb-4">
                Prof. Changman Kim
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                Associate Professor, Department of Biotechnology and Bioengineering,<br />
                Chonnam National University
              </p>
                  <p className="text-3xl text-blue-700 mt-6 font-bold">📧 cmkim@jnu.ac.kr</p>
            </div>
          </section>

              {/* -------------------- Professional Experience -------------------- */}
              <section className="mb-24">
                <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
                  Professional Experience
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Associate Professor</h3>
                        <span className="text-lg font-semibold text-green-700">2025.09 – Current</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Department of Biotechnology and Bioengineering, Chonnam National University, Republic of Korea
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Assistant Professor</h3>
                        <span className="text-lg font-semibold text-green-700">2021.09 – 2025.08</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Department of Biotechnology and Bioengineering, Chonnam National University, Republic of Korea
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Postdoctoral Researcher</h3>
                        <span className="text-lg font-semibold text-green-700">2019.03 – 2021.08</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Advanced Biofuels & bioproduct Process Development Unit (ABPDU), Lawrence Berkeley National Laboratory, USA
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* -------------------- Education -------------------- */}
              <section className="mb-24">
                <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
                  Education
                </h2>
                
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Doctor of Philosophy (Ph.D) in Chemical Engineering</h3>
                        <span className="text-lg font-semibold text-blue-700">2014.03 – 2019.02</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Department of Polymer Science and Chemical Engineering, Pusan National University, Republic of Korea
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Master of Science (M.Sc.) in Ocean Science</h3>
                        <span className="text-lg font-semibold text-blue-700">2011.03 – 2013.02</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Department of Ocean Science, Pohang University of Science And Technology (POSTECH), Republic of Korea
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">Bachelor of Science (B.Sc.) in Microbiology</h3>
                        <span className="text-lg font-semibold text-blue-700">2007.03 – 2011.02</span>
                      </div>
                      <p className="text-lg text-gray-700">
                        Department of Microbiology, Pusan National University, Republic of Korea
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* -------------------- Selected Papers -------------------- */}
              <section>
                <h2 className="text-4xl font-bold text-green-800 mb-8 border-b-4 border-green-400 pb-2 inline-block">
                  Selected Papers
                </h2>
            
            {/* Bioelectrochemical metabolic regulation and chemical production */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-700 mb-6">
                Bioelectrochemical metabolic regulation and chemical production (Electro-fermentation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/EF_1.jpg" 
                    alt="Electro-fermentation Paper 1" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://chemistry-europe.onlinelibrary.wiley.com/doi/full/10.1002/cssc.201902928', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">ChemSusChem 2020</p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/EF_2.jpg" 
                    alt="Electro-fermentation Paper 2" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://link.springer.com/article/10.1186/s13068-017-0886-x', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Biotechnology for Biofuels 2017</p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/EF_3.jpg" 
                    alt="Electro-fermentation Paper 3" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S0013468622014177', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Electrochimica Acta 2022</p>
                </div>
              </div>
            </div>

            {/* Gas fermentation and fixation by bioprocess development */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-700 mb-6">
                Gas fermentation and fixation by bioprocess development
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/Gas_1.jpg" 
                    alt="Gas fermentation Paper 1" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S1385894722065093', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Chemical Engineering Journal 2023</p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/Gas_2.jpg" 
                    alt="Gas fermentation Paper 2" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S0045653517315722', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Chemosphere 2018</p>
                </div>
                <div></div>
              </div>
            </div>

            {/* Metal recovery using a bioelectrochemical system */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-green-700 mb-6">
                Metal recovery using a bioelectrochemical system
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/Metal_1.jpg" 
                    alt="Metal recovery Paper 1" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S138589471731224X', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Chemical Engineering Journal 2017</p>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/Metal_2.jpg" 
                    alt="Metal recovery Paper 2" 
                    className="w-full h-52 object-cover rounded-lg shadow-lg border-2 border-black"
                    onClick={() => window.open('https://www.sciencedirect.com/science/article/pii/S0960852418303006', '_blank')}
                  />
                  <p className="text-center mt-2 text-lg font-bold text-gray-800">Bioresource Technology 2018</p>
                </div>
                <div></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

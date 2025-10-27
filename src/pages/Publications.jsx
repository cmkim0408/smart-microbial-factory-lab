import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default function Publications() {
  const publications = [
    {
      id: 1,
      authors: "D. S. Kong et al.",
      title: "A newly isolated Klebsiella variicola JYP01 strain with iron-interaction capability for energy-efficient production of 1, 3-propanediol",
      journal: "Journal of the Taiwan Institute of Chemical Engineers",
      volume: "161",
      pages: "105555",
      year: "2024"
    },
    {
      id: 2,
      authors: "D. S. Kong et al.",
      title: "Bioconversion of Glycerol to 1, 3-Propanediol Using Klebsiella pneumoniae L17 with the Microbially Influenced Corrosion of Zero-Valent Iron",
      journal: "Fermentation",
      volume: "9",
      issue: "3",
      pages: "233",
      year: "2023"
    },
    {
      id: 3,
      authors: "C. Kim et al.",
      title: "Coupling gas purging with inorganic carbon supply to enhance biohydrogen production with Clostridium thermocellum",
      journal: "Chemical Engineering Journal",
      volume: "456",
      pages: "141028",
      year: "2023"
    },
    {
      id: 4,
      authors: "D. S. Kong et al.",
      title: "Bioconversion of Crude Glycerol into 1, 3-Propanediol (1, 3-PDO) with Bioelectrochemical System and Zero-Valent Iron Using Klebsiella pneumoniae L17",
      journal: "Energies",
      volume: "14",
      issue: "20",
      pages: "6806",
      year: "2021"
    },
    {
      id: 5,
      authors: "J. Baek, C. Kim, Y. E. Song, S. Mutyala, E.-H. Seol, and J. R. Kim",
      title: "Bioelectrochemical metabolic regulation of a heterologously expressed glycerol reductive pathway in E. coli BL21 (DE3)",
      journal: "Electrochimica Acta",
      volume: "434",
      pages: "141260",
      year: "2022"
    },
    {
      id: 6,
      authors: "C. Kim et al.",
      title: "Small Current but Highly Productive Synthesis of 1, 3‐Propanediol from Glycerol by an Electrode‐Driven Metabolic Shift in Klebsiella pneumoniae L17",
      journal: "ChemSusChem",
      volume: "13",
      issue: "3",
      pages: "564-573",
      year: "2020"
    },
    {
      id: 7,
      authors: "M. Y. Kim et al.",
      title: "Metabolic shift of Klebsiella pneumoniae L17 by electrode-based electron transfer using glycerol in a microbial fuel cell",
      journal: "Bioelectrochemistry",
      volume: "125",
      pages: "1-7",
      year: "2019"
    },
    {
      id: 8,
      authors: "C. Kim, J. R. Kim, and J. Heo",
      title: "Enhancement of bioelectricity generation by a microbial fuel cell using Ti nanoparticle‐modified carbon electrode",
      journal: "Journal of Chemical Technology & Biotechnology",
      volume: "94",
      issue: "5",
      pages: "1622-1627",
      year: "2019"
    },
    {
      id: 9,
      authors: "C. Kim et al.",
      title: "Spontaneous and applied potential driven indium recovery on carbon electrode and crystallization using a bioelectrochemical system",
      journal: "Bioresource technology",
      volume: "258",
      pages: "203-207",
      year: "2018"
    },
    {
      id: 10,
      authors: "C. H. Im, C. Kim, Y. E. Song, S.-E. Oh, B.-H. Jeon, and J. R. Kim",
      title: "Electrochemically enhanced microbial CO conversion to volatile fatty acids using neutral red as an electron mediator",
      journal: "Chemosphere",
      volume: "191",
      pages: "166-173",
      year: "2018"
    },
    {
      id: 11,
      authors: "C. Kim et al.",
      title: "Hexavalent chromium as a cathodic electron acceptor in a bipolar membrane microbial fuel cell with the simultaneous treatment of electroplating wastewater",
      journal: "Chemical Engineering Journal",
      volume: "328",
      pages: "703-707",
      year: "2017"
    },
    {
      id: 12,
      authors: "C. Kim et al.",
      title: "Anodic electro-fermentation of 3-hydroxypropionic acid from glycerol by recombinant Klebsiella pneumoniae L17 in a bioelectrochemical system",
      journal: "Biotechnology for biofuels",
      volume: "10",
      pages: "1-11",
      year: "2017"
    },
    {
      id: 13,
      authors: "C. Kim, Y. E. Song, C. R. Lee, B.-H. Jeon, and J. R. Kim",
      title: "Glycerol-fed microbial fuel cell with a co-culture of Shewanella oneidensis MR-1 and Klebsiella pneumonae J2B",
      journal: "Journal of Industrial Microbiology and Biotechnology",
      volume: "43",
      issue: "10",
      pages: "1397-1403",
      year: "2016"
    },
    {
      id: 14,
      authors: "C. Kim, S. K. Ainala, Y.-K. Oh, B.-H. Jeon, S. Park, and J. R. Kim",
      title: "Metabolic flux change in Klebsiella pneumoniae L17 by anaerobic respiration in microbial fuel cell",
      journal: "Biotechnol Bioproc E",
      volume: "21",
      pages: "250-260",
      year: "2016"
    },
    {
      id: 15,
      authors: "B. Kim et al.",
      title: "Progress and Prospects for Applications of Extracellular Electron Transport Mechanism in Environmental Biotechnology",
      journal: "ACS ES&T Engineering",
      year: "2024"
    },
    {
      id: 16,
      authors: "S. Li et al.",
      title: "Electron uptake from solid electrodes promotes the more efficient conversion of CO2 to polyhydroxybutyrate by using Rhodobacter sphaeroides",
      journal: "Chemical Engineering Journal",
      volume: "469",
      pages: "143785",
      year: "2023"
    },
    {
      id: 17,
      authors: "H. S. Im et al.",
      title: "Zero-valent Iron Enhances Acetate and Butyrate Production from Carbon Monoxide by Fonticella tunisiensis HN43",
      journal: "Biotechnol Bioproc E",
      volume: "28",
      issue: "5",
      pages: "835-841",
      year: "2023"
    },
    {
      id: 18,
      authors: "Y. E. Song et al.",
      title: "Biofilm matrix and artificial mediator for efficient electron transport in CO2 microbial electrosynthesis",
      journal: "Chemical Engineering Journal",
      volume: "427",
      pages: "131885",
      year: "2022"
    },
    {
      id: 19,
      authors: "Y. E. Song et al.",
      title: "Supply of proton enhances CO electrosynthesis for acetate and volatile fatty acid productions",
      journal: "Bioresource Technology",
      volume: "320",
      pages: "124245",
      year: "2021"
    },
    {
      id: 20,
      authors: "S. Mutyala et al.",
      title: "Enabling anoxic acetate assimilation by electrode-driven respiration in the obligate aerobe, Pseudomonas putida",
      journal: "Bioelectrochemistry",
      volume: "138",
      pages: "107690",
      year: "2021"
    },
    {
      id: 21,
      authors: "D. S. Kong, C. Kim, Y. E. Song, J. Baek, H. S. Im, and J. R. Kim",
      title: "Zero-valent iron driven bioconversion of glycerol to 1, 3-propanediol using Klebsiella pneumoniae L17",
      journal: "Process Biochemistry",
      volume: "106",
      pages: "158-162",
      year: "2021"
    },
    {
      id: 22,
      authors: "Y. E. Song et al.",
      title: "Increased CODH activity in a bioelectrochemical system improves microbial electrosynthesis with CO",
      journal: "Sustainable Energy & Fuels",
      volume: "4",
      issue: "12",
      pages: "5952-5957",
      year: "2020"
    },
    {
      id: 23,
      authors: "A. Vellingiri et al.",
      title: "Overexpression of c‐type cytochrome, CymA in Shewanella oneidensis MR‐1 for enhanced bioelectricity generation and cell growth in a microbial fuel cell",
      journal: "Journal of Chemical Technology & Biotechnology",
      volume: "94",
      issue: "7",
      pages: "2115-2122",
      year: "2019"
    },
    {
      id: 24,
      authors: "Y. E. Song, M. M. El-Dalatony, C. Kim, M. B. Kurade, B.-H. Jeon, and J. R. Kim",
      title: "Harvest of electrical energy from fermented microalgal residue using a microbial fuel cell",
      journal: "international journal of hydrogen energy",
      volume: "44",
      issue: "4",
      pages: "2372-2379",
      year: "2019"
    },
    {
      id: 25,
      authors: "H. S. Im, C. Kim, Y. E. Song, J. Baek, C. H. Im, and J. R. Kim",
      title: "Isolation of novel CO converting microorganism using zero valent iron for a bioelectrochemical system (BES)",
      journal: "Biotechnol Bioproc E",
      volume: "24",
      pages: "232-239",
      year: "2019"
    },
    {
      id: 26,
      authors: "Y.-K. Oh, K.-R. Hwang, C. Kim, J. R. Kim, and J.-S. Lee",
      title: "Recent developments and key barriers to advanced biofuels: A short review",
      journal: "Bioresource Technology",
      volume: "257",
      pages: "320-333",
      year: "2018"
    },
    {
      id: 27,
      authors: "C. R. Lee et al.",
      title: "Co-culture-based biological carbon monoxide conversion by Citrobacter amalonaticus Y19 and Sporomusa ovata via a reducing-equivalent transfer mediator",
      journal: "Bioresource technology",
      volume: "259",
      pages: "128-135",
      year: "2018"
    },
    {
      id: 28,
      authors: "J. Baek, C. Kim, Y. E. Song, H. S. Im, M. Sakuntala, and J. R. Kim",
      title: "Separation of acetate produced from C1 gas fermentation using an electrodialysis-based bioelectrochemical system",
      journal: "Energies",
      volume: "11",
      issue: "10",
      pages: "2770",
      year: "2018"
    },
    {
      id: 29,
      authors: "M. Y. Kim, C. Kim, J. Moon, J. Heo, S. P. Jung, and J. R. Kim",
      title: "Polymer film-based screening and isolation of polylactic acid (PLA)-degrading microorganisms",
      journal: "Journal of Microbiology and Biotechnology",
      volume: "27",
      issue: "2",
      pages: "342-349",
      year: "2017"
    }
  ];

  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-yellow-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20">
          <h1 className="text-6xl font-bold text-yellow-700 mb-10">Publications</h1>
          
          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-yellow-600 min-w-[3rem]">[{pub.id}]</span>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
                      "{pub.title}"
                    </p>
                    <p className="text-lg text-gray-700">
                      <span className="font-semibold italic">{pub.journal}</span>
                      {pub.volume && (
                        <>
                          , vol. {pub.volume}
                          {pub.issue && `, no. ${pub.issue}`}
                        </>
                      )}
                      {pub.pages && `, p. ${pub.pages}`}
                      , {pub.year}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import SideNav from "../components/SideNav";
import HeaderBar from "../components/HeaderBar";

export default function Contact() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-56 min-h-screen bg-pink-50">
        <HeaderBar />
        <div className="pt-24 px-10 md:px-20">
          <h1 className="text-6xl font-bold text-pink-700 mb-10">Contact</h1>
          
          {/* Contact Information */}
          <div className="mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              Department of Biotechnology and Bioengineering
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              Chonnam National University, Gwangju 61186, Korea
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              Engineering Building 5, 77 Yongbong-ro, Yongbong-dong, Buk-gu, Gwangju
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              📧 <a href="mailto:cmkim@jnu.ac.kr" className="text-pink-600 hover:underline">cmkim@jnu.ac.kr</a>
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d126.903!3d35.173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c2f35496ec9%3A0xb35a91c48eac3850!2s5WH6%2B6C%20Gwangju!5e0!3m2!1sen!2skr!4v1730001234567!5m2!1sen!2skr"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chonnam National University Engineering Building 5 Location (Plus Code: 5WH6+6C Gwangju)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

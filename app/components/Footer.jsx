import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-10 mt-0">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* معلومات عامة */}
        <div>
          <h3 className="text-2xl font-bold mb-3">100 Restaurant & Cafe</h3>
          <p className="text-gray-400">
            استمتع بأجواءنا الفريدة، مع أفضل تجربة طعام وقهوة في عمّان.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="text-xl font-semibold mb-4">روابط</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-primary transition">الرئيسية</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition">قائمة الطعام</Link></li>
            <li><Link href="tel:+962 7 9292 8000" className="hover:text-primary transition">الحجز</Link></li>
            <li><Link href="/#contact" className="hover:text-primary transition">تواصل معنا</Link></li>
          </ul>
        </div>

        {/* تواصل اجتماعي */}
        <div>
          <h4 className="text-xl font-semibold mb-4">تابعنا</h4>
          <div className="flex space-x-6 rtl:space-x-reverse text-2xl">
            <a href="https://www.instagram.com/100.restucafe?igsh=MXc4d2lzdDhza3VtOA==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1Bvqd3Q5UF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://wa.me/962792928000" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} JHWepDev. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;

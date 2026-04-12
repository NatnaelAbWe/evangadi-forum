import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import insiro from "../assets/insiro_logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={insiro}
                alt="logo"
                className="w-40 h-20 brightness-100 invert"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs md:max-w-none">
              Elevating the developer experience through collaborative knowledge
              sharing. Built for the community, by the community.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Developer Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-orange-400 transition-colors"
                >
                  Company News{" "}
                  <span className="bg-orange-500 text-[10px] text-white px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Account
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors font-medium text-blue-400"
                >
                  Join Insiro (Sign Up)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Rules
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-6 mb-6 text-2xl">
              <a
                href="#"
                className="hover:text-blue-400 transition-transform hover:-translate-y-1"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-white transition-transform hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="hover:text-blue-600 transition-transform hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition-transform hover:-translate-y-1"
              >
                <FaFacebook />
              </a>
            </div>
            <p className="text-xs text-gray-500 leading-tight">
              Subscribe to our newsletter for the latest tech updates.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-gray-500 text-center md:text-left">
          <p>© {currentYear} INSIRO INC. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Gugi } from "next/font/google";
import Link from "next/link";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gugi", // opsional kalau kamu mau pakai di Tailwind
});

const Header = () => {
  return (
    <header className="bg-white text-black border-b border-solid border-gray-200">
      <div
        className="container mx-auto flex justify-between items-center"
        style={{ maxWidth: "1440px" }}
      >
        <div className="logo-container ">
          <a href="/" className="">
            <h1
              className={`${gugi.className} text-4xl font-extrabold text-white bg-black px-8 py-3 `}
              style={{ textShadow: "4px 1px 0px rgba(25,191,218,0.97)" }}
            >
              FW
            </h1>
          </a>
        </div>
        <nav className="flex">
          <ul className="flex gap-15 items-center">
            <li>
              <Link href="/" className="text-black hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-black hover:text-gray-500">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-black hover:text-gray-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-gray-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-gray-500">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="socials">
          <ul className="flex gap-10 socials-list items-center justify-center">
            <li className="text-black w-10 h-10 social-item" >
              <Link href="https://www.instagram.com/" target="_blank" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM17,6c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.757,0 -5,-2.243 -5,-5c0,-2.757 2.243,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li className="text-black w-10 h-10">
              <Link href="https://www.facebook.com/" target="_blank" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M16,3h-8c-2.75,0 -5,2.25 -5,5v8c0,2.75 2.25,5 5,5h3v-7h-1c-0.553,0 -1,-0.448 -1,-1c0,-0.552 0.447,-1 1,-1h1v-1c0,-1.654 1.346,-3 3,-3h1c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1h-1c-0.552,0 -1,0.449 -1,1v1h2c0.553,0 1,0.448 1,1c0,0.552 -0.447,1 -1,1h-2v7h3c2.75,0 5,-2.25 5,-5v-8c0,-2.75 -2.25,-5 -5,-5z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
            <li className="text-black w-10 h-10">
              <Link href="https://www.tiktok.com/" target="_blank" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0,0,256,256"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M18,3h-12c-1.654,0 -3,1.346 -3,3v12c0,1.654 1.346,3 3,3h12c1.654,0 3,-1.346 3,-3v-12c0,-1.654 -1.346,-3 -3,-3zM16,12c-0.605,0 -1.332,-0.266 -2,-0.714v2.714c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.062 0.57,-2.055 1.488,-2.591c0.478,-0.278 1.09,-0.117 1.368,0.359c0.278,0.477 0.117,1.089 -0.359,1.367c-0.311,0.182 -0.497,0.506 -0.497,0.865c0,0.552 0.449,1 1,1c0.551,0 1,-0.448 1,-1v-6c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1c0,1.005 1.471,2 2,2c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

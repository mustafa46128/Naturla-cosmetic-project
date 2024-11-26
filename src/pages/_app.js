import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

const melodrama = localFont({
  src: [
    { path: "./fonts/melodrama/Melodrama-Regular.woff", weight: "400" },
    { path: "./fonts/melodrama/Melodrama-Medium.woff", weight: "500" },
  ],
  variable: "--font-melodrama",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={` ${poppins.variable} ${poppins.className} ${melodrama.variable} ${melodrama.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}

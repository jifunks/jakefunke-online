import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ubuntu.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

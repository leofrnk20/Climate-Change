import { JetBrains_Mono  } from "next/font/google";
import "./globals.css"

//Components
import Header from "../components/Header"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],
 weight: ["100","200","300","400","500","600","700","800"],
 variable:'--font-jetbrainsMono'
 });

export const metadata = {
  title: "The Climate Change",
  description: "We have no more time to talk...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        {children}</body>
    </html>
  );
}

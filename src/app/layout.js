import "./globals.css";
import { Montserrat } from "next/font/google";
import { AppProvider } from "@/context/appContext";
const montserrat = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Lautaro Aguilar",
  description: "Este es mi portfolio, ojalá refleje mis habilidades en el desarrollo frontend.",
  
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </AppProvider>
  );
}

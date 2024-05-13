import "./globals.css";
import { DM_Mono } from "next/font/google";
import { AppProvider } from "@/context/appContext";
const dm_mono = DM_Mono({
  weight: ["400", "500"],
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
        <body className={dm_mono.className}>{children}</body>
      </html>
    </AppProvider>
  );
}

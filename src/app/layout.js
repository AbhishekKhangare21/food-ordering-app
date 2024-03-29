import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import { AppProvider } from "../components/appContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pizza Zone",
  description: "Generated pizza zone and co.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto px-4">
          <AppProvider>
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}

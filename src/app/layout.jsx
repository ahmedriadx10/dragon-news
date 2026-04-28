import {  Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";




const poppins=Poppins({
  variable:'--poppins-font',
  subsets:['latin'],
  weight:['400','500','600','700','800','900']
})



export const metadata = {
  title: "Dragon News",
  description: "Dragon News is most popular authentic news provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`min-h-full ${poppins.className}` }>{children}

        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}

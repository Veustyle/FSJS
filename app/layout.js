import "./css/globals.scss";


export const metadata = {
  title: "FSJS",
  description: "Collaborating Project",
}


export default function RootLayout({ children }) {
  return <html lang="fr">


      <body>
        {children}
      </body>


    </html>
}

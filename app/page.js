import prisma from "@/lib/prisma";

export default async function Home() {
  const test = await prisma.test.findMany()



  return <main>

    <h1>Projet commun FSJS</h1>


    <h2>Lire le README !!!</h2>


    <h3>Dépot origin</h3>
      <p>https://github.com/Veustyle/FSJS.git</p>


    {test.length > 0 && test.map(t => <h4 key={t.name}>{t.name}</h4>)}

    </main>
}

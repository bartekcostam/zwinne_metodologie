import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zwinne metodologie</title>
        <meta name="description" content="Projekt symulacji SCRUM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="flex flex-col w-full h-screen">
          <div className="bg-blue-600 w-full h-[100px]">
            <h1 className="bg-white text-center">Zwinne metodologie</h1>
          </div>

          <div className="flex w-full h-full bg-green-500">
            <div className="bg-red-500 w-[15%] h-full justify-center">
              <div className="w-full text-center text-white flex flex-col">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </div>
            </div>

            <div className="bg-gray-200 w-[85%] h-full">
              <p>Template domyślnej strony startowej</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

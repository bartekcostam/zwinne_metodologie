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
        <h1>Zwinne metodologie</h1>
        <p>domyślna strona startowa</p>

        <p>Mapka do wrzucenia do eventow</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810984895!2d-0.24167872150981398!3d51.52877183996512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1652598086347!5m2!1spl!2spl" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </main>
    </div>
  )
}

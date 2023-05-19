import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="PALABRAAA" />
        <p className="description">
          Que no se puede evitar, eludir o detener.
          Ejemplo de uso: el inexorable paso del tiempo
        </p>
      </main>

      <Footer />
    </div>
  )
}

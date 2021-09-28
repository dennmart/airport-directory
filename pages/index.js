import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airport Directory</title>
        <meta name="description" content="Airport Directory - Powered by Airport Gap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-5xl font-extrabold text-center">
          Airport Directory
        </h1>
      </main>
    </div>
  )
}

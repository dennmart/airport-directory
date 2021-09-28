import Head from 'next/head'
import Link from 'next/link'

export default function Airport({ airport }) {
  return (
    <div>
      <Head>
        <title>Airport Details - {airport.attributes.name}</title>
        <meta name="description" content="Airport Directory - Powered by Airport Gap" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className="bg-gradient-to-r from-green-500 to-green-600 border-b-2 border-green-700 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-extrabold text-center text-white">
            Airport Details
          </h1>
        </div>
      </header>

      <main className="py-4 md:py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Airport Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{airport.attributes.name}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Airport Code (IATA)</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{airport.attributes.iata}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Airport Code (ICAO)</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{airport.attributes.icao}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{airport.attributes.city}, {airport.attributes.country}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Time Zone</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{airport.attributes.timezone}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Coordinates</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a href={`https://www.google.com/maps?q=${airport.attributes.latitude},${airport.attributes.longitude}`} className="text-indigo-600 hover:text-indigo-900" target="_blank" rel="noopener noreferrer">
                      {airport.attributes.latitude}, {airport.attributes.longitude}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="py-4">
            <Link href="/">
              <a className="text-lg font-bold text-indigo-600 hover:text-indigo-900">
                &#8592; Back to directory
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://airportgap.dev-tester.com/api/airports/${params.id}`)
  const { data } = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { airport: data },
  }
}

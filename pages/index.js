import Head from 'next/head'
import Link from 'next/link'

export default function Home({ airports }) {
  return (
    <div className="bg-gray-200 h-full">
      <Head>
        <title>Airport Directory</title>
        <meta name="description" content="Airport Directory - Powered by Airport Gap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-green-500 to-green-600 border-b-2 border-green-700 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-extrabold text-center text-white">
            Airport Directory
          </h1>
        </div>
      </header>

      <main className="py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Airport Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {airports.map((airport, airportIdx) => (
                        <tr key={airport.id} className={airportIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{airport.attributes.iata}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{airport.attributes.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{airport.attributes.city}, {airport.attributes.country}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link href={`/airport/${airport.id}`}>
                              <a className="text-indigo-600 hover:text-indigo-900">View Details</a>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://airportgap.dev-tester.com/api/airports')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { airports: data.data },
  }
}

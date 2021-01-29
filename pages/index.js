import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen bg-gray-50">
        <section className="p-4 bg-white m-4 rounded-md shadow-sm">
          <h3 className="text-4xl mb-4">Lorem, ipsum.</h3>
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md">
            Subscribe 🌕
          </button>
        </section>
      </main>
    </div>
  );
}

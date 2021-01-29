import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen bg-yellow-100">
        <section className="p-4 bg-white m-4 rounded-md">
          <h3 className="text-2xl">Next with PWA</h3>
        </section>
      </main>
    </div>
  );
}

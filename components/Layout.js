import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-blue-50 p-4 sm:p-8">
        {children}
      </main>
    </>
  );
}

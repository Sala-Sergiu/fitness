import Footer from "@/components/Footer";
import Naviagtion from "@/components/Navigation";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <nav>
        <Naviagtion />
      </nav>
      <main className="flex-1">
        <Layout />
      </main>
      <footer className="bg-gray-700 text-white p-4">
        <Footer />
      </footer>
    </div>
  );
}

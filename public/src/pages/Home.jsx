import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

function Home() {
  

  return (
    <>
      <div className="container align-items-center">
        <Header/>
        <MainSection />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default Home;

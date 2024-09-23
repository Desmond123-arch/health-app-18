import CTASection from "./_components/hero/cta";
import Hero from "./_components/hero/hero";
import WellKids from "./_components/hero/what";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <WellKids />
      <CTASection />
    </div>
  );
};

export default Home;

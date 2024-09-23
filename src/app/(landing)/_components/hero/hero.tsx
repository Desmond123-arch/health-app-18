import { CtaButton } from "./cta-button";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 overflow-x-hidden">
      <div
        className="relative rounded-lg overflow-hidden bg-cover bg-center h-[500px] max-w-5xl mx-auto"
        style={{
          backgroundImage:
            "url('https://cdn.usegalileo.ai/sdxl10/5e42e715-20cf-405b-a14f-ddc0c97b3bff.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover the fun in wellness
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Join Wellness Kids to learn about health, nutrition, and fun
            activities for a happier you!
          </p>
          <div className="">
            <CtaButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-dark-blue via-black to-dark-blue overflow-hidden flex justify-center items-center w-full">
      <div className="absolute inset-0 overflow-hidden -z-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="container px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen w-full">
        <div className="text-center lg:text-left ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-raleway leading-tight">
            Trusted Multi-Chain
            <span className="text-primary block font-raleway">
              DEX Platform
            </span>
          </h1>
          <p className="text-gray-400 text-lg mt-4">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            <Button className="bg-primary text-black rounded-full px-6 py-3 shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
              Connect Wallet
            </Button>
            <Button
              className="border-2 border-primary text-primary rounded-full px-6 py-3 shadow-lg hover:bg-primary hover:text-black transition-transform transform hover:scale-105"
              variant="outline"
            >
              Trade Crypto
            </Button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 w-full max-w-md lg:max-w-2xl">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full blur-3xl opacity-30 -z-10"></div>
            <img
              src="src/assets/golden-planet.jpg"
              alt="Golden Planet"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

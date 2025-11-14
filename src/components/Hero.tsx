interface HeroProps {
  scrollY: number;
}

function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div
          className="max-w-4xl transition-all duration-300"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Creative Designer
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Crafting beautiful digital experiences that inspire and engage
          </p>
          <a
            href="#projects"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{
          opacity: 1 - scrollY / 300,
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

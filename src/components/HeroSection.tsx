import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in border border-background/20">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-background text-sm font-medium">
              Toko Perlengkapan Santri Terpercaya
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Lengkapi Perjalanan
            <span className="block text-gold">Spiritual Anda</span>
          </h1>

          {/* Description */}
          <p className="text-background/90 text-lg md:text-xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Temukan koleksi lengkap perlengkapan ibadah, kitab, busana muslim, dan 
            kebutuhan santri berkualitas dengan harga terbaik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              Jelajahi Produk
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Lihat Kategori
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-background/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold">500+</p>
              <p className="text-background/80 text-sm md:text-base">Produk</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold">10K+</p>
              <p className="text-background/80 text-sm md:text-base">Pelanggan</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold">4.9</p>
              <p className="text-background/80 text-sm md:text-base">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-background/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

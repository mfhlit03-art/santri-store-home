import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    role: "Santri Pondok Pesantren",
    content: "Alhamdulillah, produk-produk di SantriStore sangat berkualitas. Kitab yang saya beli kondisinya sangat baik dan pengiriman cepat.",
    rating: 5,
    avatar: "AF",
  },
  {
    id: 2,
    name: "Ustadzah Fatimah",
    role: "Pengajar TPQ",
    content: "Saya selalu membeli perlengkapan mengajar di sini. Harga terjangkau dan kualitas terjamin. Sangat direkomendasikan!",
    rating: 5,
    avatar: "UF",
  },
  {
    id: 3,
    name: "Haji Abdullah",
    role: "Jamaah Pengajian",
    content: "Sajadah dan tasbih yang saya beli sangat nyaman digunakan. Pelayanan ramah dan responsif. Jazakallahu khairan!",
    rating: 5,
    avatar: "HA",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-emerald-light relative overflow-hidden">
      {/* Islamic Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Testimoni
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mt-2 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-background/80 text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Dengarkan pengalaman 
            mereka bersama SantriStore.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-background/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-background/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold mb-4" />

              {/* Content */}
              <p className="text-background/90 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-foreground font-display font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-background font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-background/70 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

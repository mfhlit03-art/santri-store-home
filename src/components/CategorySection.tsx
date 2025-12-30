import { BookOpen, Shirt, CircleDot, Paintbrush } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Kitab & Al-Quran",
    description: "Koleksi kitab kuning, Al-Quran, dan buku-buku Islami",
    count: "150+ produk",
    color: "from-emerald to-emerald-light",
  },
  {
    icon: Shirt,
    title: "Busana Muslim",
    description: "Jubah, koko, sarung, dan perlengkapan busana lainnya",
    count: "200+ produk",
    color: "from-gold to-gold-light",
  },
  {
    icon: CircleDot,
    title: "Perlengkapan Ibadah",
    description: "Tasbih, sajadah, mukena, dan aksesoris ibadah",
    count: "100+ produk",
    color: "from-primary to-emerald-light",
  },
  {
    icon: Paintbrush,
    title: "Kaligrafi & Seni",
    description: "Perlengkapan kaligrafi dan karya seni Islami",
    count: "50+ produk",
    color: "from-gold to-primary",
  },
];

const CategorySection = () => {
  return (
    <section id="kategori" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Kategori
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Temukan Kebutuhan Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Jelajahi berbagai kategori produk berkualitas untuk menunjang 
            perjalanan spiritual dan kehidupan sehari-hari Anda.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>

              {/* Product Count */}
              <span className="text-gold text-sm font-medium">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

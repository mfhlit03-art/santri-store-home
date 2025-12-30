import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";

import productPeci from "@/assets/product-peci.jpg";
import productKitab from "@/assets/product-kitab.jpg";
import productTasbih from "@/assets/product-tasbih.jpg";
import productJubah from "@/assets/product-jubah.jpg";
import productSajadah from "@/assets/product-sajadah.jpg";
import productKaligrafi from "@/assets/product-kaligrafi.jpg";

const products = [
  {
    id: 1,
    name: "Peci Hitam Premium",
    price: 85000,
    originalPrice: 120000,
    image: productPeci,
    rating: 4.9,
    reviews: 128,
    category: "Busana",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Kitab Kuning Fiqih",
    price: 150000,
    originalPrice: null,
    image: productKitab,
    rating: 4.8,
    reviews: 89,
    category: "Kitab",
    badge: null,
  },
  {
    id: 3,
    name: "Tasbih Kayu 99 Butir",
    price: 45000,
    originalPrice: 60000,
    image: productTasbih,
    rating: 4.9,
    reviews: 256,
    category: "Ibadah",
    badge: "Diskon 25%",
  },
  {
    id: 4,
    name: "Jubah Putih Premium",
    price: 275000,
    originalPrice: 350000,
    image: productJubah,
    rating: 4.7,
    reviews: 67,
    category: "Busana",
    badge: "Terbaru",
  },
  {
    id: 5,
    name: "Sajadah Turki Premium",
    price: 185000,
    originalPrice: null,
    image: productSajadah,
    rating: 4.9,
    reviews: 312,
    category: "Ibadah",
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Set Kaligrafi Lengkap",
    price: 120000,
    originalPrice: 150000,
    image: productKaligrafi,
    rating: 4.6,
    reviews: 45,
    category: "Seni",
    badge: null,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const ProductSection = () => {
  return (
    <section id="produk" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Produk Unggulan
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Koleksi Terbaik Kami
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Lihat Semua Produk
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                  <Heart className="w-5 h-5 text-foreground" />
                </button>

                {/* Quick Add Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="hero" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Tambah ke Keranjang
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <span className="text-gold text-xs font-medium uppercase tracking-wider">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-sm font-medium text-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews} ulasan)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground text-sm line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

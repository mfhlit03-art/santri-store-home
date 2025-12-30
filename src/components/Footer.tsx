import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                Dapatkan Info & Promo Terbaru
              </h3>
              <p className="text-background/70">
                Daftar newsletter kami untuk mendapatkan update produk dan promo eksklusif.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 lg:w-80 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-gold transition-colors"
              />
              <Button variant="gold" size="lg" className="gap-2">
                <Send className="w-4 h-4" />
                Langganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Santri<span className="text-gold">Store</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Toko online terpercaya untuk perlengkapan santri dan kebutuhan ibadah 
              dengan kualitas terbaik dan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors group">
                <Facebook className="w-5 h-5 text-background group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors group">
                <Instagram className="w-5 h-5 text-background group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-gold transition-colors group">
                <Youtube className="w-5 h-5 text-background group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Produk", "Kategori", "Promo", "Blog", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Layanan Pelanggan</h4>
            <ul className="space-y-3">
              {["Cara Belanja", "Pengiriman", "Pengembalian", "Syarat & Ketentuan", "Kebijakan Privasi", "Hubungi Kami"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Jl. Pesantren No. 123, Kota Santri, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">info@santristore.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-background/70">Senin - Sabtu: 08.00 - 17.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} SantriStore. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center justify-center gap-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-6 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

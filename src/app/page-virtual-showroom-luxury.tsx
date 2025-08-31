"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Heart,
  Eye,
  Calendar,
  Gauge,
  Settings,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Camera,
  Download,
  Share2,
  Fuel,
  Car,
  Send,
  Wrench,
  Coffee,
  Play,
  Home,
} from "lucide-react";

// Custom SVG Components for unique design
const SubaruStarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

const LuxuryCarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
    <path d="M6 20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM26 20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8l2.5 6h15L26 8H6zM4 6h20c.55 0 1 .45 1 1 0 .17-.04.33-.12.47L21.5 16H10.5L7.12 7.47C7.04 7.33 7 7.17 7 7c0-.55.45-1 1-1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
  </svg>
);

const VintageOrnament = () => (
  <svg
    width="60"
    height="20"
    viewBox="0 0 60 20"
    fill="currentColor"
    className="text-primary-400"
  >
    <path d="M30 0c-8.284 0-15 2.239-15 5s6.716 5 15 5 15-2.239 15-5-6.716-5-15-5zm0 8c-6.627 0-12-1.343-12-3s5.373-3 12-3 12 1.343 12 3-5.373 3-12 3z" />
    <circle cx="10" cy="10" r="2" />
    <circle cx="50" cy="10" r="2" />
    <path d="M0 10h8m44 0h8" />
  </svg>
);

// Sample car data with more detailed information
const sampleCars = [
  {
    id: 1,
    brand: "Subaru",
    model: "Forester Premium",
    year: 2023,
    price: 32500,
    mileage: 15000,
    fuel: "Gasolina",
    transmission: "CVT Lineartronic",
    power: "150 CV",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605515298946-d062f2e9cd28?w=800&h=600&fit=crop",
    ],
    features: [
      "Symmetrical AWD",
      "EyeSight Driver Assist",
      "X-Mode",
      "Teto Panorâmico",
      "Keyless Access",
    ],
    condition: "Semi-novo",
    warranty: "3 anos",
    category: "SUV",
    description:
      "O Forester Premium combina robustez e elegância, ideal para aventuras urbanas e rurais.",
    rating: 4.8,
  },
  {
    id: 2,
    brand: "Subaru",
    model: "Outback Touring",
    year: 2024,
    price: 38900,
    mileage: 8500,
    fuel: "Gasolina",
    transmission: "CVT Lineartronic",
    power: "175 CV",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
    ],
    features: [
      "Symmetrical AWD",
      "EyeSight Driver Assist",
      "X-Mode",
      "Navegação GPS",
      "Harman Kardon",
    ],
    condition: "Semi-novo",
    warranty: "3 anos",
    category: "Station Wagon",
    description: "Elegância familiar com capacidades off-road excecionais.",
    rating: 4.9,
  },
  {
    id: 3,
    brand: "Subaru",
    model: "Impreza Sport",
    year: 2024,
    price: 28900,
    mileage: 2000,
    fuel: "Gasolina",
    transmission: "CVT Lineartronic",
    power: "136 CV",
    images: [
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    features: [
      "Symmetrical AWD",
      "EyeSight Driver Assist",
      "Apple CarPlay",
      "LED Steering Responsive",
    ],
    condition: "Novo",
    warranty: "5 anos",
    category: "Hatchback",
    description: "Compacto desportivo com a segurança e qualidade Subaru.",
    rating: 4.7,
  },
];

export default function VirtualShowroomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [yearRange, setYearRange] = useState([2020, 2024]);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [favorites, setFavorites] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter cars based on search criteria
  const filteredCars = sampleCars.filter((car) => {
    const matchesSearch = car.model
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || car.category === selectedCategory;
    const matchesPrice =
      car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];

    return matchesSearch && matchesCategory && matchesPrice && matchesYear;
  });

  const categories = [
    "Todos",
    "SUV",
    "Station Wagon",
    "Hatchback",
    "Crossover",
  ];

  const toggleFavorite = (carId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(carId)) {
      newFavorites.delete(carId);
    } else {
      newFavorites.add(carId);
    }
    setFavorites(newFavorites);
  };

  // Function to handle phone calls
  const handleCall = () => {
    window.open("tel:+351255000000", "_self");
  };

  // Function to handle email
  const handleEmail = () => {
    window.open("mailto:atelier@automeinedo.com", "_self");
  };

  // Function to scroll to collection
  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to heritage
  const scrollToHeritage = () => {
    document.getElementById("heritage")?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to contact
  const scrollToContact = () => {
    document.getElementById("atelier")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <header className="bg-white border-b border-neutral-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+351 255 000 000</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>atelier@automeinedo.com</span>
                </div>
              </div>
              <div className="text-xs opacity-90">
                Seg-Sex: 9:00-19:00 | Sáb: 9:00-17:00
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <SubaruStarIcon />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  Automeinedo
                </h1>
                <p className="text-sm text-primary-600 font-medium">
                  Concessionário Oficial Subaru
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Início
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/explorar"
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Explorar
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/servicos"
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Serviços
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/contacto"
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Contacto
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/contacto"
              className="hidden lg:flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-200">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/explorar"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explorar
                </Link>
                <Link
                  href="/servicos"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/contacto"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in">
              <div className="inline-flex items-center space-x-3 bg-primary-50 border border-primary-200 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-primary-700 text-sm font-medium">
                  Concessionário Oficial Subaru desde 2001
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="block text-neutral-900">Subaru</span>
                  <span className="block gradient-text">Premium</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed max-w-lg">
                Descubra a engenharia japonesa de excelência.
                <strong className="text-neutral-900">
                  {" "}
                  Veículos cuidadosamente selecionados
                </strong>{" "}
                para os mais exigentes.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    25+
                  </div>
                  <div className="text-neutral-500 text-sm font-medium">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    2.5K+
                  </div>
                  <div className="text-neutral-500 text-sm font-medium">
                    Clientes Satisfeitos
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    98%
                  </div>
                  <div className="text-neutral-500 text-sm font-medium">
                    Taxa de Satisfação
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/explorar"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Explorar Todos os Veículos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/contacto"
                  className="border-2 border-neutral-300 hover:border-primary-500 text-neutral-700 hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contactar</span>
                </Link>
              </div>
            </div>

            {/* Right Content - Featured Car */}
            <div className="relative float-gentle">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden mb-6 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop"
                    alt="Subaru Forester"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      Subaru Forester Premium
                    </h3>
                    <div className="text-2xl font-bold gradient-text">
                      €32.500
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      2024 • 15.000 km
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setSelectedCar({
                        id: "featured",
                        brand: "Subaru",
                        model: "Forester Premium",
                        year: 2024,
                        price: 32500,
                        mileage: "15.000 km",
                        fuel: "Hybrid",
                        transmission: "CVT",
                        condition: "Novo",
                        category: "SUV",
                        description:
                          "O Subaru Forester Premium 2024 combina aventura e conforto...",
                        features: [
                          "Sistema AWD",
                          "Teto panorâmico",
                          "Navegação GPS",
                        ],
                        images: ["/images/forester-hero.jpg"],
                      })
                    }
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-40 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Collection Section */}
      <section id="collection" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 text-sm font-medium">
                Nossa Coleção
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
              Veículos <span className="gradient-text">Disponíveis</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Cada veículo da nossa coleção é rigorosamente inspecionado e
              certificado para garantir a máxima qualidade.
            </p>
          </div>

          {/* Elegant Search & Filter */}
          <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 shadow-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar modelo..."
                  className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                />
              </div>

              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center space-x-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Filter className="w-5 h-5" />
                <span>Filtros Avançados</span>
              </button>
            </div>

            {/* Advanced Filters */}
            {isFilterOpen && (
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-700">
                      Preço: €{priceRange[0].toLocaleString()} - €
                      {priceRange[1].toLocaleString()}
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="1000"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-neutral-700">
                      Ano: {yearRange[0]} - {yearRange[1]}
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="2018"
                        max="2024"
                        value={yearRange[1]}
                        onChange={(e) =>
                          setYearRange([yearRange[0], parseInt(e.target.value)])
                        }
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-neutral-600">
              <span className="text-2xl font-bold text-primary-600">
                {filteredCars.length}
              </span>
              <span className="ml-2 text-lg">veículos encontrados</span>
            </div>
          </div>

          {/* Enhanced Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-2"
              >
                {/* Car Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {car.condition}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
                      favorites.has(car.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/90 backdrop-blur-sm text-neutral-600 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(car.id) ? "fill-current" : ""
                      }`}
                    />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Car Details */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-neutral-500 text-sm">
                        {car.year} • {car.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">
                        €{car.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {car.mileage.toLocaleString()} km
                      </div>
                    </div>
                  </div>

                  {/* Key specs */}
                  <div className="flex items-center space-x-4 text-sm text-neutral-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Gauge className="w-4 h-4" />
                      <span>{car.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Fuel className="w-4 h-4" />
                      <span>{car.fuel}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button
                      onClick={handleCall}
                      className="flex items-center justify-center w-12 h-12 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200"
                    >
                      <Phone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                Nenhum veículo encontrado
              </h3>
              <p className="text-neutral-500 mb-6">
                Ajuste os filtros para encontrar o veículo perfeito
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                  setPriceRange([0, 50000]);
                  setYearRange([2020, 2024]);
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-50 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-luxe">
            <div className="sticky top-0 bg-neutral-50 border-b border-primary-200/30 p-6 flex justify-between items-center">
              <h2 className="typography-luxury text-3xl text-neutral-800">
                {selectedCar.brand} {selectedCar.model}
              </h2>
              <button
                onClick={() => setSelectedCar(null)}
                className="p-2 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-8">
                <div className="aspect-video bg-neutral-200 overflow-hidden">
                  <img
                    src={selectedCar.images[currentImageIndex]}
                    alt={`${selectedCar.brand} ${selectedCar.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {selectedCar.images.length > 1 && (
                  <div className="absolute inset-y-0 left-4 right-4 flex justify-between items-center">
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0
                            ? selectedCar.images.length - 1
                            : currentImageIndex - 1
                        )
                      }
                      className="p-2 bg-neutral-50/90 hover:bg-neutral-50 transition-colors shadow-elegant"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === selectedCar.images.length - 1
                            ? 0
                            : currentImageIndex + 1
                        )
                      }
                      className="p-2 bg-neutral-50/90 hover:bg-neutral-50 transition-colors shadow-elegant"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>

              {/* Car Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="typography-luxury text-2xl text-neutral-800 mb-4">
                    Especificações
                  </h3>
                  <div className="space-y-3 font-inter">
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Ano:</span>
                      <span className="font-semibold">{selectedCar.year}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Quilometragem:</span>
                      <span className="font-semibold">
                        {selectedCar.mileage.toLocaleString()} km
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Combustível:</span>
                      <span className="font-semibold">{selectedCar.fuel}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Transmissão:</span>
                      <span className="font-semibold">
                        {selectedCar.transmission}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Potência:</span>
                      <span className="font-semibold">{selectedCar.power}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Garantia:</span>
                      <span className="font-semibold">
                        {selectedCar.warranty}
                      </span>
                    </div>
                  </div>

                  <h4 className="typography-luxury text-xl text-neutral-800 mt-6 mb-3">
                    Equipamentos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCar.features.map(
                      (feature: string, index: number) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 text-sm font-semibold uppercase tracking-wide"
                        >
                          {feature}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <div className="card-refined p-6 shadow-elegant">
                    <div className="text-center mb-6">
                      <div className="typography-luxury text-3xl text-primary-600 mb-2">
                        €{selectedCar.price.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(selectedCar.rating)
                                ? "text-accent-500 fill-current"
                                : "text-neutral-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-neutral-500 ml-2 font-inter">
                          ({selectedCar.rating}/5)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full btn-vintage">
                        <Phone className="w-4 h-4 mr-2" />
                        Contactar Vendedor
                      </button>
                      <button className="w-full bg-accent-600 text-neutral-50 py-3 hover:bg-accent-700 transition-colors uppercase tracking-wide font-semibold">
                        <Calendar className="w-4 h-4 mr-2 inline" />
                        Agendar Test Drive
                      </button>
                      <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-neutral-50 py-3 transition-colors uppercase tracking-wide font-semibold">
                        <Download className="w-4 h-4 mr-2 inline" />
                        Descarregar Brochura
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <h5 className="font-semibold text-neutral-800 mb-2 font-inter">
                        Financiamento Disponível
                      </h5>
                      <p className="text-sm text-neutral-600 font-inter">
                        A partir de{" "}
                        <span className="font-bold">
                          €{Math.round(selectedCar.price / 60)}/mês
                        </span>
                        <br />
                        <span className="text-xs">
                          *Simulação para 60 meses, TAEG variável
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Elegant Heritage Section */}
      <section
        id="heritage"
        className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50 relative overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4 fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 text-sm font-medium">
                25 Anos de Excelência
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
              Nossa <span className="gradient-text">História</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Desde 1998, somos o concessionário oficial Subaru de confiança,
              oferecendo experiência incomparável e dedicação total aos nossos
              clientes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">25+</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Anos
              </h3>
              <p className="text-neutral-600 text-sm">de Experiência</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-xl font-bold text-white">2.5K+</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Clientes
              </h3>
              <p className="text-neutral-600 text-sm">Satisfeitos</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Satisfação
              </h3>
              <p className="text-neutral-600 text-sm">Garantida</p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                Prémios
              </h3>
              <p className="text-neutral-600 text-sm">Conquistados</p>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Concessionário Premiado
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Reconhecido oficialmente pela Subaru Europa pela excelência no
                atendimento e qualidade excepcional dos nossos serviços.
              </p>
              <div className="mt-6 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                  />
                ))}
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Confiança Total
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Mais de 2.500 famílias portuguesas confiam em nós há décadas
                para todas as suas necessidades automóveis Subaru.
              </p>
              <div className="mt-6 inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-700 text-sm font-medium">
                  Cliente Fidelizado
                </span>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Garantia Completa
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Todos os nossos veículos incluem garantia extendida oficial e
                programa completo de manutenção preventiva.
              </p>
              <div className="mt-6 inline-flex items-center space-x-2 bg-amber-50 px-3 py-1 rounded-full">
                <Shield className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-medium">
                  5 Anos Garantia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Contact Section */}
      <section
        id="atelier"
        className="py-20 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 text-sm font-medium">
                Visite o Nosso Showroom
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
              Encontre-nos em <span className="gradient-text">Meinedo</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para o receber no nosso showroom premium e
              ajudá-lo a encontrar o Subaru perfeito para a sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location Card */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      Localização Premium
                    </h3>
                    <div className="text-neutral-600 space-y-1 leading-relaxed">
                      <div className="font-medium">
                        Rua de Santo Tirso, Nº 348
                      </div>
                      <div>4620-848 Meinedo, Lousada</div>
                      <div>Porto, Portugal</div>
                    </div>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-primary-50 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-primary-700 text-sm font-medium">
                        Aberto Agora
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      Contacto Direto
                    </h3>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary-600">
                        +351 255 000 000
                      </div>
                      <div className="text-neutral-600">
                        atelier@automeinedo.com
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={handleCall}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Ligar Agora</span>
                      </button>
                      <button
                        onClick={handleEmail}
                        className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      Horários de Funcionamento
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">
                          Segunda - Sexta:
                        </span>
                        <span className="font-semibold text-neutral-900">
                          9:00 - 19:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Sábado:</span>
                        <span className="font-semibold text-neutral-900">
                          9:00 - 17:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Domingo:</span>
                        <span className="font-semibold text-amber-600">
                          Por marcação
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/contacto"
                  className="bg-primary-600 hover:bg-primary-700 text-white p-6 rounded-2xl transition-all duration-200 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  <Calendar className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <div className="font-semibold mb-1">Agendar Visita</div>
                  <div className="text-sm opacity-90">
                    Consulta personalizada
                  </div>
                </Link>
                <button
                  onClick={scrollToCollection}
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 p-6 rounded-2xl transition-all duration-200 text-center hover:-translate-y-1 group"
                >
                  <Eye className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <div className="font-semibold mb-1">Tour Virtual</div>
                  <div className="text-sm opacity-75">Explore online</div>
                </button>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Contacte-nos Hoje
                </h3>
                <p className="text-neutral-600">
                  Preencha o formulário e responderemos em 24 horas
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                />

                <select className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white">
                  <option>Como podemos ajudar?</option>
                  <option>Compra de veículo</option>
                  <option>Agendar test drive</option>
                  <option>Informações sobre financiamento</option>
                  <option>Serviços de manutenção</option>
                  <option>Informações gerais</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Conte-nos mais sobre o que procura..."
                  className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition-all duration-200 bg-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Enviar Mensagem</span>
                </button>

                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 text-sm font-medium">
                      Resposta garantida em 24h
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Enhanced Company Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <SubaruStarIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Automeinedo</h3>
                  <div className="text-primary-400 font-medium">
                    Concessionário Oficial Subaru
                  </div>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed max-w-md">
                Mais de 25 anos de experiência e dedicação à marca Subaru.
                Oferecemos qualidade, confiança e excelência no atendimento para
                encontrar o seu veículo ideal.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    25+
                  </div>
                  <div className="text-neutral-400 text-sm">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    2.5K+
                  </div>
                  <div className="text-neutral-400 text-sm">
                    Clientes Satisfeitos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-1">
                    98%
                  </div>
                  <div className="text-neutral-400 text-sm">
                    Taxa de Satisfação
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-neutral-300 text-sm">
                  Classificação 5★ dos nossos clientes
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-6">
                Navegação
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={scrollToCollection}
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Nossa Coleção</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToHeritage}
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Nossa História</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Serviços</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Contacto</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-6">
                Contacte-nos
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div className="text-neutral-300 text-sm leading-relaxed">
                    <div className="font-medium">
                      Rua de Santo Tirso, Nº 348
                    </div>
                    <div>4620-848 Meinedo, Lousada</div>
                    <div>Porto, Portugal</div>
                  </div>
                </div>

                <button
                  onClick={handleCall}
                  className="flex items-center space-x-3 hover:text-primary-300 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-primary-400" />
                  <div className="text-primary-300 font-semibold">
                    +351 255 000 000
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="flex items-center space-x-3 hover:text-primary-300 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-primary-400" />
                  <div className="text-neutral-300">
                    atelier@automeinedo.com
                  </div>
                </button>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-0.5" />
                  <div className="text-neutral-300 text-sm">
                    <div>Segunda - Sexta: 9:00 - 19:00</div>
                    <div>Sábado: 9:00 - 17:00</div>
                    <div className="text-amber-400">Domingo: Por marcação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-neutral-400 text-sm">
                © 2024 Automeinedo A.M. Lda • NIF: 516729900 • Todos os direitos
                reservados
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-neutral-400 text-sm">
                  Concessionário Oficial Subaru desde 2001
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-primary-400 fill-current animate-pulse" />
                  <span className="text-neutral-400 text-sm">
                    Feito com dedicação
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

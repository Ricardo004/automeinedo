"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  Heart,
  Phone,
  Eye,
  Calendar,
  Fuel,
  Settings,
  MapPin,
  Star,
  ArrowRight,
  Car,
  Menu,
  X,
  Clock,
  Mail,
  ChevronDown,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

// Custom SVG Components
const SubaruStarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

// Extended car database with more vehicles
const allCars = [
  {
    id: 1,
    brand: "Subaru",
    model: "Forester",
    variant: "Premium",
    year: 2024,
    price: 32500,
    originalPrice: 35000,
    mileage: "15.000 km",
    fuel: "Hybrid",
    transmission: "CVT",
    condition: "Novo",
    category: "SUV",
    location: "Meinedo",
    description: "O Subaru Forester Premium 2024 combina aventura e conforto.",
    features: [
      "Sistema AWD",
      "Teto panorâmico",
      "Navegação GPS",
      "Assistente de condução",
    ],
    images: ["/images/forester-hero.jpg"],
    rating: 4.8,
    dealerNotes: "Veículo em excelente estado",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    brand: "Subaru",
    model: "Outback",
    variant: "Limited",
    year: 2023,
    price: 28900,
    originalPrice: 31000,
    mileage: "8.500 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Semi-Novo",
    category: "Station Wagon",
    location: "Meinedo",
    description: "Subaru Outback Limited com tecnologia avançada.",
    features: [
      "Sistema AWD",
      "Bancos em pele",
      "Sistema multimédia",
      "Câmara traseira",
    ],
    images: ["/images/outback.jpg"],
    rating: 4.6,
    dealerNotes: "Único dono, revisões em dia",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    brand: "Subaru",
    model: "XV",
    variant: "Premium",
    year: 2023,
    price: 24500,
    originalPrice: 26500,
    mileage: "12.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Semi-Novo",
    category: "Crossover",
    location: "Meinedo",
    description: "Subaru XV Premium ideal para cidade e aventura.",
    features: [
      "Sistema AWD",
      "Controlo de tração",
      "Sensores de estacionamento",
    ],
    images: ["/images/xv.jpg"],
    rating: 4.4,
    dealerNotes: "Garantia estendida incluída",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 4,
    brand: "Subaru",
    model: "Impreza",
    variant: "Sport",
    year: 2022,
    price: 19900,
    originalPrice: 22000,
    mileage: "25.000 km",
    fuel: "Gasolina",
    transmission: "Manual",
    condition: "Semi-Novo",
    category: "Sedan",
    location: "Meinedo",
    description: "Subaru Impreza Sport com design dinâmico.",
    features: ["Sistema AWD", "Jantes 18'", "Sistema áudio premium"],
    images: ["/images/impreza.jpg"],
    rating: 4.3,
    dealerNotes: "Perfeito para jovens condutores",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    brand: "Subaru",
    model: "Legacy",
    variant: "Touring",
    year: 2023,
    price: 26800,
    originalPrice: 29000,
    mileage: "18.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Semi-Novo",
    category: "Sedan",
    location: "Meinedo",
    description: "Subaru Legacy Touring com elegância executiva.",
    features: ["Sistema AWD", "Interior premium", "Tecnologia avançada"],
    images: ["/images/legacy.jpg"],
    rating: 4.5,
    dealerNotes: "Ideal para executivos",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    brand: "Subaru",
    model: "BRZ",
    variant: "Sport",
    year: 2024,
    price: 35900,
    originalPrice: 38000,
    mileage: "2.500 km",
    fuel: "Gasolina",
    transmission: "Manual",
    condition: "Novo",
    category: "Desportivo",
    location: "Meinedo",
    description: "Subaru BRZ Sport - pura adrenalina e performance.",
    features: [
      "Motor boxer",
      "Suspensão desportiva",
      "Limited slip differential",
    ],
    images: ["/images/brz.jpg"],
    rating: 4.9,
    dealerNotes: "Edição limitada",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 7,
    brand: "Subaru",
    model: "Forester",
    variant: "X-Line",
    year: 2022,
    price: 27500,
    originalPrice: 30000,
    mileage: "32.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Semi-Novo",
    category: "SUV",
    location: "Meinedo",
    description: "Subaru Forester X-Line com estilo robusto.",
    features: ["Sistema AWD", "Proteções off-road", "Bagageira ampla"],
    images: ["/images/forester-xline.jpg"],
    rating: 4.4,
    dealerNotes: "Ideal para aventuras",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    brand: "Subaru",
    model: "Outback",
    variant: "Wilderness",
    year: 2024,
    price: 39900,
    originalPrice: 42000,
    mileage: "5.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Novo",
    category: "Station Wagon",
    location: "Meinedo",
    description: "Subaru Outback Wilderness - máxima capacidade off-road.",
    features: [
      "Sistema AWD",
      "Pneus off-road",
      "Proteção inferior",
      "Ganchos de reboque",
    ],
    images: ["/images/outback-wilderness.jpg"],
    rating: 4.7,
    dealerNotes: "Para os mais aventureiros",
    isNew: true,
    isFeatured: true,
  },
];

const brands = ["Todos", "Subaru"];
const categories = [
  "Todos",
  "SUV",
  "Sedan",
  "Station Wagon",
  "Crossover",
  "Desportivo",
];
const conditions = ["Todos", "Novo", "Semi-Novo"];
const fuels = ["Todos", "Gasolina", "Hybrid"];
const transmissions = ["Todos", "CVT", "Manual"];
const years = ["Todos", "2024", "2023", "2022"];

export default function ExplorarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedCondition, setSelectedCondition] = useState("Todos");
  const [selectedFuel, setSelectedFuel] = useState("Todos");
  const [selectedTransmission, setSelectedTransmission] = useState("Todos");
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [mileageRange, setMileageRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high, year-new, year-old, mileage
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [selectedCar, setSelectedCar] = useState<any>(null);

  // Filter cars based on all criteria
  const filteredCars = useMemo(() => {
    let filtered = allCars.filter((car) => {
      const matchesSearch =
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.variant.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "Todos" || car.brand === selectedBrand;
      const matchesCategory =
        selectedCategory === "Todos" || car.category === selectedCategory;
      const matchesCondition =
        selectedCondition === "Todos" || car.condition === selectedCondition;
      const matchesFuel = selectedFuel === "Todos" || car.fuel === selectedFuel;
      const matchesTransmission =
        selectedTransmission === "Todos" ||
        car.transmission === selectedTransmission;
      const matchesYear =
        selectedYear === "Todos" || car.year.toString() === selectedYear;
      const matchesPrice =
        car.price >= priceRange[0] && car.price <= priceRange[1];
      const carMileage = parseInt(car.mileage.replace(/\D/g, ""));
      const matchesMileage =
        carMileage >= mileageRange[0] && carMileage <= mileageRange[1];

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        matchesCondition &&
        matchesFuel &&
        matchesTransmission &&
        matchesYear &&
        matchesPrice &&
        matchesMileage
      );
    });

    // Sort cars
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "year-new":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        filtered.sort((a, b) => a.year - b.year);
        break;
      case "mileage":
        filtered.sort(
          (a, b) =>
            parseInt(a.mileage.replace(/\D/g, "")) -
            parseInt(b.mileage.replace(/\D/g, ""))
        );
        break;
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return b.rating - a.rating;
        });
    }

    return filtered;
  }, [
    searchTerm,
    selectedBrand,
    selectedCategory,
    selectedCondition,
    selectedFuel,
    selectedTransmission,
    selectedYear,
    priceRange,
    mileageRange,
    sortBy,
  ]);

  const toggleFavorite = (carId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(carId)) {
      newFavorites.delete(carId);
    } else {
      newFavorites.add(carId);
    }
    setFavorites(newFavorites);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("Todos");
    setSelectedCategory("Todos");
    setSelectedCondition("Todos");
    setSelectedFuel("Todos");
    setSelectedTransmission("Todos");
    setSelectedYear("Todos");
    setPriceRange([0, 50000]);
    setMileageRange([0, 100000]);
    setSortBy("featured");
  };

  const handleCall = () => {
    window.open("tel:+351255000000", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:atelier@automeinedo.com", "_self");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 9h-19h | Sáb: 9h-17h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <SubaruStarIcon />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-900">
                  Automeinedo
                </h1>
                <div className="text-primary-600 text-sm font-medium">
                  Explorar Veículos
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
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
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Explorar
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"></div>
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
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block text-neutral-600 hover:text-primary-600 transition-colors py-2"
                >
                  Início
                </Link>
                <Link
                  href="/explorar"
                  className="block text-primary-600 font-medium py-2"
                >
                  Explorar
                </Link>
                <Link
                  href="/servicos"
                  className="block text-neutral-600 hover:text-primary-600 transition-colors py-2"
                >
                  Serviços
                </Link>
                <Link
                  href="/contacto"
                  className="block text-neutral-600 hover:text-primary-600 transition-colors py-2"
                >
                  Contacto
                </Link>
                <Link
                  href="/contacto"
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors mt-4"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Filter Header */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-neutral-900">
                      Filtros
                    </h2>
                    <button
                      onClick={resetFilters}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Limpar</span>
                    </button>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">
                      Pesquisar
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Marca, modelo, variante..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white text-sm"
                      />
                    </div>
                  </div>

                  {/* Quick Filters */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-neutral-700 mb-3">
                      Filtros Rápidos
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() =>
                          setSelectedCondition(
                            selectedCondition === "Novo" ? "Todos" : "Novo"
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedCondition === "Novo"
                            ? "bg-primary-600 text-white"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        Novos
                      </button>
                      <button
                        onClick={() =>
                          setSelectedCondition(
                            selectedCondition === "Semi-Novo"
                              ? "Todos"
                              : "Semi-Novo"
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedCondition === "Semi-Novo"
                            ? "bg-primary-600 text-white"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        Semi-Novos
                      </button>
                      <button
                        onClick={() =>
                          setSelectedFuel(
                            selectedFuel === "Hybrid" ? "Todos" : "Hybrid"
                          )
                        }
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedFuel === "Hybrid"
                            ? "bg-green-600 text-white"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        Híbridos
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-4">
                    Categoria
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          {category}
                        </span>
                        <span className="text-xs text-neutral-400 ml-auto">
                          (
                          {
                            allCars.filter(
                              (car) =>
                                category === "Todos" ||
                                car.category === category
                            ).length
                          }
                          )
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-4">
                    Preço: €{priceRange[0].toLocaleString()} - €
                    {priceRange[1].toLocaleString()}
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer range-primary"
                    />
                    <div className="flex items-center space-x-2 text-xs text-neutral-500">
                      <span>€0</span>
                      <div className="flex-1 border-t border-neutral-200"></div>
                      <span>€50.000</span>
                    </div>
                  </div>
                </div>

                {/* Year Filter */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-4">
                    Ano
                  </h3>
                  <div className="space-y-2">
                    {years.map((year) => (
                      <label
                        key={year}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="year"
                          value={year}
                          checked={selectedYear === year}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          {year}
                        </span>
                        <span className="text-xs text-neutral-400 ml-auto">
                          (
                          {
                            allCars.filter(
                              (car) =>
                                year === "Todos" || car.year.toString() === year
                            ).length
                          }
                          )
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-4">
                    Combustível
                  </h3>
                  <div className="space-y-2">
                    {fuels.map((fuel) => (
                      <label
                        key={fuel}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="fuel"
                          value={fuel}
                          checked={selectedFuel === fuel}
                          onChange={(e) => setSelectedFuel(e.target.value)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          {fuel}
                        </span>
                        <span className="text-xs text-neutral-400 ml-auto">
                          (
                          {
                            allCars.filter(
                              (car) => fuel === "Todos" || car.fuel === fuel
                            ).length
                          }
                          )
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Transmission */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
                  <h3 className="text-sm font-semibold text-neutral-700 mb-4">
                    Transmissão
                  </h3>
                  <div className="space-y-2">
                    {transmissions.map((transmission) => (
                      <label
                        key={transmission}
                        className="flex items-center space-x-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="transmission"
                          value={transmission}
                          checked={selectedTransmission === transmission}
                          onChange={(e) =>
                            setSelectedTransmission(e.target.value)
                          }
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500 focus:ring-2"
                        />
                        <span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          {transmission}
                        </span>
                        <span className="text-xs text-neutral-400 ml-auto">
                          (
                          {
                            allCars.filter(
                              (car) =>
                                transmission === "Todos" ||
                                car.transmission === transmission
                            ).length
                          }
                          )
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Header Bar */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-1">
                      Veículos Disponíveis
                    </h1>
                    <p className="text-neutral-600">
                      {filteredCars.length}{" "}
                      {filteredCars.length === 1
                        ? "veículo encontrado"
                        : "veículos encontrados"}
                      {searchTerm && ` para "${searchTerm}"`}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-neutral-100 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-md transition-colors ${
                          viewMode === "grid"
                            ? "bg-white text-primary-600 shadow-sm"
                            : "text-neutral-600 hover:text-neutral-900"
                        }`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-md transition-colors ${
                          viewMode === "list"
                            ? "bg-white text-primary-600 shadow-sm"
                            : "text-neutral-600 hover:text-neutral-900"
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="pl-3 pr-8 py-2 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white text-sm appearance-none cursor-pointer"
                      >
                        <option value="featured">Em Destaque</option>
                        <option value="price-low">Preço: Menor → Maior</option>
                        <option value="price-high">Preço: Maior → Menor</option>
                        <option value="year-new">Ano: Mais Recente</option>
                        <option value="year-old">Ano: Mais Antigo</option>
                        <option value="mileage">Menor Quilometragem</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Active Filters */}
                {(searchTerm ||
                  selectedBrand !== "Todos" ||
                  selectedCategory !== "Todos" ||
                  selectedCondition !== "Todos" ||
                  selectedFuel !== "Todos" ||
                  selectedTransmission !== "Todos" ||
                  selectedYear !== "Todos" ||
                  priceRange[1] < 50000) && (
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2">
                      {searchTerm && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                          Pesquisa: "{searchTerm}"
                          <button
                            onClick={() => setSearchTerm("")}
                            className="ml-2 text-primary-500 hover:text-primary-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedCategory !== "Todos" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {selectedCategory}
                          <button
                            onClick={() => setSelectedCategory("Todos")}
                            className="ml-2 text-blue-500 hover:text-blue-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {selectedCondition !== "Todos" && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {selectedCondition}
                          <button
                            onClick={() => setSelectedCondition("Todos")}
                            className="ml-2 text-green-500 hover:text-green-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                      {priceRange[1] < 50000 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                          Até €{priceRange[1].toLocaleString()}
                          <button
                            onClick={() => setPriceRange([0, 50000])}
                            className="ml-2 text-purple-500 hover:text-purple-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Vehicle Grid/List */}
              {filteredCars.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredCars.map((car) => (
                    <div
                      key={car.id}
                      className={`bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                        viewMode === "list" ? "flex" : ""
                      }`}
                    >
                      {/* Car Image */}
                      <div
                        className={`relative ${
                          viewMode === "list" ? "w-72 flex-shrink-0" : ""
                        }`}
                      >
                        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                          <Car className="w-12 h-12 text-neutral-400" />
                        </div>

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col space-y-1">
                          {car.isNew && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Novo
                            </span>
                          )}
                          {car.isFeatured && (
                            <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Destaque
                            </span>
                          )}
                          {car.originalPrice > car.price && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Oferta
                            </span>
                          )}
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(car.id)}
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                            favorites.has(car.id)
                              ? "bg-red-500 text-white"
                              : "bg-white/90 backdrop-blur-sm text-neutral-600 hover:bg-red-500 hover:text-white"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              favorites.has(car.id) ? "fill-current" : ""
                            }`}
                          />
                        </button>

                        {/* Rating */}
                        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium text-neutral-700">
                            {car.rating}
                          </span>
                        </div>
                      </div>

                      {/* Car Details */}
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex-1 space-y-3">
                          {/* Header */}
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-neutral-900 text-sm leading-tight">
                                {car.brand} {car.model} {car.variant}
                              </h3>
                              <p className="text-neutral-500 text-xs mt-1">
                                {car.year} • {car.category} • {car.condition}
                              </p>
                            </div>
                            <div className="text-right ml-3">
                              <div className="text-lg font-bold text-primary-600">
                                €{car.price.toLocaleString()}
                              </div>
                              {car.originalPrice > car.price && (
                                <div className="text-xs text-neutral-400 line-through">
                                  €{car.originalPrice.toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Specs */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center space-x-1">
                              <Settings className="w-3 h-3 text-neutral-400" />
                              <span className="text-neutral-600">
                                {car.mileage}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Fuel className="w-3 h-3 text-neutral-400" />
                              <span className="text-neutral-600">
                                {car.fuel}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Settings className="w-3 h-3 text-neutral-400" />
                              <span className="text-neutral-600">
                                {car.transmission}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 text-neutral-400" />
                              <span className="text-neutral-600">
                                {car.location}
                              </span>
                            </div>
                          </div>

                          {/* Features - Only in list view */}
                          {viewMode === "list" && (
                            <div className="space-y-2">
                              <p className="text-xs text-neutral-600 line-clamp-2">
                                {car.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {car.features
                                  .slice(0, 3)
                                  .map((feature, index) => (
                                    <span
                                      key={index}
                                      className="bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded text-xs"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                {car.features.length > 3 && (
                                  <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs">
                                    +{car.features.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 mt-4">
                          <button
                            onClick={() => setSelectedCar(car)}
                            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-3 rounded-lg transition-all duration-200 font-medium text-sm flex items-center justify-center space-x-1 group"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Ver</span>
                          </button>
                          <button
                            onClick={handleCall}
                            className="flex items-center justify-center w-9 h-9 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200"
                          >
                            <Phone className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results */
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
                    onClick={resetFilters}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {selectedCar.brand} {selectedCar.model}{" "}
                    {selectedCar.variant}
                  </h2>
                  <p className="text-neutral-600">
                    {selectedCar.year} • {selectedCar.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCar(null)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center">
                  <Car className="w-20 h-20 text-neutral-400" />
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      €{selectedCar.price.toLocaleString()}
                    </div>
                    {selectedCar.originalPrice > selectedCar.price && (
                      <div className="text-lg text-neutral-400 line-through">
                        €{selectedCar.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-medium text-neutral-900">
                        Quilometragem
                      </div>
                      <div className="text-neutral-600">
                        {selectedCar.mileage}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-neutral-900">
                        Combustível
                      </div>
                      <div className="text-neutral-600">{selectedCar.fuel}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-neutral-900">
                        Transmissão
                      </div>
                      <div className="text-neutral-600">
                        {selectedCar.transmission}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-neutral-900">Estado</div>
                      <div className="text-neutral-600">
                        {selectedCar.condition}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-neutral-900 mb-2">
                      Descrição
                    </div>
                    <p className="text-neutral-600">
                      {selectedCar.description}
                    </p>
                  </div>

                  <div>
                    <div className="font-medium text-neutral-900 mb-3">
                      Características
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedCar.features.map(
                        (feature: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            <span className="text-neutral-600">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleCall}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Contactar</span>
                    </button>
                    <Link
                      href="/contacto"
                      className="flex-1 border border-primary-600 text-primary-600 hover:bg-primary-50 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Visita</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
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
                Há mais de duas décadas, oferecemos veículos Subaru de qualidade
                excecional, combinando inovação, segurança e performance para os
                nossos clientes.
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  Concessionário Certificado
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Início</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/explorar"
                    className="text-neutral-300 hover:text-primary-400 transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <span>Explorar Veículos</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
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

            {/* Contact Info */}
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

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
    location: "Meinedo, Lousada",
    images: ["/images/subaru-forester-1.jpg", "/images/subaru-forester-2.jpg"],
    rating: 4.8,
    isFeatured: true,
    isElectric: false,
    features: ["All-Wheel Drive", "EyeSight", "X-Mode", "Navegação GPS"],
  },
  {
    id: 2,
    brand: "Subaru",
    model: "Outback",
    variant: "Touring",
    year: 2023,
    price: 28900,
    originalPrice: 31000,
    mileage: "25.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Seminovo",
    category: "Station Wagon",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-outback-1.jpg", "/images/subaru-outback-2.jpg"],
    rating: 4.7,
    isFeatured: true,
    isElectric: false,
    features: [
      "Boxer Engine",
      "EyeSight",
      "Symmetrical AWD",
      "Grande bagageira",
    ],
  },
  {
    id: 3,
    brand: "Subaru",
    model: "XV",
    variant: "Sport",
    year: 2022,
    price: 24500,
    originalPrice: 26500,
    mileage: "32.000 km",
    fuel: "Gasolina",
    transmission: "Manual",
    condition: "Usado",
    category: "Crossover",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-xv-1.jpg", "/images/subaru-xv-2.jpg"],
    rating: 4.6,
    isFeatured: false,
    isElectric: false,
    features: ["X-Mode", "Boxer Engine", "Elevada proteção", "Design robusto"],
  },
  {
    id: 4,
    brand: "Subaru",
    model: "Impreza",
    variant: "Premium",
    year: 2024,
    price: 26800,
    originalPrice: 28000,
    mileage: "8.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Seminovo",
    category: "Hatchback",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-impreza-1.jpg", "/images/subaru-impreza-2.jpg"],
    rating: 4.5,
    isFeatured: true,
    isElectric: false,
    features: [
      "EyeSight",
      "Symmetrical AWD",
      "Conectividade total",
      "Eficiência",
    ],
  },
  {
    id: 5,
    brand: "Subaru",
    model: "Legacy",
    variant: "Limited",
    year: 2023,
    price: 31200,
    originalPrice: 33500,
    mileage: "18.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Seminovo",
    category: "Sedan",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-legacy-1.jpg", "/images/subaru-legacy-2.jpg"],
    rating: 4.7,
    isFeatured: false,
    isElectric: false,
    features: [
      "Boxer Engine",
      "EyeSight",
      "Interior premium",
      "Tecnologia avançada",
    ],
  },
  {
    id: 6,
    brand: "Subaru",
    model: "BRZ",
    variant: "Premium",
    year: 2024,
    price: 35900,
    originalPrice: 37500,
    mileage: "5.000 km",
    fuel: "Gasolina",
    transmission: "Manual",
    condition: "Novo",
    category: "Coupé",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-brz-1.jpg", "/images/subaru-brz-2.jpg"],
    rating: 4.9,
    isFeatured: true,
    isElectric: false,
    features: [
      "Boxer Engine",
      "Propulsão traseira",
      "Performance pura",
      "Design desportivo",
    ],
  },
  {
    id: 7,
    brand: "Subaru",
    model: "Ascent",
    variant: "Touring",
    year: 2023,
    price: 42500,
    originalPrice: 45000,
    mileage: "22.000 km",
    fuel: "Gasolina",
    transmission: "CVT",
    condition: "Seminovo",
    category: "SUV",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-ascent-1.jpg", "/images/subaru-ascent-2.jpg"],
    rating: 4.6,
    isFeatured: false,
    isElectric: false,
    features: ["8 lugares", "EyeSight", "Tração integral", "Espaço familiar"],
  },
  {
    id: 8,
    brand: "Subaru",
    model: "WRX",
    variant: "STI",
    year: 2024,
    price: 48900,
    originalPrice: 52000,
    mileage: "12.000 km",
    fuel: "Gasolina",
    transmission: "Manual",
    condition: "Seminovo",
    category: "Sedan",
    location: "Meinedo, Lousada",
    images: ["/images/subaru-wrx-1.jpg", "/images/subaru-wrx-2.jpg"],
    rating: 4.8,
    isFeatured: true,
    isElectric: false,
    features: [
      "Turbo Boxer",
      "Performance extrema",
      "Tração integral",
      "Desporto puro",
    ],
  },
];

// Get unique values for filters
const getUniqueValues = (key: string) => {
  const values = allCars.map((car: any) => car[key]);
  return ["Todos", ...Array.from(new Set(values))];
};

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
  const [sortBy, setSortBy] = useState("featured");
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
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+351 255 000 000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>atelier@automeinedo.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Seg-Sex: 8h-18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <SubaruStarIcon />
              <div>
                <h1 className="text-xl font-bold text-primary-600">
                  Oficina Automeinedo
                </h1>
                <p className="text-xs text-neutral-500">Especialistas Subaru</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                href="/explorar"
                className="text-primary-600 font-medium border-b-2 border-primary-600 pb-1"
              >
                Explorar
              </Link>
              <Link
                href="/servicos"
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                href="/contacto"
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Contacto
              </Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-neutral-100 py-4 space-y-4">
              <Link
                href="/"
                className="block text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Início
              </Link>
              <Link
                href="/explorar"
                className="block text-primary-600 font-medium"
              >
                Explorar
              </Link>
              <Link
                href="/servicos"
                className="block text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Serviços
              </Link>
              <Link
                href="/contacto"
                className="block text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-80 min-h-screen bg-neutral-50 border-r border-neutral-200 sticky top-24">
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Pesquisar
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Marca, modelo, variante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Categoria
              </h3>
              <div className="space-y-2">
                {getUniqueValues("category").map((category) => {
                  const count =
                    category === "Todos"
                      ? allCars.length
                      : allCars.filter((car) => car.category === category)
                          .length;

                  return (
                    <label
                      key={category}
                      className="flex items-center justify-between p-3 hover:bg-white rounded-lg cursor-pointer transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-neutral-700">
                          {category}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Condição
              </h3>
              <div className="space-y-2">
                {getUniqueValues("condition").map((condition) => {
                  const count =
                    condition === "Todos"
                      ? allCars.length
                      : allCars.filter((car) => car.condition === condition)
                          .length;

                  return (
                    <label
                      key={condition}
                      className="flex items-center justify-between p-3 hover:bg-white rounded-lg cursor-pointer transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="condition"
                          value={condition}
                          checked={selectedCondition === condition}
                          onChange={(e) => setSelectedCondition(e.target.value)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                        />
                        <span className="ml-3 text-neutral-700">
                          {condition}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="w-full flex items-center justify-center px-4 py-3 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Limpar Filtros
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Explorar Veículos
              </h2>
              <p className="text-neutral-600 mt-1">
                {filteredCars.length} veículo
                {filteredCars.length !== 1 ? "s" : ""} encontrado
                {filteredCars.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-600">Ordenar:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Preço: Baixo → Alto</option>
                  <option value="price-high">Preço: Alto → Baixo</option>
                  <option value="year-new">Ano: Mais Recente</option>
                  <option value="year-old">Ano: Mais Antigo</option>
                </select>
              </div>

              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-primary-600 text-white"
                      : "bg-white text-neutral-600 hover:bg-neutral-50"
                  } transition-colors duration-200`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-primary-600 text-white"
                      : "bg-white text-neutral-600 hover:bg-neutral-50"
                  } transition-colors duration-200`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <Car className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                Nenhum veículo encontrado
              </h3>
              <p className="text-neutral-500 mb-6">
                Tente ajustar os seus filtros para ver mais resultados.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className={`bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      viewMode === "list" ? "w-80 flex-shrink-0" : "h-64"
                    } bg-gradient-to-br from-neutral-100 to-neutral-200`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Car className="w-16 h-16 text-neutral-400" />
                    </div>

                    {car.isFeatured && (
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Destaque
                      </div>
                    )}

                    <button
                      onClick={() => toggleFavorite(car.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(car.id)
                            ? "text-red-500 fill-current"
                            : "text-neutral-400"
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-neutral-700">
                      {car.condition}
                    </div>
                  </div>

                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-neutral-600">{car.variant}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-neutral-600">
                          {car.rating}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-neutral-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{car.year}</span>
                        <span className="mx-2">•</span>
                        <span>{car.mileage}</span>
                      </div>

                      <div className="flex items-center text-sm text-neutral-600">
                        <Fuel className="w-4 h-4 mr-2" />
                        <span>{car.fuel}</span>
                        <span className="mx-2">•</span>
                        <Settings className="w-4 h-4 mr-1" />
                        <span>{car.transmission}</span>
                      </div>

                      <div className="flex items-center text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{car.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-neutral-900">
                            €{car.price.toLocaleString()}
                          </span>
                          {car.originalPrice > car.price && (
                            <span className="text-lg text-neutral-400 line-through">
                              €{car.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {car.originalPrice > car.price && (
                          <span className="text-sm text-green-600 font-medium">
                            Poupança: €
                            {(car.originalPrice - car.price).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedCar(car)}
                        className="flex-1 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </button>
                      <button
                        onClick={handleCall}
                        className="px-4 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedCar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900">
                    {selectedCar.brand} {selectedCar.model}{" "}
                    {selectedCar.variant}
                  </h2>
                  <p className="text-neutral-600 mt-1">
                    {selectedCar.year} • {selectedCar.condition}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCar(null)}
                  className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center mb-4">
                    <Car className="w-20 h-20 text-neutral-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-neutral-900">
                        €{selectedCar.price.toLocaleString()}
                      </span>
                      {selectedCar.originalPrice > selectedCar.price && (
                        <span className="text-xl text-neutral-400 line-through">
                          €{selectedCar.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleCall}
                      className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contactar
                    </button>
                    <button
                      onClick={handleEmail}
                      className="flex-1 border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

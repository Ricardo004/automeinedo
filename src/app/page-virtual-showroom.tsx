"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Car,
  Heart,
  Eye,
  Euro,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  Shield,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Download,
  Share2,
} from "lucide-react";

// Sample car data
const sampleCars = [
  {
    id: 1,
    brand: "Subaru",
    model: "Forester",
    year: 2023,
    price: 32500,
    mileage: 15000,
    fuel: "Gasolina",
    transmission: "CVT",
    power: "150 CV",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605515298946-d062f2e9cd28?w=800&h=600&fit=crop",
    ],
    features: ["AWD", "EyeSight", "X-Mode", "Teto Panorâmico"],
    condition: "Semi-novo",
    warranty: "3 anos",
    category: "SUV",
  },
  {
    id: 2,
    brand: "Subaru",
    model: "Outback",
    year: 2022,
    price: 38900,
    mileage: 8500,
    fuel: "Gasolina",
    transmission: "CVT",
    power: "175 CV",
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
    ],
    features: ["AWD", "EyeSight", "X-Mode", "Navegação GPS"],
    condition: "Semi-novo",
    warranty: "2 anos",
    category: "Station Wagon",
  },
  {
    id: 3,
    brand: "Subaru",
    model: "Impreza",
    year: 2024,
    price: 28900,
    mileage: 2000,
    fuel: "Gasolina",
    transmission: "CVT",
    power: "136 CV",
    images: [
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    features: ["AWD", "EyeSight", "Keyless", "LED"],
    condition: "Novo",
    warranty: "5 anos",
    category: "Hatchback",
  },
  {
    id: 4,
    brand: "Subaru",
    model: "XV",
    year: 2023,
    price: 30200,
    mileage: 12000,
    fuel: "Gasolina",
    transmission: "CVT",
    power: "156 CV",
    images: [
      "https://images.unsplash.com/photo-1605515298946-d062f2e9cd28?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    ],
    features: ["AWD", "EyeSight", "X-Mode", "Apple CarPlay"],
    condition: "Semi-novo",
    warranty: "3 anos",
    category: "Crossover",
  },
];

export default function VirtualShowroom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [yearRange, setYearRange] = useState([2018, 2024]);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neutral-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-neutral-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold gradient-text">
                🚗 Automeinedo
              </div>
              <div className="hidden md:block text-sm text-neutral-600">
                Stand Virtual Subaru
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#inventory"
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                Inventário
              </a>
              <a
                href="#financing"
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                Financiamento
              </a>
              <a
                href="#services"
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                Serviços
              </a>
              <a
                href="#contact"
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                Contacto
              </a>
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Phone className="w-4 h-4 mr-2 inline" />
                Ligar Agora
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-primary-600 p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="space-y-2">
                <a
                  href="#inventory"
                  className="block px-3 py-2 text-neutral-700 hover:text-primary-600 font-medium"
                >
                  Inventário
                </a>
                <a
                  href="#financing"
                  className="block px-3 py-2 text-neutral-700 hover:text-primary-600 font-medium"
                >
                  Financiamento
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-neutral-700 hover:text-primary-600 font-medium"
                >
                  Serviços
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-neutral-700 hover:text-primary-600 font-medium"
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                O Futuro da{" "}
                <span className="gradient-text-accent text-glow">
                  Compra de Carros
                </span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Explore nossa seleção exclusiva de veículos Subaru no stand
                virtual mais moderno da região. Experiência imersiva, preços
                transparentes, e suporte especializado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent-400 hover:bg-accent-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Eye className="w-5 h-5 mr-2 inline" />
                  Explorar Inventário
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Ver Demonstração
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-neutral-800">
                      Subaru Forester
                    </div>
                    <div className="text-2xl">🚗</div>
                  </div>
                  <div className="space-y-2 text-neutral-600">
                    <div className="flex justify-between">
                      <span>Preço:</span>
                      <span className="font-bold text-accent-600">€32.500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ano:</span>
                      <span>2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quilómetros:</span>
                      <span>15.000 km</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Encontre o Seu Subaru Ideal
            </h2>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar por modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros Avançados
              <ChevronRight
                className={`w-4 h-4 ml-1 transition-transform ${
                  isFilterOpen ? "rotate-90" : ""
                }`}
              />
            </button>

            {/* Advanced Filters */}
            {isFilterOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl border border-neutral-200">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Preço (€)
                  </label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-neutral-600">
                      <span>€{priceRange[0].toLocaleString()}</span>
                      <span>€{priceRange[1].toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Ano
                  </label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-neutral-600">
                      <span>{yearRange[0]}</span>
                      <span>{yearRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="2018"
                      max="2024"
                      value={yearRange[1]}
                      onChange={(e) =>
                        setYearRange([yearRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Car Inventory Grid */}
      <section
        id="inventory"
        className="py-16 bg-gradient-to-b from-white to-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Inventário Disponível
            </h2>
            <p className="text-xl text-neutral-600">
              {filteredCars.length} veículos encontrados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {car.condition}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 space-y-2">
                    <button
                      onClick={() => toggleFavorite(car.id)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        favorites.has(car.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/80 text-neutral-600 hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favorites.has(car.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    <button className="p-2 bg-white/80 text-neutral-600 hover:bg-white rounded-full transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-neutral-800">
                      €{car.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-neutral-600">{car.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-neutral-600">4.9/5</p>
                    </div>
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-neutral-600">
                      <Gauge className="w-4 h-4 mr-2" />
                      {car.mileage.toLocaleString()} km
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Fuel className="w-4 h-4 mr-2" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Settings className="w-4 h-4 mr-2" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Car className="w-4 h-4 mr-2" />
                      {car.power}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{car.features.length - 3} mais
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="flex items-center justify-center bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 font-medium"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </button>
                    <button className="flex items-center justify-center bg-accent-400 text-white py-3 rounded-xl hover:bg-accent-500 transition-all duration-300 font-medium">
                      <Phone className="w-4 h-4 mr-2" />
                      Contactar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Porque Escolher-nos?</h2>
            <p className="text-xl text-neutral-300">
              Experiência premium no seu stand virtual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantia Total",
                description: "Todos os veículos com garantia até 5 anos",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certificação Subaru",
                description:
                  "Concessionário oficial com técnicos especializados",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Test Drive 24/7",
                description: "Agende test drives online a qualquer hora",
              },
              {
                icon: <Euro className="w-8 h-8" />,
                title: "Financiamento",
                description: "Soluções de crédito personalizadas",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-400 transition-all duration-300">
                  <div className="text-accent-400 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-primary-50 to-accent-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Pronto para o Próximo Passo?
            </h2>
            <p className="text-xl text-neutral-600">
              Entre em contacto connosco e encontre o seu Subaru ideal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                  Informações de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        Localização
                      </h4>
                      <p className="text-neutral-600">
                        Rua de Santo Tirso, Nº 348
                        <br />
                        4620-848 Meinedo
                        <br />
                        Lousada, Porto
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        Telefone
                      </h4>
                      <p className="text-neutral-600">+351 255 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        Email
                      </h4>
                      <p className="text-neutral-600">stand@automeinedo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">
                        Horário de Funcionamento
                      </h4>
                      <p className="text-neutral-600">
                        Segunda a Sexta: 9:00 - 19:00
                        <br />
                        Sábado: 9:00 - 17:00
                        <br />
                        Domingo: Encerrado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                  Solicite Informações
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="O seu telefone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="O seu email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Interesse
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                      <option value="">Selecione uma opção</option>
                      <option value="compra">Compra de Veículo</option>
                      <option value="test-drive">Agendar Test Drive</option>
                      <option value="financiamento">
                        Informações de Financiamento
                      </option>
                      <option value="manutencao">Serviços de Manutenção</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Como podemos ajudá-lo?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                🚗 Automeinedo
              </h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                O seu stand virtual Subaru de confiança. Inovação, qualidade e
                transparência na compra e venda de veículos premium.
              </p>
              <p className="text-sm text-neutral-400">
                Automeinedo A.M. Lda - NIF: 516729900
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inventory"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Inventário
                  </a>
                </li>
                <li>
                  <a
                    href="#financing"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Financiamento
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
              <div className="space-y-2 text-neutral-300">
                <p>+351 255 000 000</p>
                <p>stand@automeinedo.com</p>
                <p>Meinedo, Lousada</p>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg transition-colors">
                    📱
                  </button>
                  <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg transition-colors">
                    📧
                  </button>
                  <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-lg transition-colors">
                    🌐
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 Automeinedo Stand Virtual. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-neutral-600 p-2 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Car Images */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedCar.images[currentImageIndex]}
                  alt={`${selectedCar.brand} ${selectedCar.model}`}
                  className="w-full h-full object-cover"
                />
                {selectedCar.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0
                            ? selectedCar.images.length - 1
                            : currentImageIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-600 p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (currentImageIndex + 1) % selectedCar.images.length
                        )
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-600 p-2 rounded-full transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Car Details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-800 mb-2">
                      {selectedCar.brand} {selectedCar.model}
                    </h2>
                    <p className="text-xl text-neutral-600">
                      {selectedCar.year}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent-600 mb-2">
                      €{selectedCar.price.toLocaleString()}
                    </div>
                    <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCar.condition}
                    </span>
                  </div>
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-neutral-50 rounded-xl">
                    <Gauge className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-neutral-800">
                      {selectedCar.mileage.toLocaleString()} km
                    </div>
                    <div className="text-sm text-neutral-600">Quilómetros</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl">
                    <Fuel className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-neutral-800">
                      {selectedCar.fuel}
                    </div>
                    <div className="text-sm text-neutral-600">Combustível</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl">
                    <Settings className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-neutral-800">
                      {selectedCar.transmission}
                    </div>
                    <div className="text-sm text-neutral-600">Transmissão</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-50 rounded-xl">
                    <Car className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="font-semibold text-neutral-800">
                      {selectedCar.power}
                    </div>
                    <div className="text-sm text-neutral-600">Potência</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Características
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCar.features.map(
                      (feature: string, index: number) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium"
                        >
                          <CheckCircle className="w-4 h-4 inline mr-2" />
                          {feature}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar
                  </button>
                  <button className="bg-accent-400 hover:bg-accent-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Test Drive
                  </button>
                  <button className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Brochura
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

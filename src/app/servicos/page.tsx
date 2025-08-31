"use client";

import { useState } from "react";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Car,
  Calendar,
  Phone,
  Mail,
  Star,
  Award,
  Users,
  MapPin,
  Menu,
  X,
  Gauge,
  Battery,
  Zap,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

// Custom SVG Components
const SubaruStarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Manutenção Preventiva",
    description:
      "Manutenção completa para manter o seu Subaru em perfeito estado",
    icon: Settings,
    price: "Desde €89",
    duration: "2-3 horas",
    includes: [
      "Mudança de óleo e filtros",
      "Verificação de travões",
      "Inspeção de suspensão",
      "Diagnóstico eletrónico",
      "Verificação de fluidos",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Reparações Especializadas",
    description: "Reparações técnicas com peças originais Subaru",
    icon: Wrench,
    price: "Orçamento personalizado",
    duration: "1-5 dias",
    includes: [
      "Diagnóstico avançado",
      "Reparação de motor",
      "Sistema de transmissão",
      "Eletrónica avançada",
      "Garantia de serviço",
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Inspeção Técnica",
    description: "Preparação completa para inspeção oficial",
    icon: CheckCircle,
    price: "€75",
    duration: "1-2 horas",
    includes: [
      "Verificação de segurança",
      "Teste de emissões",
      "Inspeção de luzes",
      "Verificação de travões",
      "Certificado de conformidade",
    ],
    popular: false,
  },
  {
    id: 4,
    title: "Sistema AWD",
    description: "Manutenção especializada do sistema Symmetrical AWD",
    icon: Gauge,
    price: "Desde €150",
    duration: "3-4 horas",
    includes: [
      "Verificação de diferencial",
      "Teste de acoplamentos",
      "Mudança de óleo AWD",
      "Calibração de sensores",
      "Teste de estrada",
    ],
    popular: false,
  },
  {
    id: 5,
    title: "Ar Condicionado",
    description: "Manutenção e reparação de sistema de climatização",
    icon: RefreshCw,
    price: "€95",
    duration: "2 horas",
    includes: [
      "Limpeza de circuito",
      "Recarga de gás",
      "Substituição de filtros",
      "Verificação de compressor",
      "Teste de funcionamento",
    ],
    popular: false,
  },
  {
    id: 6,
    title: "Sistema Elétrico",
    description: "Diagnóstico e reparação de sistemas eletrónicos",
    icon: Zap,
    price: "Desde €65",
    duration: "1-3 horas",
    includes: [
      "Diagnóstico eletrónico",
      "Teste de bateria",
      "Verificação de alternador",
      "Sistema de arranque",
      "Programação de ECU",
    ],
    popular: false,
  },
];

export default function ServicosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

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
                  Serviços Oficiais Subaru
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
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Explorar
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/servicos"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Serviços
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"></div>
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
              <span>Agendar Serviço</span>
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
                  className="block text-neutral-600 hover:text-primary-600 transition-colors py-2"
                >
                  Explorar
                </Link>
                <Link
                  href="/servicos"
                  className="block text-primary-600 font-medium py-2"
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
                  <span>Agendar Serviço</span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-3 bg-primary-50 border border-primary-200 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-primary-700 text-sm font-medium">
                Serviço Oficial Subaru
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block text-neutral-900">Serviços</span>
                <span className="block gradient-text">Especializados</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto"></div>
            </div>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Manutenção e reparação especializada para o seu Subaru.
              <strong className="text-neutral-900">
                {" "}
                Técnicos certificados
              </strong>{" "}
              e peças originais garantem a máxima qualidade.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 max-w-md mx-auto">
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
                  100%
                </div>
                <div className="text-neutral-500 text-sm font-medium">
                  Peças Originais
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1 Ano
                </div>
                <div className="text-neutral-500 text-sm font-medium">
                  Garantia
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span>Ver Serviços</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <Link
                href="/contacto"
                className="border-2 border-neutral-300 hover:border-primary-500 text-neutral-700 hover:text-primary-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Agendar Agora</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
              <Wrench className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 text-sm font-medium">
                Nossos Serviços
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
              Manutenção <span className="gradient-text">Especializada</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços especializados para
              manter o seu Subaru em perfeitas condições de funcionamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary-300 hover:-translate-y-2 relative"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Popular
                  </div>
                )}

                <div className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 text-sm">Preço:</span>
                      <span className="font-semibold text-primary-600">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 text-sm">Duração:</span>
                      <span className="font-medium text-neutral-900">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                      Inclui:
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.slice(0, 3).map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm text-neutral-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-sm text-neutral-500">
                          +{service.includes.length - 3} serviços adicionais
                        </li>
                      )}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-neutral-50 hover:bg-primary-50 border border-neutral-200 hover:border-primary-300 text-neutral-700 hover:text-primary-700 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contacto"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Serviço</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-neutral-900">
                {selectedService.title}
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {selectedService.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xl font-bold text-primary-600">
                      {selectedService.price}
                    </span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-700">
                      {selectedService.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  O que está incluído:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedService.includes.map(
                    (item: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-700">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Porquê escolher-nos?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700">1 ano de garantia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700">
                      Técnicos certificados
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700">Peças originais</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-700">Serviço rápido</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="/contacto"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                >
                  Agendar Este Serviço
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <SubaruStarIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Automeinedo</h3>
                  <div className="text-primary-400 font-medium">
                    Serviços Oficiais Subaru
                  </div>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Mais de 25 anos de experiência e dedicação à marca Subaru.
                Qualidade, confiança e excelência no atendimento.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <div className="text-neutral-300 text-sm">
                    Rua de Santo Tirso, Nº 348
                    <br />
                    4620-848 Meinedo, Lousada
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <div className="text-primary-300 font-semibold">
                    +351 255 000 000
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <div className="text-neutral-300">
                    atelier@automeinedo.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
            <div className="text-neutral-400 text-sm">
              © 2024 Automeinedo A.M. Lda • NIF: 516729900 • Todos os direitos
              reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

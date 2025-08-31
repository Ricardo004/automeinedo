"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Shield,
  Award,
  User,
  MessageSquare,
  Car,
} from "lucide-react";
import Link from "next/link";

// Custom SVG Components
const SubaruStarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

export default function ContactoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        assunto: "",
        mensagem: "",
      });
    }, 3000);
  };

  const handleCall = () => {
    window.open("tel:+351255000000", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:atelier@automeinedo.com", "_self");
  };

  const handleDirections = () => {
    window.open(
      "https://maps.google.com/?q=Rua+de+Santo+Tirso+348+Meinedo+Lousada",
      "_blank"
    );
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
                  Concessionário Oficial Subaru
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
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Serviços
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link
                href="/contacto"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                Contacto
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 rounded-full"></div>
              </Link>
            </nav>

            {/* CTA Button */}
            <button
              onClick={handleCall}
              className="hidden lg:flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar Agora</span>
            </button>

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
                  className="block text-neutral-600 hover:text-primary-600 transition-colors py-2"
                >
                  Serviços
                </Link>
                <Link
                  href="/contacto"
                  className="block text-primary-600 font-medium py-2"
                >
                  Contacto
                </Link>
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Agora</span>
                </button>
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
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary-700 text-sm font-medium">
                Prontos para o Atender
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block text-neutral-900">Contacte-nos</span>
                <span className="block gradient-text">Hoje</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mx-auto"></div>
            </div>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Estamos aqui para ajudar com todas as suas necessidades Subaru.
              <strong className="text-neutral-900">
                {" "}
                Resposta garantida em 24 horas
              </strong>{" "}
              para todas as consultas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 max-w-2xl mx-auto">
              <button
                onClick={handleCall}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-neutral-900 mb-1">
                  Telefone
                </div>
                <div className="text-sm text-neutral-600">Ligue agora</div>
              </button>

              <button
                onClick={handleEmail}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-neutral-900 mb-1">Email</div>
                <div className="text-sm text-neutral-600">Envie mensagem</div>
              </button>

              <button
                onClick={handleDirections}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1"
              >
                <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <div className="font-semibold text-neutral-900 mb-1">
                  Localização
                </div>
                <div className="text-sm text-neutral-600">Como chegar</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                  Informações de <span className="gradient-text">Contacto</span>
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Visite-nos no nosso showroom em Meinedo ou contacte-nos
                  através dos meios disponíveis. Estamos sempre disponíveis para
                  ajudar.
                </p>
              </div>

              {/* Location Card */}
              <div className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      Showroom Premium
                    </h3>
                    <div className="text-neutral-600 space-y-1 leading-relaxed">
                      <div className="font-medium">
                        Rua de Santo Tirso, Nº 348
                      </div>
                      <div>4620-848 Meinedo, Lousada</div>
                      <div>Porto, Portugal</div>
                    </div>
                    <button
                      onClick={handleDirections}
                      className="mt-4 inline-flex items-center space-x-2 bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Ver no Mapa</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={handleCall}
                  className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Telefone
                      </h3>
                      <div className="text-primary-600 font-medium">
                        +351 255 000 000
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300 hover:-translate-y-1 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Email
                      </h3>
                      <div className="text-primary-600 font-medium text-sm">
                        atelier@automeinedo.com
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Schedule */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
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
                    <div className="mt-4 inline-flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-700 text-sm font-medium">
                        Aberto Agora
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Envie-nos uma Mensagem
                </h3>
                <p className="text-neutral-600">
                  Preencha o formulário e responderemos rapidamente
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-neutral-600">
                    Obrigado pelo seu contacto. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                        placeholder="+351 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Como podemos ajudar? *
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-200 bg-white"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="compra">Compra de veículo</option>
                      <option value="testdrive">Agendar test drive</option>
                      <option value="servico">Agendar serviço</option>
                      <option value="financiamento">
                        Informações sobre financiamento
                      </option>
                      <option value="manutencao">Serviços de manutenção</option>
                      <option value="geral">Informações gerais</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition-all duration-200 bg-white"
                      placeholder="Conte-nos mais sobre o que procura..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-4 rounded-xl transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
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
              )}
            </div>
          </div>
        </div>
      </section>

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
                    Concessionário Oficial Subaru
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

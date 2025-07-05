import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation Toggle */}
          <div className="flex items-center gap-4">
            <SidebarTrigger className="lg:hidden" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E2A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Hub Acadêmico E2A
                </h1>
                <p className="text-xs text-muted-foreground">Marcas Licenciadas</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </a>
            <a href="#modelo" className="text-sm font-medium hover:text-primary transition-colors">
              Modelo Acadêmico
            </a>
            <a href="#curriculo" className="text-sm font-medium hover:text-primary transition-colors">
              Currículo
            </a>
            <a href="#formacao" className="text-sm font-medium hover:text-primary transition-colors">
              Formação
            </a>
            <a href="#materiais" className="text-sm font-medium hover:text-primary transition-colors">
              Materiais
            </a>
            <a href="#suporte" className="text-sm font-medium hover:text-primary transition-colors">
              Suporte
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button variant="hero" size="sm">
              Acesse a Pós-graduação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Início
              </a>
              <a href="#modelo" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Modelo Acadêmico
              </a>
              <a href="#curriculo" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Currículo
              </a>
              <a href="#formacao" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Formação
              </a>
              <a href="#materiais" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Materiais
              </a>
              <a href="#suporte" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Suporte
              </a>
              <Button variant="hero" size="sm" className="mt-2">
                Acesse a Pós-graduação
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
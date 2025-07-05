import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Hub Acadêmico E2A
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Modelo Acadêmico para Marcas Licenciadas
            </p>
          </div>

          {/* Welcome message */}
          <Card className="bg-gradient-card shadow-card border-border/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">Boas-vindas</h2>
              <p className="text-card-foreground/80 leading-relaxed mb-6">
                Seja bem-vindo(a) ao nosso espaço de apoio ao planejamento e à prática pedagógica no currículo integrado E2A. 
                Aqui, você encontrará as principais informações que irão orientar sua atuação docente ao longo do semestre, 
                em consonância com o modelo acadêmico.
              </p>
              <p className="text-card-foreground/80 leading-relaxed mb-6">
                Neste ambiente, reunimos trilhas formativas e materiais que fortalecem o seu desenvolvimento profissional, 
                com foco nas competências docentes e no uso consciente das tecnologias. Afinal, em um cenário educacional cada vez mais dinâmico, 
                o desenvolvimento do mindset digital se torna um aliado essencial para potencializar sua prática e impactar positivamente a aprendizagem dos estudantes.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-card-foreground/90">
                  <strong>Importante:</strong> O modelo acadêmico E2A e todos os materiais aqui disponibilizados são propriedade intelectual da Ânima Educação 
                  e foram cuidadosamente preparados para uso exclusivo pelas instituições e marcas licenciadas. 
                  Sua aplicação deve respeitar os princípios pedagógicos, os direitos autorais e os valores que orientam a proposta educacional.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="animate-glow-pulse">
              Explorar Modelo Acadêmico
            </Button>
            <Button variant="outline" size="lg">
              Acessar Materiais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Materiais</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Trilhas</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Docentes</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Instituições</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
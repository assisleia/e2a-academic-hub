import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E2A</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Hub Acadêmico E2A</h3>
                <p className="text-sm text-muted-foreground">Marcas Licenciadas</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transformando a educação através de currículos integrados por competências e metodologias inovadoras.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground/90">
                <strong>Propriedade Intelectual:</strong> Todo o conteúdo deste Hub é propriedade da Ânima Educação 
                e destina-se exclusivamente ao uso das marcas licenciadas.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Acesso Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#modelo" className="text-muted-foreground hover:text-primary transition-colors">
                  Modelo Acadêmico
                </a>
              </li>
              <li>
                <a href="#formacao" className="text-muted-foreground hover:text-primary transition-colors">
                  Formação Docente
                </a>
              </li>
              <li>
                <a href="#materiais" className="text-muted-foreground hover:text-primary transition-colors">
                  Materiais de Apoio
                </a>
              </li>
              <li>
                <a href="#pos-graduacao" className="text-muted-foreground hover:text-primary transition-colors">
                  Pós-graduação
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>pedagogico@anima.com.br</li>
              <li>suporte@anima.com.br</li>
              <li>FAQ</li>
            </ul>
            <Button variant="outline" size="sm" className="mt-4">
              Fale Conosco
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Ânima Educação. Todos os direitos reservados. 
            <span className="ml-2">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              {" • "}
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
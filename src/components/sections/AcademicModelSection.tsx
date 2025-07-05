import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AcademicModelSection() {
  return (
    <section id="modelo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Modelo Acadêmico E2A
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Educação integrada, inovadora e transformadora
            </p>
          </div>

          {/* Main Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Projeto de Vida e Carreira */}
            <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-e2a-purple group-hover:text-primary transition-colors">
                  Projeto de Vida e Carreira
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground/80">
                  O programa Vida & Carreira tem como missão apoiar estudantes na construção de trajetórias profissionais 
                  alinhadas ao seu propósito de vida e às competências globais.
                </p>
                <p className="text-card-foreground/80">
                  Estruturado sobre os pilares do <strong>autoconhecimento</strong>, da <strong>trabalhabilidade</strong> e 
                  da <strong>ciência da felicidade</strong>, o programa integra desenvolvimento pessoal e profissional 
                  de forma contínua ao longo da jornada acadêmica.
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-card-foreground mb-2">Quatro frentes principais:</h4>
                  <ul className="text-sm text-card-foreground/80 space-y-1">
                    <li>• Componente Curricular V&C</li>
                    <li>• Plataforma Vida & Carreira</li>
                    <li>• Estágios</li>
                    <li>• Mentorias Coletivas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Aprendizagem Dual */}
            <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-e2a-magenta group-hover:text-primary transition-colors">
                  Aprendizagem Dual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground/80">
                  Uma estratégia formativa que promove a integração entre teoria e prática por meio de 
                  desafios reais propostos por empresas parceiras.
                </p>
                
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold text-card-foreground mb-2">Objetivos estratégicos:</h4>
                  <ul className="text-sm text-card-foreground/80 space-y-1">
                    <li>• Promover aprendizagem significativa por meio de experiências reais</li>
                    <li>• Potencializar a empregabilidade dos estudantes</li>
                    <li>• Estimular a participação ativa das empresas na formação</li>
                    <li>• Atualizar o currículo com base nas demandas do mundo do trabalho</li>
                  </ul>
                </div>

                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-e2a-magenta rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white">▶</span>
                    </div>
                    <p className="text-sm text-muted-foreground">UC Dual Ânima</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unidades Curriculares Duais */}
          <Card className="bg-gradient-card shadow-elegant border-border/50 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Unidades Curriculares Duais
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-card-foreground/80 text-lg">
                Tem como objetivo desenvolver competências nos estudantes por meio das experiências duais, 
                alinhadas com o plano de ensino e desempenhos de compreensão dos componentes curriculares.
              </p>

              <Separator />

              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                  Conheça os trabalhos de destaque nas Mostras da Aprendizagem Dual de 2024!
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg">
                    IV Mostra - Trabalhos de Destaque
                  </Button>
                  <Button variant="outline" size="lg">
                    V Mostra - Trabalhos de Destaque
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Currículo Integrado por Competências */}
          <Card className="bg-gradient-card shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Currículo Integrado por Competências e Habilidades
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-card-foreground/80 text-lg leading-relaxed">
                O currículo integrado por competências e habilidades é a base do modelo educacional E2A, que propõe uma 
                formação centrada no estudante e em sua capacidade de atuar de forma crítica, criativa e ética em contextos reais.
              </p>

              <p className="text-card-foreground/80">
                Essa abordagem rompe com a linearidade tradicional entre teoria e prática, valorizando o desenvolvimento 
                simultâneo de competências humanas e profissionais. As unidades curriculares são organizadas em torno de 
                problemas do mundo real, incentivando a aprendizagem ativa, experiencial, interdisciplinar e por projetos.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-4 text-lg">
                  Pilares estruturantes do currículo por competências E2A:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-card-foreground">Unidade Curricular Dual</span>
                    </div>
                    <p className="text-sm text-card-foreground/70 ml-4">
                      Conexão entre universidade e mercado de trabalho
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-card-foreground">Extensão</span>
                    </div>
                    <p className="text-sm text-card-foreground/70 ml-4">
                      Vínculo com desafios globais e demandas sociais locais
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-card-foreground">Vida & Carreira</span>
                    </div>
                    <p className="text-sm text-card-foreground/70 ml-4">
                      Autoconhecimento e planejamento de futuro
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-card-foreground">Busca Ativa</span>
                    </div>
                    <p className="text-sm text-card-foreground/70 ml-4">
                      Protagonismo estudantil no processo avaliativo
                    </p>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium text-card-foreground">Core Curriculum</span>
                    </div>
                    <p className="text-sm text-card-foreground/70 ml-4">
                      Conteúdos essenciais que ampliam repertório e pensamento crítico
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" className="animate-glow-pulse">
                  Explore o Modelo Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
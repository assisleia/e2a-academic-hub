import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FormationSection() {
  return (
    <section id="formacao" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Formação Docente
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvimento profissional contínuo e especializado
            </p>
          </div>

          {/* Formation Tabs */}
          <Tabs defaultValue="programacao" className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="programacao">Programação</TabsTrigger>
              <TabsTrigger value="realizadas">Realizadas</TabsTrigger>
              <TabsTrigger value="trilhas">Trilhas</TabsTrigger>
              <TabsTrigger value="pos">Pós-graduação</TabsTrigger>
            </TabsList>

            <TabsContent value="programacao" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-e2a-purple">Formações Específicas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      Agenda personalizada de formações direcionadas às necessidades específicas de cada área do conhecimento.
                    </p>
                    <Button variant="outline" className="w-full">
                      Ver Agenda Completa
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-e2a-magenta">Formações do Ecossistema</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      Capacitações integradas ao ecossistema Ânima, abordando metodologias inovadoras e tendências educacionais.
                    </p>
                    <Button variant="outline" className="w-full">
                      Explorar Ecossistema
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="realizadas" className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardHeader>
                  <CardTitle>Formações Realizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80 mb-6">
                    Acesse todos os temas abordados e materiais das formações já realizadas para revisão e aprofundamento.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Badge variant="secondary">Metodologias Ativas</Badge>
                      <p className="text-sm text-card-foreground/70">15 sessões</p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Avaliação por Competências</Badge>
                      <p className="text-sm text-card-foreground/70">12 sessões</p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Tecnologias Educacionais</Badge>
                      <p className="text-sm text-card-foreground/70">18 sessões</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Acessar Biblioteca de Materiais
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trilhas" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-e2a-purple group-hover:text-primary transition-colors">
                      Competências Docentes
                    </CardTitle>
                    <Badge className="w-fit">Trilha Completa</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      Desenvolvimento integral das competências essenciais para a prática docente no modelo E2A.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-card-foreground/70">6 módulos • 40h</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-e2a-purple h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <Button variant="e2a" className="w-full">
                      Continuar Trilha
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-e2a-magenta group-hover:text-primary transition-colors">
                      Mindset Digital
                    </CardTitle>
                    <Badge className="w-fit">Trilha Completa</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      Transformação digital na educação e uso consciente de tecnologias educacionais.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-card-foreground/70">8 módulos • 50h</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-e2a-magenta h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <Button variant="e2a" className="w-full">
                      Iniciar Trilha
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-e2a-blue group-hover:text-primary transition-colors">
                      Novas Trilhas
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">Em Breve</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      Novas trilhas de aprendizagem estão sendo desenvolvidas para ampliar seu desenvolvimento profissional.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-card-foreground/70">Em desenvolvimento</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-e2a-blue h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Receber Notificações
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pos" className="space-y-6">
              <Card className="bg-gradient-card shadow-elegant border-border/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    <span className="bg-gradient-hero bg-clip-text text-transparent">
                      Pós-graduação Futuros Acadêmicos e Currículos Integrados
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-lg text-card-foreground/80 mb-6">
                      Especialize-se no modelo acadêmico E2A e torne-se um especialista em currículos integrados por competências.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Sobre o Programa</h4>
                      <p className="text-card-foreground/80">
                        Uma formação completa que prepara docentes para liderar a transformação educacional 
                        através de metodologias inovadoras e currículos integrados.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-card-foreground/70">Duração:</span>
                          <span className="text-sm font-medium">12 meses</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-card-foreground/70">Modalidade:</span>
                          <span className="text-sm font-medium">Híbrida</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-card-foreground/70">Carga Horária:</span>
                          <span className="text-sm font-medium">360h</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Unidades Curriculares</h4>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="w-full justify-start">
                          Competências Docentes
                        </Badge>
                        <Badge variant="secondary" className="w-full justify-start">
                          Mindset Digital
                        </Badge>
                        <Badge variant="secondary" className="w-full justify-start">
                          Competências Socioemocionais
                        </Badge>
                        <Badge variant="secondary" className="w-full justify-start">
                          DUAL: Ensino, Pesquisa e Extensão
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg">
                      Fazer Inscrição
                    </Button>
                    <Button variant="outline" size="lg">
                      Baixar Edital
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
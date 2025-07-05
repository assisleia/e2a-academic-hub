import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CurriculumSection() {
  return (
    <section id="nosso-curriculo" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Nosso Currículo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ânima Educação – Transformando o país pela educação
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Aprimoramos o nosso Ecossistema de Aprendizagem com elementos alinhados às melhores práticas mundiais 
              na educação de nível superior adotados por universidades nacionais e internacionais. 
              Nosso currículo é totalmente integrado, vai além da sala de aula e cria soluções transformadoras.
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <Card className="bg-gradient-card shadow-elegant border-border/50">
              <CardContent className="p-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-muted-foreground">
                      Entre no ritmo do Século 21 com a gente | A revolução do ensino superior chegou!
                    </p>
                    <Button variant="hero" className="mt-4">
                      Assistir Vídeo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  Foco em Currículo Integrado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80 mb-4">
                  Passamos a adotar as Unidades Curriculares (UCs), rompendo grades, disciplinas e isolamentos.
                </p>
                <p className="text-card-foreground/80 mb-4">
                  O aluno é incentivado a desenvolver competências que contribuem para uma visão global. O objetivo é preparar nossos estudantes para desafios reais da carreira.
                </p>
                <p className="text-card-foreground/80">
                  O aluno passa a ser o protagonista da sua formação, ou seja, ela passa a escolher os temas mais adequados aos seus objetivos profissionais: línguas, artes, raciocínio lógico, cultura, mindfulness e muito mais.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  Ecossistema de Aprendizagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white">▶</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Conheça o Ecossistema Ânima de Aprendizagem
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Assistir Apresentação
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card shadow-elegant border-border/50 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Pronto para transformar a educação?
                </h3>
                <p className="text-card-foreground/80 mb-6">
                  Explore nosso modelo acadêmico e descubra como implementar a metodologia E2A em sua instituição.
                </p>
                <Button variant="hero" size="lg" className="animate-glow-pulse">
                  Conhecer o Modelo E2A
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
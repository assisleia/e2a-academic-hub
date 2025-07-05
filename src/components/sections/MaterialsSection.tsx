import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Folder, File, Book } from "lucide-react";

export function MaterialsSection() {
  const materials = [
    {
      title: "Templates de Aula",
      description: "Modelos estruturados para planejamento de aulas no formato E2A",
      type: "Template",
      icon: File,
      count: 15,
      category: "curriculo"
    },
    {
      title: "Planos de Ensino",
      description: "Exemplos de planos de ensino por competências",
      type: "Documento",
      icon: Book,
      count: 25,
      category: "curriculo"
    },
    {
      title: "Roteiros de Avaliação",
      description: "Instrumentos de avaliação por desempenhos",
      type: "Ferramenta",
      icon: File,
      count: 12,
      category: "avaliacao"
    },
    {
      title: "Guias Metodológicos",
      description: "Orientações para aplicação de metodologias ativas",
      type: "Guia",
      icon: Book,
      count: 8,
      category: "metodologia"
    },
    {
      title: "Materiais de Formação",
      description: "Apresentações e recursos das capacitações realizadas",
      type: "Apresentação",
      icon: Folder,
      count: 50,
      category: "formacao"
    },
    {
      title: "Casos de Sucesso",
      description: "Relatos de implementação bem-sucedida do modelo E2A",
      type: "Estudo",
      icon: Book,
      count: 20,
      category: "casos"
    }
  ];

  const memories = [
    {
      title: "Simpósio Docente 2024",
      date: "Agosto 2024",
      participants: "1200+ docentes",
      description: "Entre códigos e corações: o eu docente na era da IA"
    },
    {
      title: "Mostra de Aprendizagem Dual",
      date: "Novembro 2024", 
      participants: "500+ projetos",
      description: "Apresentação dos melhores trabalhos de ensino dual"
    },
    {
      title: "Workshop Competências Docentes",
      date: "Setembro 2024",
      participants: "800+ participantes",
      description: "Desenvolvimento de competências para o século XXI"
    }
  ];

  return (
    <section id="materiais" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Materiais de Apoio
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Repositório completo de recursos pedagógicos
            </p>
          </div>

          {/* Repository Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Repositório de Documentos e Modelos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <material.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {material.title}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {material.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{material.count}</div>
                        <div className="text-xs text-muted-foreground">arquivos</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      {material.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Acessar Materiais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Memories Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Memórias</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Reviva os momentos especiais de nossa jornada pedagógica. Acesse apresentações, 
              vídeos e materiais dos principais eventos e formações realizadas.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {memories.map((memory, index) => (
                <Card key={index} className="bg-gradient-card shadow-card border-border/50 group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {memory.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{memory.date}</Badge>
                      <Badge variant="outline">{memory.participants}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground/80 mb-4">
                      {memory.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Ver Memórias
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card shadow-elegant border-border/50 inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  Precisa de algum material específico?
                </h3>
                <p className="text-card-foreground/80 mb-6">
                  Nossa equipe pedagógica está sempre desenvolvendo novos recursos. 
                  Entre em contato para solicitar materiais ou sugerir novos conteúdos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero">
                    Solicitar Material
                  </Button>
                  <Button variant="outline">
                    Sugerir Conteúdo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
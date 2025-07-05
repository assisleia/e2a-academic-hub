import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SupportSection() {
  return (
    <section id="suporte" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Suporte e Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para apoiar sua jornada pedagógica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Section */}
            <div className="space-y-8">
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-e2a-purple">Contatos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Time Pedagógico</h4>
                      <p className="text-sm text-card-foreground/80">pedagogico@anima.com.br</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Suporte Técnico</h4>
                      <p className="text-sm text-card-foreground/80">suporte@anima.com.br</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Coordenação Acadêmica</h4>
                      <p className="text-sm text-card-foreground/80">coordenacao@anima.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-e2a-magenta">Fale com o Time Pedagógico</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-card-foreground mb-2 block">
                          Nome
                        </label>
                        <Input placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-card-foreground mb-2 block">
                          E-mail
                        </label>
                        <Input type="email" placeholder="seu.email@instituicao.edu.br" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-2 block">
                        Instituição
                      </label>
                      <Input placeholder="Nome da sua instituição" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-2 block">
                        Assunto
                      </label>
                      <Input placeholder="Qual o tema da sua dúvida?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-2 block">
                        Mensagem
                      </label>
                      <Textarea 
                        placeholder="Descreva sua dúvida ou solicitação..."
                        rows={4}
                      />
                    </div>
                    <Button variant="hero" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <Card className="bg-gradient-card shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-e2a-blue">Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="item-1" className="border-border/50">
                      <AccordionTrigger className="text-left">
                        Como posso acessar os materiais de apoio?
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground/80">
                        Os materiais estão disponíveis na seção "Materiais de Apoio" desta plataforma. 
                        Você pode navegar pelos documentos, modelos e memórias de formações anteriores. 
                        Todos os materiais são exclusivos para uso das marcas licenciadas Ânima.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-border/50">
                      <AccordionTrigger className="text-left">
                        Como me inscrever na pós-graduação Futuros Acadêmicos?
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground/80">
                        As inscrições para a pós-graduação são realizadas através do link disponível na seção "Formação". 
                        Consulte o edital completo para conhecer os requisitos e prazos. 
                        O processo inclui análise curricular e entrevista.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-border/50">
                      <AccordionTrigger className="text-left">
                        Como implementar o modelo E2A na minha disciplina?
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground/80">
                        Comece explorando a seção "Modelo Acadêmico" para entender os fundamentos. 
                        Depois, acesse os templates de aula e planos de ensino na seção "Currículo e Planejamento". 
                        Recomendamos também participar das trilhas de formação disponíveis.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-border/50">
                      <AccordionTrigger className="text-left">
                        Onde encontro as gravações das formações anteriores?
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground/80">
                        Todas as gravações e materiais das formações realizadas estão na seção "Formação" &gt; "Formações Realizadas". 
                        Os conteúdos são organizados por tema e incluem apresentações, vídeos e recursos complementares.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-border/50">
                      <AccordionTrigger className="text-left">
                        Como posso contribuir com o desenvolvimento do modelo E2A?
                      </AccordionTrigger>
                      <AccordionContent className="text-card-foreground/80">
                        Sua experiência é valiosa! Você pode compartilhar casos de sucesso, sugerir melhorias 
                        e participar dos grupos de discussão. Entre em contato com o time pedagógico para 
                        propor colaborações e contribuições.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
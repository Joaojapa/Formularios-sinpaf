import { Link } from "react-router-dom";
import { FileText, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const forms = [
    {
      id: "ap",
      title: "AP - Autorização de Pagamento",
      description: "Formulário para autorização de pagamentos",
      path: "/ap",
    },
    {
      id: "as",
      title: "AS - Autorização de Suprimento",
      description: "Formulário para autorização de suprimentos",
      path: "/as",
    },
    {
      id: "av",
      title: "AV - Autorização de Viagem",
      description: "Formulário para autorização de viagens",
      path: "/av",
    },
    {
      id: "ar",
      title: "AR - Autorização de Recebimento",
      description: "Formulário para autorização de recebimentos",
      path: "/ar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            SINPAF - Formulários Digitais
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sindicato Nacional dos Trabalhadores de Pesquisa e Desenvolvimento Agropecuário
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {forms.map((form) => (
            <Card key={form.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {form.title}
                </CardTitle>
                <CardDescription>{form.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={form.path}>
                  <Button className="w-full">
                    Acessar Formulário
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>Como funciona?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">1. Escolha o formulário</h3>
                  <p className="text-sm text-muted-foreground">
                    Selecione o tipo de autorização que deseja preencher
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">2. Preencha os dados</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete todos os campos necessários do formulário digital
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Send className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">3. Baixe o formulário</h3>
                  <p className="text-sm text-muted-foreground">
                    Clique em gerar para criar o PDF do formulário preenchido
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;

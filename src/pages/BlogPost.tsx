import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { blogPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";
import { whatsappUrl } from "@/lib/company";

const categoryLabels: Record<string, string> = {
  cameras: "Câmeras",
  "cerca-eletrica": "Cerca elétrica",
  "portao-eletronico": "Portão eletrônico",
  alarme: "Alarme",
  dicas: "Dicas",
  manutencao: "Manutenção",
};

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((item) => item.category === post.category && item.id !== post.id).slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    const title = post.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        // Compartilhamento cancelado pelo usuário.
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copiado",
          description: "O link do artigo foi copiado para a área de transferência.",
        });
      } catch (error) {
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o link.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" tabIndex={-1} className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Caminho de navegação">
            <Link to="/" className="hover:text-foreground">
              Início
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
              Voltar ao blog
            </Link>
          </Button>

          <article>
            <header className="mb-8">
              <Badge variant="outline" className="mb-4">
                {categoryLabels[post.category] ?? "Conteúdo"}
              </Badge>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar aria-hidden="true" focusable="false" className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User aria-hidden="true" focusable="false" className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div>{post.readTime} min de leitura</div>
                </div>

                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 aria-hidden="true" focusable="false" className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </header>

            <div className="aspect-video mb-8 overflow-hidden rounded-xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <div className="space-y-6 text-foreground">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("##")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("###")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-primary text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Precisa de ajuda com segurança eletrônica?</h3>
                <p className="text-white/90 mb-6">
                  Envie sua dúvida pelo WhatsApp e informe qual serviço você procura.
                </p>
                <a
                  href={whatsappUrl(`Olá! Li o artigo "${post.title}" e gostaria de mais informações.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com a Prevent Master no WhatsApp, abre em nova aba"
                  className="btn-whatsapp bg-white text-primary hover:bg-white/90"
                >
                  Falar com a Prevent Master
                </a>
              </CardContent>
            </Card>
          </article>

          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Artigos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt.substring(0, 100)}...</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm"
                        >
                          Ler mais
                          <ArrowRight aria-hidden="true" focusable="false" className="h-3 w-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;

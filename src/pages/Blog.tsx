import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { blogPosts } from "@/data/blogPosts";
import { whatsappUrl } from "@/lib/company";

const categoryLabels: Record<string, string> = {
  all: "Todos",
  cameras: "Câmeras",
  "cerca-eletrica": "Cerca elétrica",
  "portao-eletronico": "Portão eletrônico",
  alarme: "Alarme",
  dicas: "Dicas",
  manutencao: "Manutenção",
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "cameras", "cerca-eletrica", "portao-eletronico", "alarme", "dicas", "manutencao"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero py-16" aria-labelledby="blog-title">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Blog da Prevent Master</h1>
            <p className="text-xl text-white/90 mb-8">
              Conteúdos informativos sobre proteção patrimonial, instalação e manutenção.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search aria-hidden="true" focusable="false" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/80 h-4 w-4" />
              <Input
                type="text"
                aria-label="Buscar artigos"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" tabIndex={-1} className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar artigos por categoria">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>
              <p className="sr-only" aria-live="polite">
                {filteredPosts.length} artigo{filteredPosts.length === 1 ? "" : "s"} encontrado
                {filteredPosts.length === 1 ? "" : "s"}.
              </p>

              {featuredPost && (
                <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-3">
                        Destaque
                      </Badge>
                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                      </h2>
                      <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar aria-hidden="true" focusable="false" className="h-4 w-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User aria-hidden="true" focusable="false" className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        Ler artigo completo
                        <ArrowRight aria-hidden="true" focusable="false" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <Badge variant="outline" className="w-fit mb-2">
                        {categoryLabels[post.category]}
                      </Badge>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar aria-hidden="true" focusable="false" className="h-4 w-4" />
                          {post.date}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
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

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">Nenhum artigo encontrado com os filtros selecionados.</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="bg-gradient-primary text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">Precisa de orientação?</h3>
                    <p className="text-white/90 mb-4">
                      Fale conosco via WhatsApp para tirar dúvidas e solicitar um orçamento.
                    </p>
                    <a
                      href={whatsappUrl("Olá! Vi o blog da Prevent Master e gostaria de tirar dúvidas sobre proteção patrimonial.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Falar com a Prevent Master no WhatsApp, abre em nova aba"
                      className="btn-whatsapp w-full bg-white text-primary hover:bg-white/90"
                    >
                      Falar no WhatsApp
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Conteúdos em destaque</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {blogPosts.slice(0, 5).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight hover:text-primary transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Categorias</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = blogPosts.filter((post) => post.category === category).length;
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          aria-pressed={selectedCategory === category}
                          className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span className="text-sm">{categoryLabels[category]}</span>
                          <Badge variant="secondary" className="text-xs">
                            {count}
                          </Badge>
                        </button>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;

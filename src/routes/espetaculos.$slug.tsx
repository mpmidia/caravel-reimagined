import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { ShowView, showMeta } from "../components/site/ShowView";
import { getShow, type Show } from "../lib/shows";

export const Route = createFileRoute("/espetaculos/$slug")({
  loader: ({ params }) => {
    const show = getShow(params.slug);
    if (!show) throw notFound();
    return { show };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Espetáculo não encontrado — Cia Alvo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return showMeta(loaderData.show.slug);
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="container-x py-32 text-center">
        <h1 className="font-display text-5xl">Espetáculo não encontrado</h1>
        <Link to="/espetaculos" className="mt-8 inline-flex text-primary underline">
          Ver todos os espetáculos
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: () => {
    const { show } = Route.useLoaderData() as { show: Show };
    return <ShowView show={show} />;
  },
});
import { createFileRoute } from "@tanstack/react-router";
import { ShowView, showMeta } from "../components/site/ShowView";
import { getShow } from "../lib/shows";

const SLUG = "guardadoemsilencio";

export const Route = createFileRoute("/espetaculos/guardadoemsilencio")({
  head: () => showMeta(SLUG),
  component: () => <ShowView show={getShow(SLUG)!} />,
});
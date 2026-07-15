import { createFileRoute } from "@tanstack/react-router";
import { ShowView, showMeta } from "../components/site/ShowView";
import { getShow } from "../lib/shows";

const SLUG = "meupequenouniverso";

export const Route = createFileRoute("/espetaculos/meupequenouniverso")({
  head: () => showMeta(SLUG),
  component: () => <ShowView show={getShow(SLUG)!} />,
});
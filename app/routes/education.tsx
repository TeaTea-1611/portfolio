import { Education } from "~/components/education";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to my universe!" },
  ];
}

export default function Home() {
  return <Education />;
}

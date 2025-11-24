import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import { FortuneApp } from "@/components/fortune-app";

export { generateMetadata };

export default function Home() {
  return <FortuneApp />;
}

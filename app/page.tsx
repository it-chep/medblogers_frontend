import HomePage from "@/src/views/home/HomePage";
import MySiteSchema from "@/src/views/home/SiteSchema";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
      <>
        <MySiteSchema />
        <HomePage />
      </>
  );
}

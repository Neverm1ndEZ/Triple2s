import Blog from "@/components/home-page/Blog";
import FAQ from "@/components/home-page/FAQ";
import GridCards from "@/components/home-page/GridCards";
import Hero from "@/components/home-page/Hero";
import Info from "@/components/home-page/Info";
import Team from "@/components/home-page/Team";

export default function Home() {
	return (
		<div>
			<Hero />
			<GridCards />
			<Info />
			<Team />
			<Blog />
			<FAQ />
		</div>
	);
}

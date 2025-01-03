import Blog from "@/components/home-page/Blog";
import FAQAccordion from "@/components/home-page/FAQ";
import HeroMarquee from "@/components/service-page/HeroMarquee";
import ServiceInfo from "@/components/service-page/ServiceInfo";
import ServiceGridCards from "@/components/service-page/ServiceGridCards";
import ServiceHero from "@/components/service-page/ServiceHero";

export default function Service() {
	return (
		<div className="">
			<ServiceHero />
			<HeroMarquee />
			<ServiceGridCards />
			<ServiceInfo />
			<Blog />
			<FAQAccordion />
		</div>
	);
}

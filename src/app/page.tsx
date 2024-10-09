import Aviation from "@/components/LandingPage/Aviation";
import About from "@/components/LandingPage/About";
import Analytics from "@/components/LandingPage/Analytics";
import Banner from "@/components/LandingPage/Banner";
import Blogs from "@/components/LandingPage/Blogs";
import Brands from "@/components/LandingPage/Brands";
import Contact from "@/components/LandingPage/Contact";
import Courses from "@/components/LandingPage/Courses";
import Faqs from "@/components/LandingPage/Faqs";
import Gallery from "@/components/LandingPage/Gallery";
import Hero from "@/components/LandingPage/Hero";
import Join from "@/components/LandingPage/Join";
import Reasons from "@/components/LandingPage/Reasons";
import Testimonials from "@/components/LandingPage/Testimonials";
import WhyAirHostess from "@/components/LandingPage/WhyAirHostess";

export default function Home() {
	return (
		<>
			<Hero />
			<Banner />
			<About />
			<div className="my-10">
				<Analytics />
			</div>
			<Courses />
			<Reasons />
			<Join />
			<Brands />
			<Gallery />
			<Testimonials />
			<Faqs />
			<Aviation />
			<WhyAirHostess />
			<Blogs />
			<Contact />
		</>
	);
}

import HomePageComponent from "../components/HomePage";
import "../assets/css/base.css";
import Footer from "../components/footer";
import Seo from "../components/shared/seo";

const HomePage = () => {
	// Ici tu peux ajouter du SEO, wrapper, etc. si nécessaire
	return (
		<>
			<Seo title="Home" description="Home Page" url="home" />
			<HomePageComponent />
			<Footer />
		</>
	);
};

export default HomePage;

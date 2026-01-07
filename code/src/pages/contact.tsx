import ContactForm from "../components/contact_form";
import Seo from "../components/shared/seo";

const Contact = () => {
	return (
		<>
			<Seo title="Contact" description="Contact Page" url="/contact" />
			<h1>Contact</h1>
			<ContactForm />
		</>
	);
};

export default Contact;

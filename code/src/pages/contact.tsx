import styles from "../assets/css/contact.module.css";
import ContactForm from "../components/contact_form";
import Seo from "../components/shared/seo";

const Contact = () => {
	return (
		<>
			<Seo title="Contact" description="Contact Page" url="/contact" />

			<div className={styles.container}>
				<h1 className={styles.title}>Contact</h1>
				<ContactForm />
			</div>
		</>
	);
};

export default Contact;

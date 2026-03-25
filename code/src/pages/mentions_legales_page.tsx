import React from "react";
import LegalMentionsContent from "../components/mentions_legales";
import Seo from "../components/shared/seo";

const LegalMentions = () => {
	return (
		<>
			<Seo
				title="Mentions légales"
				description="Mentions légales de notre site Shadee"
				url="/legal"
			/>

			<main>
				<LegalMentionsContent />
			</main>
		</>
	);
};

export default LegalMentions;

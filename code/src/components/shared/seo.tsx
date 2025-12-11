import type { SeoProps } from "./seo_props";

const Seo = ({ title, description }: SeoProps) => {
	return (
		<>
			{/* 50 caractères max*/}
			<title>{`Shadee - ${title}`}</title>
			{/* 150 caractères max*/}
			<meta name="description" content={`Shadee - ${description}`} />

			{/* open graph */}
			<meta property="og:title" content="{`Shadee-${title}`}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://shadee.com${url}`}" />
			<meta property="og:image" content="../img../shadeelogo.png" />
			<meta property="og:description" content={`Shadee-${description}`} />

			{/* twitter cards */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content="{`Shadee-${title}`}" />
			<meta name="twitter:description" content={`Shadee-${description}`} />
			<meta name="twitter:image" content="https://yoursite.com/image.jpg" />
		</>
	);
};

export default Seo;

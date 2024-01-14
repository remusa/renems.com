import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
	href?: string;
	frontmatter: CollectionEntry<"blog">["data"];
	secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
	const { title, pubDatetime, description, readingTime } = frontmatter;

	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: "text-lg font-medium decoration-slice hover:underline",
	};

	return (
		<li className="my-6">
			<a
				href={href}
				className="inline-block decoration-slice text-lg font-medium text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				{secHeading ? <h2 {...headerProps}>{title}</h2> : <h3 {...headerProps}>{title}</h3>}
			</a>
			<Datetime datetime={pubDatetime} readingTime={readingTime} />
			<p>{description}</p>
		</li>
	);
}

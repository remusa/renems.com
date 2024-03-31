import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";

export async function GET() {
	const posts = await getCollection("blog");
	const sortedPosts = await getSortedPosts(posts);
	return rss({
		title: SITE.title,
		description: SITE.desc,
		site: SITE.website,
		items: sortedPosts.map(({ data }) => ({
			link: `posts/${slugify(data)}`,
			title: data.title,
			description: data.description,
			pubDate: new Date(data.pubDatetime),
		})),
	});
}

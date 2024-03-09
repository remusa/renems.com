import { type CollectionEntry, getCollection } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
	const posts = await getCollection("blog").then((p) =>
		p.filter(({ data }) => !data.draft && !data.ogImage),
	);

	return posts.map((post) => ({
		params: { slug: slugifyStr(post.data.title) },
		props: post,
	}));
}

export const GET: APIRoute = async ({ props }) =>
	new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
		headers: { "Content-Type": "image/png" },
	});

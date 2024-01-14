import slugify from "./slugify";
import type { CollectionEntry } from "astro:content";

export async function getReadingTime() {
	// Get all posts using glob. This is to get the updated frontmatter
	const globPosts = import.meta.glob("../content/blog/*.{md,mdx}") as Promise<
		CollectionEntry<"blog">["data"][]
	>;

	// Then, set those frontmatter value in a JS Map with key value pair
	const mapFrontmatter = new Map();
	const globPostsValues = Object.values(globPosts);
	await Promise.all(
		globPostsValues.map(async (globPost) => {
			const { frontmatter } = await globPost();
			mapFrontmatter.set(slugify(frontmatter), frontmatter.readingTime);
		}),
	);

	return mapFrontmatter;
}

async function getPostsWithRT(posts: CollectionEntry<"blog">[]) {
	const mapFrontmatter = await getReadingTime();
	return posts.map((post) => {
		post.data.readingTime = mapFrontmatter.get(slugify(post.data));
		return post;
	});
}

export default getPostsWithRT;

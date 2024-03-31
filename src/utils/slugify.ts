import type { CollectionEntry } from "astro:content";
import { slug as slugger } from "github-slugger";

export function slugifyStr(str: string) {
	return slugger(str);
}

function slugify(post: CollectionEntry<"blog">["data"]) {
	return post.postSlug ? slugger(post.postSlug) : slugger(post.title);
}

export function slugifyAll(arr: string[]) {
	return arr.map((str) => slugifyStr(str));
}

export default slugify;

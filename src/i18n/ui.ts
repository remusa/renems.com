export const languages = {
	en: "English",
	es: "Español",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export type StringMap = {
	[key: string]: {
		[key: string]: string;
	};
};

export const ui: StringMap = {
	en: {
		"nav.home": "home",
		"nav.about": "about",
		"nav.posts": "posts",
		"nav.projects": "projects",
		"nav.tags": "tags",
		"nav.now": "now",
		"nav.search": "search",
		"index.hi": "hello, i'm",
		"index.profession": "software engineer",
		"index.summary":
			"i'm a software engineer who enjoys building useful things and learning new technologies",
		"index.featured": "featured",
		"index.social-links": "social links",
		"index.recent-posts": "recent posts",
		"index.all-posts": "all posts",
		"footer.copyright": "copyright",
		"footer.all-rights-reserved": "all rights reserved",
		"datetime.posted-on": "posted on",
		"components.code": "code",
		"layout.go-back": "go back",
		"posts.title": "posts",
		"posts.desc": "all the articles i've posted",
		"projects.title": "projects",
		"projects.desc": "all the projects i've created",
		"tags.title": "tags",
		"tags.desc": "all the tags used in posts",
		"layout.prev": "prev",
		"layout.next": "next",
	},
	es: {
		"nav.home": "inicio",
		"nav.about": "acerca de",
		"nav.posts": "entradas",
		"nav.projects": "proyectos",
		"nav.tags": "etiquetas",
		"nav.now": "ahora",
		"nav.search": "buscar",
		"index.hi": "Hola, soy",
		"index.profession": "ingeniero de software",
		"index.summary":
			"Soy un ingeniero de software que disfruta contruir cosas útiles y aprender nuevas tecnologías",
		"index.featured": "destacado",
		"index.social-links": "vínculos sociales",
		"index.recent-posts": "entradas recientes",
		"index.all-posts": "todas las entradas",
		"footer.copyright": "copyright",
		"footer.all-rights-reservado": "todos los derechos reservados",
		"fecha.posted-on": "publicado",
		"components.code": "código",
		"layout.go-back": "regresar",
		"posts.title": "entradas",
		"posts.desc": "todos los artículos que he publicado",
		"projects.title": "proyectos",
		"projects.desc": "todos los proyectos que he creado",
		"tags.title": "etiquetas",
		"tags.desc": "todas las etiquetas utilizadas en las entradas",
		"layout.prev": "anterior",
		"layout.next": "siguiente",
	},
} as const;

export const routes = {
	en: {
		home: "",
		about: "about",
		posts: "posts",
		projects: "projects",
		tags: "tags",
		now: "now",
		search: "search",
	},
	es: {
		home: "",
		about: "about",
		posts: "posts",
		projects: "projects",
		tags: "tags",
		now: "now",
		search: "search",
	},
};

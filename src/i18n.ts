// Translations. English lives at the site root, French under /fr/.

export type Lang = 'en' | 'fr';
export const LANGS: Lang[] = ['en', 'fr'];

/** Language of the current page, from its URL. */
export function getLang(pathname: string): Lang {
	return /^\/fr(\/|$)/.test(pathname) ? 'fr' : 'en';
}

/** Prefix an internal path with the language (`/projects` → `/fr/projects`). */
export function localePath(lang: Lang, path: string): string {
	if (lang === 'en') return path;
	return path === '/' ? '/fr/' : `/fr${path}`;
}

/** Same page in the other language (blog posts only exist in English → writing index). */
export function switchPath(pathname: string, to: Lang): string {
	let base = pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
	if (/^\/blog\/.+/.test(base)) base = '/blog/';
	return localePath(to, base);
}

export const UI = {
	en: {
		siteDescription:
			'C++ developer focused on simulation, performance and AI. Bachelor in games programming (SAE Institute Geneva).',
		nav: { home: 'Home', projects: 'Projects', writing: 'Writing', about: 'About' },
		switchTo: 'Version française',
		footer: 'Built with Astro',

		heroEyebrow: 'Software developer · Geneva',
		heroTitle: "Hi, I'm Jayson Malet.",
		heroRole: 'C++ developer — simulation, performance, and now AI.',
		heroLede:
			'I write fast, measurable C++: a real-time fluid simulation for my Bachelor thesis, a 2D physics engine, networked and 3D projects. I am now applying the same skills to machine learning and data.',
		heroAvailability: 'Open to junior roles and internships in Geneva and remote.',
		ctaProjects: 'View projects',
		ctaContact: 'Contact me',
		metaSchool: 'Bachelor, Games Programming — SAE Institute',
		metaLangs: 'FR · EN',

		focusTitle: 'What I bring',
		focus: [
			{
				title: 'Modern C++ & performance',
				body: 'C++20, profiling with Tracy, CSV benchmarks to compare each optimisation. I measure before I optimise.',
			},
			{
				title: 'Simulation & algorithms',
				body: 'Physics engines, cellular automata, spatial data structures (quadtrees): turning maths into reliable, testable code.',
			},
			{
				title: 'AI & data (in progress)',
				body: 'Python and machine-learning fundamentals. Next step: neural models trained on data from my own simulations.',
			},
			{
				title: 'Engineering practice',
				body: 'Git, CMake/vcpkg, client-server networking, team projects with written post-mortems.',
			},
		],

		projectsTitle: 'Selected projects',
		allProjects: 'All projects →',
		code: 'Code ↗',
		writeup: 'Read the write-up',
		writingTitle: 'Recent writing',
		allPosts: 'All posts →',

		projectsPageTitle: "Things I've built",
		projectsPageIntro:
			'Mostly C++ systems, simulation and graphics — the algorithmic foundations I am now bringing into AI. More on',

		writingPageTitle: 'Notes & write-ups',
		writingPageIntro:
			'Technical breakdowns of what I build: how it works, the choices I made, and what I learned.',
		writingNote: '',

		aboutTitle: 'About',
		about: [
			'I am a developer based in <strong>Geneva</strong> with a Bachelor in games programming from the <strong>SAE Institute</strong>. What I enjoy most is the engineering underneath: <strong>C++</strong> that has to be correct and fast, simulations built from first principles, and systems that are measured rather than guessed.',
			'My Bachelor thesis, <strong>Hana-no-saku-ki</strong>, is a real-time 2D fluid simulation based on cellular automata, without a physics engine. A large part of the work was <strong>profiling and optimisation</strong> with Tracy and benchmarks.',
			'I have also built a <strong>2D physics engine</strong> (forces, collisions, quadtree), a <strong>networked chess game</strong> (client-server), real-time <strong>3D graphics</strong> and GLSL shaders, and worked in a team on <strong>Inner Whale</strong>.',
			'I am now moving towards <strong>AI and data</strong>: the same foundations — algorithms, numerical thinking, performance — are what that field runs on.',
		],
		skillsTitle: 'Skills',
		skills: {
			Languages: ['C++ (C++20)', 'Python', 'C#', 'GLSL'],
			'Systems & simulation': ['Physics engines', 'Cellular automata', 'Quadtrees', 'Collision detection'],
			'Performance & tooling': ['Tracy', 'Benchmarking', 'ImGui', 'CMake / vcpkg', 'Git'],
			'Graphics & networking': ['OpenGL', 'SFML / SDL2', 'Shaders', 'Client-server (TCP)'],
			Learning: ['Machine learning', 'Python for data'],
			Languages_spoken: ['French', 'English'],
		} as Record<string, string[]>,
		skillLabels: { Languages_spoken: 'Spoken languages' } as Record<string, string>,
		contactTitle: 'Get in touch',
		contactText: 'Open to junior roles, internships and interesting problems.',
		email: 'Email',
		back: '← All writing',
		updated: 'Updated',
	},

	fr: {
		siteDescription:
			'Développeur C++ orienté simulation, performance et IA. Bachelor en programmation de jeux (SAE Institute Genève).',
		nav: { home: 'Accueil', projects: 'Projets', writing: 'Articles', about: 'À propos' },
		switchTo: 'English version',
		footer: 'Fait avec Astro',

		heroEyebrow: 'Développeur logiciel · Genève',
		heroTitle: 'Bonjour, je suis Jayson Malet.',
		heroRole: 'Développeur C++ — simulation, performance, et maintenant l’IA.',
		heroLede:
			'J’écris du C++ rapide et mesurable : une simulation de fluide en temps réel pour mon travail de Bachelor, un moteur physique 2D, des projets réseau et 3D. J’applique aujourd’hui ces compétences au machine learning et aux données.',
		heroAvailability: 'Ouvert à un poste junior ou un stage, à Genève ou à distance.',
		ctaProjects: 'Voir les projets',
		ctaContact: 'Me contacter',
		metaSchool: 'Bachelor, programmation de jeux — SAE Institute',
		metaLangs: 'FR · EN',

		focusTitle: 'Ce que j’apporte',
		focus: [
			{
				title: 'C++ moderne & performance',
				body: 'C++20, profilage avec Tracy, benchmarks CSV pour comparer chaque optimisation. Je mesure avant d’optimiser.',
			},
			{
				title: 'Simulation & algorithmes',
				body: 'Moteurs physiques, automates cellulaires, structures spatiales (quadtrees) : transformer des maths en code fiable et testable.',
			},
			{
				title: 'IA & données (en cours)',
				body: 'Python et bases du machine learning. Prochaine étape : des modèles neuronaux entraînés sur les données de mes propres simulations.',
			},
			{
				title: 'Pratiques d’ingénierie',
				body: 'Git, CMake/vcpkg, réseau client-serveur, projets en équipe avec post-mortems écrits.',
			},
		],

		projectsTitle: 'Projets choisis',
		allProjects: 'Tous les projets →',
		code: 'Code ↗',
		writeup: 'Lire l’article',
		writingTitle: 'Derniers articles',
		allPosts: 'Tous les articles →',

		projectsPageTitle: 'Ce que j’ai construit',
		projectsPageIntro:
			'Surtout du C++ : systèmes, simulation et graphismes — les bases algorithmiques que j’applique maintenant à l’IA. Plus sur',

		writingPageTitle: 'Articles techniques',
		writingPageIntro:
			'Des explications détaillées de mes projets : comment ils marchent, mes choix, et ce que j’en ai appris.',
		writingNote: 'Les articles sont rédigés en anglais.',

		aboutTitle: 'À propos',
		about: [
			'Je suis développeur à <strong>Genève</strong>, titulaire d’un Bachelor en programmation de jeux de la <strong>SAE Institute</strong>. Ce qui me plaît le plus, c’est l’ingénierie derrière : du <strong>C++</strong> qui doit être juste et rapide, des simulations construites à partir des principes de base, et des systèmes qu’on mesure au lieu de deviner.',
			'Mon travail de Bachelor, <strong>Hana-no-saku-ki</strong>, est une simulation de fluide 2D en temps réel basée sur des automates cellulaires, sans moteur physique. Une grande partie du travail a été le <strong>profilage et l’optimisation</strong> avec Tracy et des benchmarks.',
			'J’ai aussi réalisé un <strong>moteur physique 2D</strong> (forces, collisions, quadtree), un <strong>jeu d’échecs en réseau</strong> (client-serveur), de la <strong>3D temps réel</strong> et des shaders GLSL, et travaillé en équipe sur <strong>Inner Whale</strong>.',
			'Je m’oriente maintenant vers <strong>l’IA et les données</strong> : les mêmes bases — algorithmes, raisonnement numérique, performance — sont au cœur de ce domaine.',
		],
		skillsTitle: 'Compétences',
		skills: {
			Langages: ['C++ (C++20)', 'Python', 'C#', 'GLSL'],
			'Systèmes & simulation': ['Moteurs physiques', 'Automates cellulaires', 'Quadtrees', 'Détection de collisions'],
			'Performance & outils': ['Tracy', 'Benchmarks', 'ImGui', 'CMake / vcpkg', 'Git'],
			'Graphismes & réseau': ['OpenGL', 'SFML / SDL2', 'Shaders', 'Client-serveur (TCP)'],
			'En apprentissage': ['Machine learning', 'Python pour les données'],
			'Langues parlées': ['Français', 'Anglais'],
		} as Record<string, string[]>,
		skillLabels: {} as Record<string, string>,
		contactTitle: 'Me contacter',
		contactText: 'Ouvert à un poste junior, un stage ou des projets intéressants.',
		email: 'E-mail',
		back: '← Tous les articles',
		updated: 'Mis à jour le',
	},
};

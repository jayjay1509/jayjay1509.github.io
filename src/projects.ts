// Real projects, pulled from Jayson's public GitHub work.
// `featured` ones show on the home page; all of them show on /projects.
import type { Lang } from './i18n';

export type Project = {
	title: Record<Lang, string>;
	blurb: Record<Lang, string>;
	tags: string[];
	repo?: string;
	link?: string; // internal write-up (English only)
	image?: string;
	featured?: boolean;
};

export const PROJECTS: Project[] = [
	{
		title: {
			en: 'Hana-no-saku-ki — Real-time Fluid Simulation',
			fr: 'Hana-no-saku-ki — Simulation de fluide en temps réel',
		},
		blurb: {
			en: 'Bachelor thesis: an interactive 2D water simulation built on cellular automata — no physics engine. Local rules (gravity, spreading, compression, pressure) produce emergent fluid behaviour in real time, with profiling-driven performance work (Tracy captures and CSV benchmarks to compare each optimisation pass).',
			fr: 'Travail de Bachelor : une simulation d’eau 2D interactive basée sur des automates cellulaires, sans moteur physique. Des règles locales (gravité, écoulement, compression, pression) font émerger le comportement du fluide en temps réel, avec un travail d’optimisation guidé par le profilage (captures Tracy et benchmarks CSV pour comparer chaque étape).',
		},
		tags: ['C++20', 'SFML', 'ImGui', 'Tracy', 'Simulation', 'Performance'],
		repo: 'https://github.com/jayjay1509/Hana-no-saku-ki',
		featured: true,
	},
	{
		title: { en: 'Namakemono — 2D Physics Engine', fr: 'Namakemono — Moteur physique 2D' },
		blurb: {
			en: 'A custom C++ physics engine: forces, collisions and triggers, with a quadtree to keep broad-phase collision detection fast as the object count grows.',
			fr: 'Un moteur physique en C++ : forces, collisions et triggers, avec un quadtree pour garder une détection de collisions rapide quand le nombre d’objets augmente.',
		},
		tags: ['C++', 'SDL2', 'Quadtree', 'Physics'],
		repo: 'https://github.com/jayjay1509',
		link: '/blog/first-post/',
		image: '/namakemono.jpg',
		featured: true,
	},
	{
		title: { en: 'Multiplayer Chess — Client/Server', fr: 'Échecs en réseau — Client/Serveur' },
		blurb: {
			en: 'Networked chess written in C++: a server authoritative over game state and clients that connect over TCP/IP. An exercise in networking, protocol design and state synchronisation.',
			fr: 'Un jeu d’échecs en réseau en C++ : un serveur qui fait foi sur l’état de la partie et des clients connectés en TCP/IP. Un exercice de réseau, de conception de protocole et de synchronisation.',
		},
		tags: ['C++', 'Networking', 'TCP/IP', 'CMake'],
		repo: 'https://github.com/jayjay1509/chess-game-multi',
		featured: true,
	},
	{
		title: { en: '3D Scene — Real-time Graphics', fr: 'Scène 3D — Rendu temps réel' },
		blurb: {
			en: 'A real-time 3D scene in C++ exploring rendering, lighting and shaders — normal mapping, materials and camera work.',
			fr: 'Une scène 3D temps réel en C++ : rendu, éclairage et shaders — normal mapping, matériaux et caméra.',
		},
		tags: ['C++', 'OpenGL', 'Graphics', 'Shaders'],
		repo: 'https://github.com/jayjay1509/scene3d',
		link: '/blog/using-mdx/',
		image: '/3d_scene1.png',
		featured: true,
	},
	{
		title: { en: 'Dynamic Color-Palette Shader', fr: 'Shader à palette de couleurs' },
		blurb: {
			en: 'A GLSL shader generating an animated, palette-driven visual effect — trigonometric color cycling and distance-based glow in real time.',
			fr: 'Un shader GLSL qui génère un effet animé à partir d’une palette : cycle de couleurs trigonométrique et halo selon la distance, en temps réel.',
		},
		tags: ['GLSL', 'Shaders', 'Graphics'],
		link: '/blog/third-post/',
		image: '/shader.png',
	},
];

// Real projects, pulled from Jayson's public GitHub work.
// `featured` ones show on the home page; all of them show on /projects.

export type Project = {
	title: string;
	blurb: string;
	tags: string[];
	repo?: string;
	link?: string; // internal write-up or external page
	linkLabel?: string;
	image?: string;
	featured?: boolean;
};

export const PROJECTS: Project[] = [
	{
		title: 'Hana-no-saku-ki — Real-time Fluid Simulation',
		blurb:
			'Bachelor thesis: an interactive 2D water simulation built on cellular automata — no physics engine. Local rules (gravity, spreading, compression, pressure) produce emergent fluid behaviour in real time, with profiling-driven performance work.',
		tags: ['C++20', 'SFML', 'ImGui', 'Tracy', 'Simulation', 'Performance'],
		repo: 'https://github.com/jayjay1509/Hana-no-saku-ki',
		image: '/3d_scene5.png',
		featured: true,
	},
	{
		title: 'Namakemono — 2D Physics Engine',
		blurb:
			'A custom C++ physics engine: forces, collisions and triggers, with a quadtree to keep broad-phase collision detection fast as the object count grows.',
		tags: ['C++', 'SDL2', 'Quadtree', 'Physics'],
		repo: 'https://github.com/jayjay1509',
		link: '/blog/first-post/',
		linkLabel: 'Read the write-up',
		image: '/namakemono.jpg',
		featured: true,
	},
	{
		title: 'Multiplayer Chess — Client/Server',
		blurb:
			'Networked chess written in C++: a server authoritative over game state and clients that connect over TCP/IP. An exercise in networking, protocol design and state synchronisation.',
		tags: ['C++', 'Networking', 'TCP/IP', 'CMake'],
		repo: 'https://github.com/jayjay1509/chess-game-multi',
		featured: true,
	},
	{
		title: '3D Scene — Real-time Graphics',
		blurb:
			'A real-time 3D scene in C++ exploring rendering, lighting and shaders — normal mapping, materials and camera work.',
		tags: ['C++', 'OpenGL', 'Graphics', 'Shaders'],
		repo: 'https://github.com/jayjay1509/scene3d',
		link: '/blog/using-mdx/',
		linkLabel: 'Read the write-up',
		image: '/3d_scene1.png',
		featured: true,
	},
	{
		title: 'Dynamic Color-Palette Shader',
		blurb:
			'A GLSL shader generating an animated, palette-driven visual effect — trigonometric color cycling and distance-based glow in real time.',
		tags: ['GLSL', 'Shaders', 'Graphics'],
		link: '/blog/third-post/',
		linkLabel: 'Read the write-up',
		image: '/shader.png',
	},
	{
		title: 'Hana-no-saku-ki benchmarking',
		blurb:
			'The measurement side of the simulation work: CSV benchmark export and Tracy integration to compare optimisation passes objectively rather than by feel.',
		tags: ['C++', 'Benchmarking', 'Tracy', 'Profiling'],
		repo: 'https://github.com/jayjay1509/Hana-no-saku-ki',
		image: '/tracy1.png',
	},
];

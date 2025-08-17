import {
	faSquareInstagram,
	faSquareLinkedin,
	faSquareGithub,
	type IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import {
	faBriefcase,
	faChalkboardTeacher,
	faFlask,
	faGraduationCap,
	faIdBadge,
	faSquareEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { SvelteDate } from 'svelte/reactivity';

export const headerLinks = $state([
	{
		icon: faSquareInstagram,
		url: 'https://www.instagram.com/nathan.laha',
		ariaLabel: 'Follow me on Instagram'
	},
	{
		icon: faSquareLinkedin,
		url: 'https://www.linkedin.com/in/nlaha/',
		ariaLabel: 'Follow me on LinkedIn'
	},
	{
		icon: faSquareGithub,
		url: 'https://github.com/nlaha',
		ariaLabel: 'Follow me on GitHub'
	},
	{
		icon: faSquareEnvelope,
		url: 'mailto:nlaha@nlaha.com',
		ariaLabel: 'Send me an email'
	}
]);

export const educations: {
	institution: string;
	degree: string;
	year: number;
	icon: IconDefinition;
}[] = [
	{
		institution: 'Washington State University',
		degree: 'B.Sci Computer Science',
		year: 2025,
		icon: faGraduationCap
	}
];

export const experience: {
	position: string;
	company: string;
	startDate: SvelteDate;
	endDate?: SvelteDate;
	icon: IconDefinition;
	items: string[];
	url?: string;
}[] = [
	{
		position: 'Founding Software Engineer',
		company: 'Symbal',
		startDate: new SvelteDate(2025, 5, 5),
		endDate: undefined,
		icon: faBriefcase,
		items: [],
		url: 'https://symbal.ai'
	},
	{
		position: 'Software Engineer',
		company: 'Stealth Startup',
		startDate: new SvelteDate(2023, 10, 18),
		endDate: new SvelteDate(2025, 5, 5),
		icon: faBriefcase,
		items: [
			'Developed 3 full-stack web applications from scratch to meet business needs',
			'Set up an Azure tenant using Bicep IaC for continuous deployment',
			'Managed an Azure Kubernetes Service (AKS) cluster',
			'Enhanced an open-source project with new features',
			'Provided support for several production applications'
		]
	},
	{
		position: 'Software Engineer Intern',
		company: 'Premera',
		startDate: new SvelteDate(2024, 5, 5),
		endDate: new SvelteDate(2024, 8, 16),
		icon: faIdBadge,
		items: [
			'Fixed 15+ bugs in a C# back-end API',
			'Worked on an agile team',
			'Wrote test plans and utilized SQL to gather test data',
			'Used test driven development (TDD) to build applications',
			'Integrated application insights monitoring into several microservices'
		],
		url: 'https://premera.com'
	},
	{
		position: 'Systems Engineering Intern',
		company: 'Premera',
		startDate: new SvelteDate(2023, 5, 5),
		endDate: new SvelteDate(2023, 8, 16),
		icon: faIdBadge,
		items: [
			'Utilized Azure Policy to enforce HIPAA compliance across an Azure tenant',
			'Used Bicep and Terraform to interact with Azure',
			'Worked on an agile team utilizing Azure DevOps'
		],
		url: 'https://premera.com'
	},
	{
		position: 'Teaching Assistant',
		company: 'WSU VCEA',
		startDate: new SvelteDate(2022, 8, 20),
		endDate: new SvelteDate(2022, 12, 15),
		icon: faChalkboardTeacher,
		items: [
			'Taught a 3-hour lab section for 17 students',
			'Held office hours and provided one-on-one help for students',
			'Described C programming concepts during lab and office hours'
		],
		url: 'https://vcea.wsu.edu'
	},
	{
		position: 'Program Assistant',
		company: 'UW Medicine',
		startDate: new SvelteDate(2021, 1, 1),
		endDate: new SvelteDate(2025, 5, 5),
		icon: faFlask,
		items: [
			'Created data visualizations using Python and R',
			'Developed several production ready full-stack web apps in Python',
			'Worked with the Foy Lab to develop a machine learning approach for test interpretations'
		],
		url: 'https://foylab.xyz/'
	},
	{
		position: 'Volunteer',
		company: 'UW Medicine',
		startDate: new SvelteDate(2020, 1, 1),
		endDate: new SvelteDate(2021, 1, 1),
		icon: faFlask,
		items: [
			'Helped with several data science tasks using Python and R',
			'Converted a SQL script to R, allowing for easier development'
		],
		url: 'https://uwmedicine.org/'
	}
];

export const projects: {
	name: string;
	technologies: string[];
	url: string;
	github?: string;
}[] = [
	{
		name: 'Godot MIDI',
		technologies: ['C#', 'C++', 'Godot', 'MIDI', 'Open Source'],
		url: 'https://github.com/nlaha/godot-midi',
		github: 'nlaha/godot-midi'
	},
	{
		name: 'PlatformDataEngine',
		technologies: ['C#', 'SDL', 'SFML', 'Doxygen', 'GLSL'],
		url: 'https://github.com/nlaha/PlatformDataEngine',
		github: 'nlaha/PlatformDataEngine'
	},
	{
		name: 'turing-factorio',
		technologies: ['Lua'],
		url: 'https://github.com/nlaha/turing-factorio',
		github: 'nlaha/turing-factorio'
	}
];

export const arts: {
	name: string;
	description: string;
	steam?: string;
}[] = [
	{
		name: 'The Top (OST)',
		description:
			'Composed the original soundtrack for a game and assisted with programming advanced features. The soundtrack is available for purchase on Steam.',
		steam: 'https://store.steampowered.com/app/2097450/The_Top_Soundtrack/'
	}
];

export const sortedExperience = experience.sort(
	(a, b) => (b.endDate ?? new SvelteDate()).getTime() - (a.endDate ?? new SvelteDate()).getTime()
);

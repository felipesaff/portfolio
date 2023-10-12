export const myProjectsItems: Array<{
	livePreview: string;
	repoLink: string;
	thumb: string;
	stack: Array<string>;
	name: string;
}> = [
	{
		livePreview: 'https://weather-app-felipesaff.vercel.app/',
		repoLink: 'https://github.com/felipesaff/weather-app',
		stack: ['React', 'NextJS', 'TypeScript'],
		thumb: '/images/weatherAppProject.png',
		name: 'Weather App',
	},
	{
		livePreview: 'https://felipesaff.github.io/todoList/',
		name: 'ToDo App',
		repoLink: 'https://github.com/felipesaff/todoList',
		stack: ['React', 'Vite', 'TypeScript', 'Redux'],
		thumb: '/images/todoAppProject.png',
	},
	{
		livePreview: 'https://felipesaff.github.io/calculator/',
		name: 'Calculator',
		repoLink: 'https://github.com/felipesaff/calculator',
		stack: ['React', 'CRA', 'JavaScript'],
		thumb: '/images/calculatorProject.png',
	},
	{
		livePreview: 'https://imc-calculator-zeta-liart.vercel.app/',
		name: 'IMC calculator',
		repoLink: 'https://github.com/felipesaff/imc-calculator',
		stack: ['React', 'Vite', 'TypeScript'],
		thumb: '/images/imcProject.png',
	},
];

export const icons: Array<{
	src: string;
	alt: string;
}> = [
	{ src: '/icons/logo-javascript.svg', alt: 'JavaScript logo' },
	{ src: '/icons/logo-react.svg', alt: 'ReactJS logo' },
	{ src: '/icons/icons8-typescript.svg', alt: 'TypeScript logo' },
	{ src: '/icons/logo-angular.svg', alt: 'Angular logo' },
	{ src: '/icons/php-svgrepo-com.svg', alt: 'PHP logo' },
];

import { AboutMe } from '@/components/AboutMe';
import { Header } from '@/components/Header';
import { MyProjects } from '@/components/MyProjects';

export default function Home() {
	return (
		<main className='flex min-h-screen w-screen flex-col'>
			<Header />
			<AboutMe />
			<MyProjects />
		</main>
	);
}

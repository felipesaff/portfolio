import { AboutMe } from '@/components/AboutMe';
import { Header } from '@/components/Header';
import { MyProjects } from '@/components/MyProjects';

export default function Home() {
	return (
		<main className='flex w-screen max-w-full flex-col'>
			<Header />
			<AboutMe />
			<MyProjects />
		</main>
	);
}

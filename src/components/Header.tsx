import Link from 'next/link';
import Image from 'next/image';

export function Header() {
	const menuItems: Array<{ title: string; href: string }> = [
		{ title: 'Home', href: '#' },
		{ title: 'About me', href: '#about' },
		{ title: 'My projects', href: '#projects' },
		{ title: 'Contact', href: '#contact' },
	];
	return (
		<header className='flex flex-col items-center w-full bg-gradient-to-br from-black to-indigo-900 h-auto'>
			<nav className='flex justify-center w-full fixed bg-indigo-800 backdrop-filter backdrop-blur-sm bg-opacity-40 py-4'>
				{menuItems.map((item, i) => (
					<Link
						key={i}
						className='hover:text-indigo-500 mx-6 border-b border-transparent hover:border-indigo-500 transition ease-linear'
						href={item.href}
					>
						{item.title}
					</Link>
				))}
			</nav>

			<section
				id='home'
				className='w-full h-auto my-20 px-20 flex flex-col justify-between md:flex-row'
			>
				<div className='flex-1 flex flex-col items-start w-1/2'>
					<h2 className='text-3xl font-bold'>Hello, 👋</h2>
					<h1 className='text-5xl font-bold mt-8 mb-4'>I'm Felipe Saff</h1>
					<p className='text-gray-400'>
						Web developer focusing in front end since 2020.{' '}
					</p>
					<button className='bg-indigo-700 px-8 py-2 rounded-md mt-8 transition ease-linear hover:bg-indigo-800 hover:shadow-lg hover:shadow-indigo-950'>
						Download CV
					</button>
					<div className='flex mt-4'>
						<a href='' className='p-1 rounded-lg bg-gray-700 mr-6'>
							<Image
								src={'/icons/logo-github.svg'}
								alt='Typescript'
								width={30}
								height={30}
							/>
						</a>
						<a href='' className='p-1 rounded-lg bg-gray-700 mr-6'>
							<Image
								src={'/icons/logo-linkedin.svg'}
								alt='Typescript'
								width={30}
								height={30}
							/>
						</a>
						<a href='' className='p-1 rounded-lg bg-gray-700 mr-6'>
							<Image
								src={'/icons/logo-instagram.svg'}
								alt='Typescript'
								width={30}
								height={30}
							/>
						</a>
					</div>
				</div>
				<div className='w-1/2 flex justify-center items-center'>
					<img
						className='rounded-full w-1/2 shadow-indigo-700 shadow-xl border border-indigo-600'
						src='/images/profile-pic.webp'
						alt='Profile Photo'
					/>
				</div>
			</section>
		</header>
	);
}

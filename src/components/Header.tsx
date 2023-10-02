import Link from 'next/link';
import Image from 'next/image';

export function Header() {
	const menuItems: Array<{ title: string; href: string }> = [
		{ title: 'Home', href: '#' },
		{ title: 'About me', href: '#about' },
		{ title: 'My projects', href: '#projects' },
		{ title: 'Contact', href: '#contact' },
	];
	const socialItems: Array<{ src: string; alt: string; href: string }> = [
		{
			src: '/icons/logo-github.svg',
			alt: 'GitHub',
			href: 'https://www.github.com/felipesaff',
		},
		{
			src: '/icons/logo-instagram.svg',
			alt: 'Instagram',
			href: 'https://www.instagram.com/felipesaff',
		},
		{
			src: '/icons/logo-linkedin.svg',
			alt: 'LinkedIn',
			href: 'https://www.linkedin.com/in/felipe-saff',
		},
	];
	return (
		<header className='flex flex-col items-center w-full bg-gradient-to-br from-[#240046] to-[#3c096c] h-auto'>
			<nav className='flex justify-center w-full py-4'>
				{menuItems.map((item, i) => (
					<Link
						key={i}
						className='hover:text-[#7b2cbf] mx-6 border-b border-transparent hover:border-[#7b2cbf] transition ease-linear'
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
					<h1 className='text-5xl font-bold mt-8 mb-4'>
						I'm{' '}
						<span className='bg-gradient-to-r from-[#00b4d8] to-[#7b46ae] text-transparent bg-clip-text animate-gradient'>
							Felipe Saff
						</span>
					</h1>
					<p className='text-gray-400'>
						Web developer focusing in front end since 2020.
					</p>
					<button className='bg-[#3f37c9] px-8 py-2 rounded-md mt-8 transition ease-linear hover:bg-[#4361ee] hover:shadow-md hover:shadow-[#4361ee]'>
						Download CV
					</button>
					<div className='flex mt-4'>
						{socialItems.map((social, i) => (
							<Link
								key={i}
								href={social.href}
								target='_blank'
								className='p-1 rounded-lg bg-[#5a189a] mr-6 hover:shadow-md hover:shadow-[#7b2cbf]'
							>
								<Image
									src={social.src}
									alt={social.alt}
									width={30}
									height={30}
								/>
							</Link>
						))}
					</div>
				</div>
				<div className='w-1/2 flex justify-center items-center'>
					<img
						className='rounded-full w-1/2 shadow-[#7b2cbf] shadow-xl'
						src='/images/profile-pic.webp'
						alt='Profile Photo'
					/>
				</div>
			</section>
		</header>
	);
}

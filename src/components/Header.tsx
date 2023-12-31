import Link from 'next/link';
import Image from 'next/image';

export function Header() {
	const menuItems: Array<{ title: string; href: string }> = [
		{ title: 'Home', href: '#' },
		{ title: 'About me', href: '#about' },
		{ title: 'My projects', href: '#projects' },
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
		<header className='flex flex-col items-center w-full bg-gradient-to-br from-black to-gray-900 h-auto px-8 md:px-0'>
			<nav className='flex md:justify-center justify-between w-full py-4'>
				{menuItems.map((item, i) => (
					<Link
						key={i}
						className='hover:text-[#138a36] font-bold md:mx-6 border-b border-transparent hover:border-[#138a36] transition ease-linear'
						href={item.href}
					>
						{item.title}
					</Link>
				))}
			</nav>

			<section
				id='home'
				className='w-full h-auto my-20 md:px-20 flex flex-col items-center justify-between md:flex-row'
			>
				<div className='flex-1 flex flex-col items-center md:items-start md:w-1/2'>
					<h2 className='text-3xl font-bold'>Hello, 👋</h2>
					<h1 className='text-5xl font-bold mt-8 mb-4 text-center md:text-left'>
						I'm{' '}
						<span className='bg-gradient-to-r from-[#138a36] to-[#18ff6d] text-transparent bg-clip-text animate-gradient'>
							Felipe Saff
						</span>
					</h1>
					<p className='text-gray-300 text-center md:text-left'>
						Web developer focusing in front end since 2020.
					</p>
					<div className='w-full flex flex-col items-center md:items-start'>
						<button className='bg-[#138a36] w-52 px-8 py-2 font-bold rounded-md mt-8 transition ease-linear hover:bg-[#04e824] hover:shadow-md hover:shadow-[#04e824]'>
							Download CV
						</button>
						<div className='flex w-52 justify-between mt-4'>
							{socialItems.map((social, i) => (
								<Link
									key={i}
									href={social.href}
									target='_blank'
									className='p-1 rounded-lg bg-[#138a36] md:mr-6 hover:shadow-md hover:shadow-[#138a36]'
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
				</div>
				<div className='md:w-1/2 flex justify-center items-center mt-8 md:m-0'>
					<Image
						width={720}
						height={720}
						className='rounded-full w-1/2 shadow-[#04e824] shadow-xl'
						src='/images/profile-pic.webp'
						alt='Profile Photo'
					/>
				</div>
			</section>
		</header>
	);
}

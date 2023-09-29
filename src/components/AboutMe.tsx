import Image from 'next/image';

export function AboutMe() {
	const images: Array<{
		src: string;
		alt: string;
	}> = [
		{ src: '/icons/logo-javascript.svg', alt: 'JavaScript logo' },
		{ src: '/icons/logo-react.svg', alt: 'ReactJS logo' },
		{ src: '/icons/icons8-typescript.svg', alt: 'TypeScript logo' },
		{ src: '/icons/logo-angular.svg', alt: 'Angular logo' },
		{ src: '/icons/php-svgrepo-com.svg', alt: 'PHP logo' },
	];
	return (
		<section
			id='about'
			className='w-full flex flex-col items-center justify-center'
		>
			<div className='flex bg-gray-200 py-4 px-20 justify-center w-full'>
				{images.map((image, i) => (
					<Image
						key={i}
						className='mx-4 hover:shadow-lg hover:shadow-gray-400 transition-shadow ease-linear'
						src={image.src}
						alt={image.alt}
						width={50}
						height={50}
					/>
				))}
			</div>

			<div className='py-4 flex flex-col items-center px-60 bg-no-repeat bg-center w-full bg-black'>
				<h2 className='font-bold text-4xl'>About me</h2>
				<p className='font-semibold mt-4'>
					I'm Felipe Saff, I'm 27 year old and I live in Cuiabá, Brazil. I
					started to learn about software development in 2020. In that time, I
					was studying nutrition at the Federal University of Mato Grosso and I
					fell in love for development that I dropped out the course to focus on
					programming. Since then, I've been learning about programming every
					day at personal projects and my job. I have experience in some
					technologies, like: JavaScript, TypeScript, React, Angular and PHP.
				</p>
			</div>
		</section>
	);
}

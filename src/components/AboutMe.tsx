import { icons } from '@/utils';
import Image from 'next/image';

export function AboutMe() {
	return (
		<section
			id='about'
			className='w-full flex flex-col pb-20 items-center justify-center bg-gradient-to-bl from-gray-900 to-black'
		>
			<div className='flex py-4 px-20 justify-center w-full'>
				{icons.map((image, i) => (
					<Image
						key={i}
						className='mx-4'
						src={image.src}
						alt={image.alt}
						width={50}
						height={50}
					/>
				))}
			</div>

			<div className='py-4 flex flex-col items-center px-60 w-full'>
				<h2 className='font-bold text-4xl mb-4'>About me</h2>
				<p className='font-semibold'>
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

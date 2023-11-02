import { myProjectsItems } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
export const MyProjects = () => {
	return (
		<section
			id='projects'
			className='w-full flex px-8 flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900'
		>
			<h1 className='font-bold text-4xl mb-4'>My Projects</h1>
			<div className='max-w-full flex flex-wrap justify-around items-center'>
				{myProjectsItems.map((project, i) => (
					<div
						key={i}
						className='w-72 md:mx-2 my-2 bg-[#34403a] rounded-lg p-4 flex flex-col items-center justify-center'
					>
						<p className='font-bold text-xl text-white my-2'>{project.name}</p>
						<Link href={project.livePreview} target='_blank'>
							<Image
								className='rounded-lg'
								width={500}
								height={500}
								src={project.thumb}
								alt={`${project.name}'s printscreen`}
							/>
						</Link>
						<div className='flex w-full justify-center flex-wrap my-4'>
							{project.stack.map((tech, index) => (
								<span
									className='text-gray-400 rounded-md border m-1 border-gray-400 px-2 py-1 text-xs'
									key={index}
								>
									{tech}
								</span>
							))}
						</div>
						<div className='flex justify-between w-full'>
							<Link
								target='_blank'
								href={project.repoLink}
								className='flex-1 text-center hover:text-[#18ff6d]'
								rel='noreferrer'
							>
								Repository
							</Link>
							<Link
								target='_blank'
								href={project.livePreview}
								className='flex-1 text-center hover:text-[#18ff6d]'
								rel='noreferrer'
							>
								Live Preview
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

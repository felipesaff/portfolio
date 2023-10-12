import { myProjectsItems } from '@/utils';
export const MyProjects = () => {
	return (
		<div
			id='projects'
			className='w-full flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900'
		>
			<h1 className='font-bold text-4xl mb-4'>My Projects</h1>
			<div className='max-w-full flex flex-wrap justify-around items-center'>
				{myProjectsItems.map((project, i) => (
					<div
						key={i}
						className='w-72 mx-2 my-2 bg-[#34403a] rounded-md p-4 flex flex-col items-center justify-center'
					>
						<p className='font-bold text-xl text-white'>{project.name}</p>
						<img src={project.thumb} alt={`${project.name}'s printscreen`} />
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
							<a
								target='_blank'
								href={project.repoLink}
								className='flex-1 text-center hover:text-[#18ff6d]'
								rel='noreferrer'
							>
								Repository
							</a>
							<a
								target='_blank'
								href={project.livePreview}
								className='flex-1 text-center hover:text-[#18ff6d]'
								rel='noreferrer'
							>
								Live Preview
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

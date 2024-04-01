import Image from 'next/image';
import scrollDown from '@/app/assets/scroll-down-2.svg';
	
const Work = () => {
	return (
		<section className='space-y-8'>
			<div className='space-y-1'>
				<h2 className='text-xl font-bold pt-8 pb-3.5 text-center'>Work</h2>
				<p className='text-base text-center'>
					Collection of my favourite Works
				</p>
			</div>
			<div className='relative'>
				<p>
					My passion lies in crafting purpose-driven digital experiences that
					not only meet essential objectives but also empower with a unique
					competitive advantage.
				</p>
				<Image
					src={scrollDown}
					alt='scroll down'
					height={75}
					width={75}
					className='absolute  -left-4 -bottom-3/4'
				/>
			</div>
		</section>
	);
};

export default Work;

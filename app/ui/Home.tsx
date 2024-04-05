import Image from 'next/image';
import laptopDan from '@/app/assets/dan-laptop.svg';
import danPointer from '@/app/assets/pointer-dan.svg';
import scrollDown from '@/app/assets/scroll-down.svg';

const Home = () => {
	return (
		<section className='md:pt-20 space-y-8'>
			<h2 className='text-xl font-bold pt-8 pb-3.5 text-center'>{`{a-sad:Dan}`}</h2>
			<div className='space-y-1'>
				<h3 className='font-semibold text-lg'>Who am I?</h3>
				<p>
					Developer and a <span className='underline'>forced to be</span> UI
					Designer from New Delhi With a Keen Eye for Design and a Passion for
					Crafting Seamless Experiences.
				</p>
			</div>
			<div className='mx-auto relative w-max'>
				<Image
					src={laptopDan}
					alt='Dan with his poopie laptop'
					height={200}
					width={200}
				/>
				<Image
					src={danPointer}
					alt='Dan pointer'
					height={100}
					width={100}
					className='absolute top-1/4 -right-1/4'
				/>
			</div>
			<div className=''>
				<h3 className='font-semibold text-lg'>What do I do?</h3>
				<div className='relative'>
					<p>
						My passion lies in crafting purpose-driven digital experiences that
						not only meet essential objectives but also empower with a unique
						competitive advantage.
					</p>
					<Image
						src={scrollDown}
						alt='Dan pointer'
						height={75}
						width={75}
						className='absolute  right-0 -bottom-3/4'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;

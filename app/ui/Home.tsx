import Image from 'next/image';
import laptopDan from '@/app/assets/dan-laptop.svg';
import danPointer from '@/app/assets/pointer-dan.svg';
import scrollDown from '@/app/assets/scroll-down.svg';

const Home = () => {
	return (
		<section
			className='space-y-1lh sm:pt-3lh mt-0.1lh sm:mt-0.5lh lg:mt-0.125lh'
			id='Home'
		>
			<h2 className='text-xl font-bold pt-2lh pb-0.125lh text-center sm:pt-0.5lh lg:hidden'>{`{a-sad:Dan}`}</h2>
			<div className='space-y-1lh pt-1lh lg:flex lg:justify-between lg:align-bottom lg:pt-1lh lg:gap-1lh'>
				<div className='space-y-0.125lh sm:space-y-0lh lg:pt-3lh'>
					<h3 className='font-semibold text-lg'>Who am I?</h3>
					<p className=''>
						Developer and a <span className='underline'>forced to be</span> UI
						Designer from New Delhi With a Keen Eye for Design and a Passion for
						Crafting Seamless Experiences.
					</p>
				</div>
				<div className='pt-0.75lh pb-1lh mx-auto relative w-max sm:py-1.5lh'>
					<Image
						src={laptopDan}
						alt='Dan with his poopie laptop'
						height={195}
						width={168}
						className='w-7lh sm:w-8lh sm:mb-0.5lh lg:shrink-0'
					/>
					<Image
						src={danPointer}
						alt='Dan pointer'
						height={100}
						width={100}
						className='absolute top-1/4 -right-3lh sm:top-3lh sm:w-4lh sm:-right-4lh lg:w-2.5lh lg:-right-1lh'
					/>
				</div>
			</div>
			<div className='space-y-0.125lh sm:space-y-0lh lg:pt-0.5lh'>
				<h3 className='font-semibold text-lg'>What do I do?</h3>
				<div className='relative '>
					<p className='lg:w-3/4'>
						My passion lies in crafting purpose-driven digital experiences that
						not only meet essential objectives but also empower with a unique
						competitive advantage.
					</p>
					<Image
						src={scrollDown}
						alt='scroll down'
						height={75}
						width={75}
						className='absolute  right-0 -bottom-5lh sm:top-2.5lh sm:-right-1lh sm:w-3lh'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;

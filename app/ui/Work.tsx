import WorkCard from './components/WorkCard';
import minimalist from '@/app/assets/mockups/minimalist-tablet.png';
import topRealty from '@/app/assets/mockups/top-realty.png';
import weatherNaut from '@/app/assets/mockups/weathernaut.png';
import calculator from '@/app/assets/mockups/calculator-green.png';

const Work = () => {
	return (
		<section
			className='space-y-1.5lh mx-auto max-w-7xl pb-0.125lh sm:pb-0'
			id='Work'
		>
			<div>
				<h2 className='text-xl font-bold pb-1lh pt-0.75lh text-center sm:pb-1.lh'>
					Work
				</h2>
				<p className='text-base text-center sm:pt-0.25lh'>Selected Works</p>
			</div>
			<div className='space-y-2lh sm:space-y-0 sm:flex sm:gap-20  sm:max-w-7xl sm:flex-wrap'>
				<WorkCard
					name='MinimaList'
					date='16/01/2024'
					liveLink='https://a-sad-dan.github.io/minima-List/'
					photo={minimalist}
				/>
				<WorkCard
					name='Top Realty'
					date='21/10/2023'
					liveLink='https://toprealtymumbai.com'
					photo={topRealty}
				/>
				<WorkCard
					name='WeatherNaut'
					date='19/11/23'
					liveLink='https://a-sad-dan.github.io/weatherNaut'
					photo={weatherNaut}
				/>
				<WorkCard
					name='Calculator'
					date='09/07/2023'
					liveLink='https://a-sad-dan.github.io/Calculator/'
					photo={calculator}
				/>
				<WorkCard />
			</div>
		</section>
	);
};

export default Work;

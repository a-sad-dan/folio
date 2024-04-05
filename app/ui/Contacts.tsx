import Image from 'next/image';
import danCoffee from '@/app/assets/dan-coffee.svg';
import Clock from './components/Clock';

const Contacts = () => {
	return (
		<section className='space-y-7'>
			<div>
				<h2 className='text-xl font-bold pt-8 pb-3.5 text-center'>Contacts</h2>
			</div>
			<div className='space-y-10'>
				<div className='space-y-2'>
					<h3 className='font-semibold text-lg'>Officials</h3>
					<ul>
						{/* //todo - import these from a DB/data.js  and eventually from Database*/}
						<li>
							Drop me a hi! at my{' '}
							<a
								className='underline'
								href='mailto:danishasad91@gmail.com'
							>
								my Email
							</a>
							.
						</li>
						<li>
							Dive into my projects on{' '}
							<a
								className='underline'
								href='https://github.com/a-sad-dan'
								target='_blank'
							>
								Github
							</a>
							.
						</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h3 className='font-semibold text-lg'>Socials</h3>
					<ul>
						{/* //todo - import these from a DB/data.js  and eventually from Database*/}
						<li>
							Follow my takes on{' '}
							<a
								className='underline'
								href='https://x.com/'
								target='_blank'
							>
								Twitter
							</a>
							.
						</li>
						<li>
							See whats cooking on{' '}
							<a
								className='underline'
								href='https://instagram.com/a.sad.dan'
								target='_blank'
							>
								Instagram
							</a>
							.
						</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h3 className='font-semibold text-lg'>Location</h3>
					<ul>
						<li>Based in New Delhi, India.</li>
						<li>
							Local Time: <Clock />
						</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h3 className='font-semibold text-lg'>Availability</h3>
					<p>
						<span className='bg-accent text-background font-bold px-1 py-0.5 underline'>
							Ready
						</span>{' '}
						for new Challenges
					</p>
				</div>
			</div>
			<div>
				<Image
					src={danCoffee}
					alt='Dan with his coffee'
					height={150}
					width={150}
					className='mx-auto py-6'
				/>
			</div>
			<div className='space-y-2'>
				<h3 className='font-semibold text-lg text-center'>Note</h3>
				<p className='text-base text-center'>
					{
						"Don't worry if I'm not immediately available—I'll swing back to you as quick as a page reload!"
					}
				</p>
			</div>
		</section>
	);
};

export default Contacts;

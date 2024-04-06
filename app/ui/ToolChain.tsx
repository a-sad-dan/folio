import Image from 'next/image';
import scrollDown from '@/app/assets/scroll-down-2.svg';

const ToolChain = () => {
	return (
		<section
			className='space-y-1lh'
			id='ToolChain'
		>
			<div>
				<h2 className='text-xl font-bold pt-0.25lh pb-1lh text-center'>ToolChain</h2>
				<p className='text-base text-center pb-1lh'>Featuring my Daily Drivers</p>
			</div>
			<div className='space-y-2lh lg:flex lg:justify-between lg:max-w-7xl lg:space-y-0'>
				<div className='space-y-1lh'>
					<h3 className='font-semibold text-lg text-center'>Web Development</h3>
					<ol className='list-disc list-inside'>
						{/* //todo - import these from a DB/data.js  and eventually from Database*/}
						<li>React</li>
						<li>Next Js</li>
						<li>Tailwind CSS, SCSS (SASS)</li>
						<li>Webpack, Rollup</li>
						<li>Jest (Javascript Testing Framework)</li>
						<li>GSAP (GreenSock Animation Platform)</li>
						<li>Node Js</li>
						<li>Express</li>
						<li>Wordpress</li>
						<li>Elementor</li>
					</ol>
				</div>
				<div className='space-y-1lh'>
					<div className='space-y-1lh'>
						<h3 className='font-semibold text-lg text-center'>
							Design & Prototyping
						</h3>
						<ol className='list-disc list-inside'>
							{/* //todo - import these from a DB/data.js  and eventually from Database*/}
							<li>Blender</li>
							<li>Figma</li>
							<li>Inkscape</li>
							<li>Krita</li>
						</ol>
					</div>
					<div className='space-y-1lh'>
						<h3 className='font-semibold text-lg text-center'>
							Tools and Workflow
						</h3>
						<ol className='list-disc list-inside'>
							{/* //todo - import these from a DB/data.js  and eventually from Database*/}
							<li>VsCode</li>
							<li>Vim</li>
							<li>Linux</li>
							<li>Bash Scripting</li>
							<li>Git</li>
						</ol>
					</div>
				</div>
				<div className='space-y-1lh'>
					<div className='space-y-1lh'>
						<h3 className='font-semibold text-lg text-center'>
							Additional Skills
						</h3>
						<ol className='list-disc list-inside'>
							{/* //todo - import these from a DB/data.js  and eventually from Database*/}
							<li>DSA</li>
							<li>OOPS</li>
							<li>TDD</li>
							<li>GCP</li>
						</ol>
					</div>
					<div className='space-y-1lh'>
						<h3 className='font-semibold text-lg text-center'>
							Mobile Development
						</h3>
						<ol className='list-disc list-inside'>
							{/* //todo - import these from a DB/data.js  and eventually from Database*/}
							<li>React Native</li>
						</ol>
					</div>
				</div>
			</div>
			<div className='sm:max-w-7xl lg:text-center'>
				<div className='space-y-1lh'>
					<h3 className='font-semibold text-lg text-center'>Languages</h3>
					<div className='relative'>
						<ol className='list-disc list-inside lg:flex lg:justify-between'>
							{/* //todo - import these from a DB/data.js  and eventually from Database*/}
							<li>Assembly 💀</li>
							<li>MATLAB / GNU Octave</li>
							<li>Python</li>
							<li>PHP</li>
							<li>C</li>
							<li>C++</li>
							<li>HTML</li>
							<li>JS</li>
							<li>TS</li>
						</ol>
						<Image
							src={scrollDown}
							height={75}
							width={75}
							alt='scroll down further'
							className='absolute -bottom-1/2 md:-bottom-1/4 right-0 -scale-x-100 lg:top-4 lg:-right-8'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ToolChain;

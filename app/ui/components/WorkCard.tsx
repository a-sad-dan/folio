import Image, { StaticImageData } from 'next/image';
import mock from '@/app/assets/mockups/default-mock.svg';
import goToIcon from '@/app/assets/go-to.svg';
import tape from '@/app/assets/tape.svg';

import dirtyTexture from '@/app/assets/textures/dirty-texture.jpg';
import polaroidTexture from '@/app/assets/textures/Texturelabs_Glass_133S.jpg';
import clsx from 'clsx';

interface WorkCardProps {
	liveLink?: string;
	sourceLink?: string;
	name?: string;
	date?: string;
	photo?: StaticImageData;
}

const WorkCard = ({
	liveLink,
	sourceLink,
	name,
	date,
	photo,
}: WorkCardProps) => {
	const defaultLink =
		'https://www.youtube.com/watch?v=l4ezx3omYeA&pp=ygUfaG93IGEgcG9scm9pZCBmaWxtIGlzIGRldmVsb3BlZA%3D%3D';

	return (
		<div className='mx-auto relative w-min'>
			{/* <Image
				src={dirtyTexture}
				alt='dirtyTexture'
				height={270}
				width={210}
				className='absolute top-0 object-center opacity-10  w-full h-full z-0'
			/> */}
			<div>
				<Image
					src={tape}
					aria-hidden
					alt='tape'
					height={70}
					width={30}
					className=' absolute z-[5] rotate-45 -top-4 shadow-lg opacity-70'
				/>
				<Image
					src={tape}
					aria-hidden
					alt='tape'
					height={70}
					width={30}
					className=' absolute z-[5] rotate-[69deg] -bottom-8 right-2 shadow-md opacity-90'
				/>
			</div>
			<div className='bg-[#fffdf5] px-4 py-7 w-max space-y-3 shadow-lg'>
				<div className='relative'>
					<a
						href={liveLink || defaultLink}
						target='_blank'
					>
						<Image
							src={photo || mock}
							alt='photo of App'
							height={270}
							width={210}
							className='h-60 object-cover saturate-50 sepia-[0.2] brightness-[0.8] shadow-inner z-10'
						/>
						<Image
							src={polaroidTexture}
							alt='polaroid texture'
							height={270}
							width={210}
							className='absolute top-0 h-60 object-cover opacity-15 shadow-inner z-10'
						/>
					</a>
				</div>
				<div className='flex justify-between'>
					<a
						href={sourceLink}
						target='_blank'
						className={clsx({'collapse' : !sourceLink})}
					>
						{/* <Image
							src={goToIcon}
							alt='Open in new tab icon'
							height={26}
							width={26}
						/> */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							class='lucide lucide-braces mt-1 text-text'
						>
							<rect
								x='14'
								y='14'
								width='4'
								height='6'
								rx='2'
							/>
							<rect
								x='6'
								y='4'
								width='4'
								height='6'
								rx='2'
							/>
							<path d='M6 20h4' />
							<path d='M14 10h4' />
							<path d='M6 14h2v6' />
							<path d='M14 4h2v6' />
						</svg>
					</a>
					<div className='text-right font'>
						<h4 className='text-lg font-bold'>{name || 'Under Dev'}</h4>
						<p className='text-sm -mt-1'>{date || 'xx/xx/xx'}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;

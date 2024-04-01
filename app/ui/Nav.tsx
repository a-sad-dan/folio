'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

// assets import
import toTopIcon from '@/app/assets/Top.svg';
import openMenu from '@/app/assets/open-Menu.svg';
import closeMenu from '@/app/assets/close.svg';

const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const goTop = () => {
		console.log('to the moon');
	};

	return (
		<nav
			className={clsx(
				' bg-background/70 backdrop-blur-[2px] fixed bottom-0 left-0 w-full py-2 px-6 flex justify-between md:top-0 md:bottom-auto z-10',
				{ 'flex p-6 pt-7': isActive }
			)}
		>
			{
				<ul
					className={clsx(
						'space-y-[10px] text-lg font-medium w-max hidden md:!flex md:items-center md:w-full md:space-y-0 md:justify-between md:max-w-7xl md:px-2 md:mx-auto md:py-3.5',
						{ '!block': isActive }
					)}
				>
					<li>
						<a href='#'>{'{a-sad-dan}'}</a>
					</li>
					<li>
						<a href='#'>Work</a>
					</li>
					<li>
						<a href='#'>ToolChain</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
					<li>
						<a
							className='md:underline md:underline-offset-2'
							href='#'
						>
							Resume.pdf
						</a>
					</li>
				</ul>
			}
			<Image
				src='/Dan-shrug.svg'
				alt='Dan shrugging '
				width={150}
				height={150}
				className={clsx('absolute -bottom-2 right-10', { hidden: !isActive })}
			/>
			{!isActive && (
				<button
					className='md:hidden '
					onClick={goTop}
				>
					<Image
						className='mx-auto'
						src={toTopIcon}
						alt='To Top'
						height={32}
						width={32}
					/>
				</button>
			)}
			<button
				className={clsx('md:hidden', {
					'absolute top-4 right-6': isActive,
				})}
				onClick={toggleMenu}
			>
				<Image
					src={isActive ? closeMenu : openMenu}
					alt='toggle-menu'
					height={32}
					width={32}
				/>
			</button>
		</nav>
	);
};

export default Nav;

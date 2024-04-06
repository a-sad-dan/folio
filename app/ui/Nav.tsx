'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// assets import
import toTopIcon from '@/app/assets/Top.svg';
import openMenu from '@/app/assets/open-Menu.svg';
import closeMenu from '@/app/assets/close.svg';

const Nav = () => {
	const [isActive, setIsActive] = useState(false);
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
		return () => {
			window.removeEventListener('scroll', toggleVisible);
		};
	}, []);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const goTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<nav
			className={clsx(
				' bg-background/70 backdrop-blur-[2px] fixed bottom-0 left-0 w-full sm:!w-screen py-2 px-6 flex justify-between md:top-0 md:bottom-auto z-10',
				{ 'flex p-6 pt-7': isActive }
			)}
		>
			{
				<ul
					className={clsx(
						'space-y-[10px] text-lg font-medium w-max hidden lg:!px-3lh md:!px-2lh md:!flex md:items-center md:w-full md:space-y-0 md:justify-between md:!max-w-7xl sm:mx-auto sm:py-0.25lh sm:sm:px-1lh lg:w-4/5 ',
						{ '!block': isActive }
					)}
				>
					<li>
						<a href='#Home'>Home</a>
					</li>
					<li>
						<a href='#Work'>Work</a>
					</li>
					<li>
						<a href='#ToolChain'>ToolChain</a>
					</li>
					<li>
						<a href='#Contacts'>Contact</a>
					</li>
					<li>
						<a
							className='md:underline md:underline-offset-2'
							href='/a-sad-dan-resume.pdf'
							download={true}
						>
							{'Resume.pdf'}
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
			{!isActive && visible && (
				<button
					className='md:fixed sm:top-[94svh] sm:right-1lh lg:right-[2.3lh] lg:top-[88.5svh]'
					onClick={goTop}
				>
					<Image
						src={toTopIcon}
						alt='To Top'
						height={32}
						width={32}
						className='mx-auto lg:w-1lh'
						/>
				</button>
			)}
			<button
				className={clsx(' ml-auto md:hidden', {
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

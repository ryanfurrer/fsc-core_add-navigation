import React, { useState } from 'react';
import { Link } from 'gatsby';
// import mobileMenu from '../../static/mobile-menu.js';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';

function Navbar() {
	const [isMenuShown, setIsMenuShown] = useState(false);
	return (
		<nav className="flex justify-end container p-4">
			{!isMenuShown && (
				<button
					className="md:hidden text-white text-3xl"
					onClick={() => setIsMenuShown(true)}
				>
					<AiOutlineMenu />
				</button>
			)}

			{isMenuShown && (
				<button
					className="md:hidden text-white text-3xl z-50"
					onClick={() => setIsMenuShown(false)}
				>
					<AiOutlineClose />
				</button>
			)}

			<ul
				className={`${
					isMenuShown ? `absolute` : `hidden`
				} top-0 left-0 w-full h-[100dvh] text-right p-4 gap-10 md:flex md:top-[unset] md:left-[unset] md:w-auto md:h-auto md:gap-8 justify-end`}
			>
				<div className="flex flex-col h-full justify-end gap-10 text-2xl md:flex-row md:h-auto md:gap-8 md:text-lg">
					<li>
						<Link to="/" onClick={() => setIsMenuShown(false)}>
							Home
						</Link>
					</li>
					<li>
						<ExternalLink
							href="https://blog.fullstack.chat/"
							textToShow="Blog"
						/>
					</li>
					<li>
						<Link to="#about" onClick={() => setIsMenuShown(false)}>
							About
						</Link>
					</li>
					<li>
						<Link to="#rules" onClick={() => setIsMenuShown(false)}>
							Join Us
						</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}

export default Navbar;

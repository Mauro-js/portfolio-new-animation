import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import { useRouter } from 'next/router';
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "../config/site";
import NextLink from "next/link";
import clsx from "clsx";

//import { ThemeSwitch } from "./theme-switch";
import {
	GithubIcon,
	LinkedingLogo,
	HomeIcon
} from "./icons";


export const Navbar = () => {
	const router = useRouter();

	function handleScrollToSection(e, sectionId) {
		e.preventDefault(); // Evita el comportamiento de enlace predeterminado

		if(sectionId === "blogRef") router.replace('/blog');
		if(router.pathname === "/blog" && sectionId === "blogRef") return null;

		if (router.pathname === '/') {
		const targetElement = document.getElementById(sectionId); // Obtiene el elemento de destino por su ID

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop, // Desplaza a la parte superior del elemento
					behavior: "smooth", // Agrega desplazamiento suave
				});
			}
		}
		else {
			router.replace('/#' + sectionId);
		}
	}


	return (
		<NextUINavbar maxWidth="2xl" position="sticky" className="backdrop-blur-sm bg-transparent text-white fixed top-0 left-0 z-50 w-full p-4">

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.linkeding}>
						<LinkedingLogo className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					{/*<ThemeSwitch />*/}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4 text-white" justify="end">
				<Link isExternal href={siteConfig.links.linkeding}>
						<LinkedingLogo className="text-default-500" />
				</Link>
				<Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link>
				{/*<ThemeSwitch />*/}
				<NavbarMenuToggle />
			</NavbarContent>
		</NextUINavbar>
	);
};

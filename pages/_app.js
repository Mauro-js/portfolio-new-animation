import "../styles/globals.css";
import "../styles/buttonAnimation.css"
import "../styles/glitch.css";
import "../styles/moreRules.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "../config/fonts";
import DefaultLayout from "../layouts/default";

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<NextThemesProvider>
				<DefaultLayout>
					<div className='justify-items-center'>
						<Component {...pageProps} />
					</div>
				</DefaultLayout>
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};

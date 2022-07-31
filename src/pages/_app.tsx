import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>G-Short</title>
				<meta name="description" content="A simple and free link shortener" />
				<link rel="icon" href="/images/favicon.ico" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16.png"
				/>
			</Head>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;

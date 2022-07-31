import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

export interface IFormValues {
	slug: string;
	url: string;
}

const Home: NextPage = () => {
	const { register, handleSubmit, setValue, watch } = useForm<IFormValues>();

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const onSubmit = (data: IFormValues) => {
		console.log(data);
		// TODO implement tRPC call

		const url = `https://${serverUrl}${data.slug}`;
		navigator.clipboard.writeText(url);
		// Toast link copied to clipboard
		console.log("copied");
	};

	const handleRandomize = () => {
		// fetch new slug and add it to the form
		// TODO implement tRPC call
		setValue("slug", "test");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>G-Short</title>
				<meta name="description" content="A simple and free link shortener" />
			</Head>

			<main className={styles.main}>
				<div className={styles.header}>
					<a href={""}>
						<h1>G-Short</h1>
					</a>
				</div>

				<div className={styles.content}>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<div className={styles.row}>
							<label>{serverUrl} </label>
							<input
								className={styles.custom_input}
								type="text"
								placeholder="Enter your custom URL"
								{...register("slug", { required: true })}
							/>
							<GiPerspectiveDiceSixFacesRandom
								className={styles.icon}
								onClick={handleRandomize}
							/>
						</div>
						<div className={styles.row}>
							<label>Your URL</label>
							<input
								className={styles.custom_input}
								type="text"
								{...register("url", { required: true })}
							/>
						</div>

						<button type="submit" className={styles.button_submit}>
							Shorten
						</button>
					</form>
				</div>

				<div className={styles.footer}>
					<a
						href="https://github.com/gabriel-caixeta/link-shortener"
						target="_blank"
						className={styles.text_link}
					>
						Github
					</a>
				</div>
			</main>
		</div>
	);
};

export default Home;

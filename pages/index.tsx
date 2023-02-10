import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
	return (
		<>
			<Head>
				<title>My Dog App</title>
				<meta name="description" content="my first dog app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Header>Header Component</Header>
				<Card>Card Component</Card>
			</main>
		</>
	);
}

import Head from "next/head";

export default function Home() {
	return (
		<div className="bg-slate-400 dark:bg-slate-900 dark:text-slate-100">
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-16 flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-6xl text-center">
					Welcome to{" "}
					<a
						className="text-blue-600 hover:underline"
						href="https://nextjs.org"
					>
						Next.js!
					</a>
				</h1>

				<p className="text-3xl py-12 text-center">
					Get started by editing{" "}
					<code className="font-mono bg-white dark:bg-slate-500 p-2 rounded-lg">
						pages/index.js
					</code>
				</p>

				<div className="flex flex-wrap items-center justify-center max-w-5xl text-xl">
					<a
						href="https://nextjs.org/docs"
						className="border-2 border-slate-500 p-4 m-4 rounded-2xl max-w-xs"
					>
						<h2 className="text-2xl pb-2">Documentation &rarr;</h2>
						<p>
							Find in-depth information about Next.js features and
							API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn"
						className="border-2 border-slate-500 p-4 m-4 rounded-2xl max-w-xs"
					>
						<h2 className="text-2xl pb-2">Learn &rarr;</h2>
						<p>
							Learn about Next.js in an interactive course with
							quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className="border-2 border-slate-500 p-4 m-4 rounded-2xl max-w-xs"
					>
						<h2 className="text-2xl pb-2">Examples &rarr;</h2>
						<p>
							Discover and deploy boilerplate example Next.js
							projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="border-2 border-slate-500 p-4 m-4 rounded-2xl max-w-xs"
					>
						<h2 className="text-2xl pb-2">Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL
							with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className="text-center p-4 border-t-2 border-slate-500">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<svg
						width="283"
						height="64"
						viewBox="0 0 283 64"
						className="fill-current h-4 w-auto inline-block"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" />
					</svg>
				</a>
			</footer>
		</div>
	);
}

<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		educations,
		headerLinks,
		sortedExperience as experience,
		projects,
		arts
	} from '$lib/content.svelte';
	import {
		faArrowRight,
		faBriefcase,
		faGraduationCap,
		faMoon,
		faMusic,
		faPaintBrush,
		faProjectDiagram,
		faStar,
		faSun,
		faWaveSquare
	} from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';

	// Memoization for GitHub API calls
	type GithubData = {
		stargazers_count?: number;
		license?: { spdx_id?: string };
		description?: string;
	};

	const githubCache: Record<string, GithubData> = {};
	async function getGithubData(repo: string): Promise<GithubData> {
		if (githubCache[repo]) return githubCache[repo];
		const response = await fetch(`/github/${repo}`);
		const data = (await response.json()) as GithubData;
		githubCache[repo] = data;
		return data;
	}

	let theme = $state();

	onMount(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		document.documentElement.classList.toggle(
			'dark',
			localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
		theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	});

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
		theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Nathan Laha - {experience[0].position} at {experience[0].company}"
	/>
	<title>
		Nathan Laha - {experience[0].position} at {experience[0].company}
	</title>
</svelte:head>

<div class="mt-lg container mx-auto my-10 p-4">
	<div class="flex flex-col flex-wrap gap-4">
		<div class="flex flex-row flex-wrap justify-between gap-4">
			<div
				class="flex flex-grow rounded-md border-2 border-gray-200 bg-gray-100 p-6 md:mt-4 dark:border-gray-700 dark:bg-gray-800"
			>
				<h1 class="prose prose-xl font-display text-6xl text-gray-700 dark:text-gray-300">
					Nathan Laha
				</h1>
			</div>
			<div
				class="flex min-w-fit flex-grow flex-row flex-wrap items-center justify-around gap-3 rounded-md border-2 border-gray-200 bg-gray-100 p-6 md:mt-4 md:max-w-[300px] md:flex-grow-0 md:justify-end dark:border-gray-700 dark:bg-gray-800"
			>
				{#each headerLinks as link}
					<a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
						<Fa
							icon={link.icon}
							size="3x"
							class="text-gray-700 transition duration-100 ease-in-out hover:scale-110 hover:transform dark:text-gray-300"
						/>
					</a>
				{/each}
			</div>
		</div>
		<div class="flex flex-row gap-4">
			<div
				class="flex flex-grow flex-row items-center gap-6 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800"
			>
				<Fa icon={faWaveSquare} size="2x" class="hidden md:block dark:text-gray-600" />
				<p class="prose font-sans text-gray-700 dark:text-gray-300">
					Hi there! I'm a software engineer based in Seattle, WA. On this site, you'll see projects
					I'm working on, links to my social media profiles and more.
				</p>
			</div>
			<div
				class="hidden flex-shrink flex-row items-center gap-6 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:flex md:p-4 dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="grid grid-cols-2 grid-rows-2 gap-2">
					<button
						onclick={toggleTheme}
						class="rounded-md bg-gray-200 p-2 transition duration-200 ease-in-out hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
					>
						<Fa
							size="1x"
							class="text-gray-700 dark:text-gray-400"
							icon={theme === 'light' ? faMoon : faSun}
						/>
					</button>
					<div class="rounded-md bg-gray-200 p-2 dark:bg-gray-700"></div>
					<div class="rounded-md bg-gray-200 p-2 dark:bg-gray-700"></div>
					<div class="rounded-md bg-gray-200 p-2 dark:bg-gray-700"></div>
				</div>
			</div>
		</div>

		<!-- Education -->
		<div
			class="flex flex-col gap-4 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800"
		>
			<div class="flex flex-row items-center justify-between">
				<h2 class="prose prose-xl font-display text-4xl text-gray-700 dark:text-gray-300">
					Education
				</h2>
				<Fa icon={faGraduationCap} size="2x" class="text-gray-700 dark:text-gray-300" />
			</div>
			{#each educations as education}
				<div class="flex flex-wrap justify-between">
					<h3
						class="text-md prose prose-lg w-full font-sans text-gray-700 sm:w-auto sm:text-lg dark:text-gray-300"
					>
						{education.degree}
					</h3>

					<div class="flex w-full flex-wrap items-center sm:w-auto">
						<h3
							class="prose prose-lg font-sans text-sm text-gray-700 italic sm:text-lg sm:not-italic md:text-lg dark:text-gray-300"
						>
							{education.institution}
						</h3>
						<span class="mx-2 h-6 border-l border-gray-300 dark:border-gray-600"></span>
						<h3
							class="prose prose-lg font-sans text-sm text-gray-700 italic sm:text-lg sm:not-italic md:text-lg dark:text-gray-300"
						>
							{education.year}
						</h3>
					</div>
				</div>
			{/each}
		</div>

		<!-- Experience -->
		<div class="flex flex-row flex-wrap gap-4">
			<div
				class="flex min-w-full flex-grow flex-col gap-6 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:max-w-2/3 md:p-6 lg:min-w-auto dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="flex flex-row items-center justify-between">
					<h2 class="prose prose-xl mb-4 font-display text-4xl text-gray-700 dark:text-gray-300">
						Experience
					</h2>
					<Fa icon={faBriefcase} size="2x" class="text-gray-700 dark:text-gray-300" />
				</div>
				{#each experience as experience}
					<div>
						<a href={experience.url} target="_blank" rel="noopener noreferrer">
							<div
								class="flex flex-wrap justify-between p-4 {experience.endDate
									? 'rounded-md border-2 border-gray-300 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800'
									: 'sparkle rounded-md bg-amber-400 dark:bg-amber-900'} animate {experience.url
									? 'cursor-pointer transition duration-200 ease-in-out hover:scale-101'
									: ''}"
							>
								<div class="flex w-full items-center gap-4 sm:w-auto">
									<Fa
										icon={experience.icon}
										size="lg"
										class="hidden {experience.endDate
											? ''
											: 'animate-bounce'} text-gray-700 ease-in-out md:block dark:text-gray-300"
									/>
									<h3 class="prose prose-lg font-sans text-lg text-gray-900 dark:text-gray-300">
										{experience.position} - {experience.company}
									</h3>
								</div>
								<h3
									class="prose prose-lg flex items-center font-sans text-sm text-gray-700 italic sm:text-lg sm:not-italic dark:text-gray-300"
								>
									{experience.startDate.toLocaleString('default', {
										month: 'short',
										year: 'numeric'
									})}
									<Fa
										icon={faArrowRight}
										size="xs"
										class="mx-2 hidden text-gray-700 sm:block dark:text-gray-300"
									/>
									{experience.endDate
										? experience.endDate.toLocaleString('default', {
												month: 'short',
												year: 'numeric'
											})
										: 'Present'}
								</h3>
							</div>

							{#if experience.url}
								<span class="mt-1 block text-xs text-gray-500 dark:text-gray-400"
									>click to learn more</span
								>
							{/if}
						</a>
						<div class="mt-3">
							<ul class="list-disc pl-5 md:pl-10">
								{#each experience.items as item}
									<li class="prose prose-lg font-sans text-sm text-gray-700 dark:text-gray-300">
										{item}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>

			<!-- Projects -->
			<div class="flex flex-grow flex-col gap-4 lg:max-w-1/3">
				<div
					class="flex flex-col gap-6 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<div class="mb-4 flex flex-row items-center justify-between">
						<h2 class="prose prose-xl font-display text-4xl text-gray-700 dark:text-gray-300">
							Code
						</h2>
						<Fa icon={faProjectDiagram} size="2x" class="text-gray-700 dark:text-gray-300" />
					</div>
					{#each projects as project}
						<div
							class="flex flex-col flex-wrap justify-between p-4 {project.url
								? 'rounded-md border-2 border-gray-300 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800'
								: 'sparkle rounded-md bg-amber-900'} animate {project.url
								? 'cursor-pointer transition duration-200 ease-in-out hover:scale-101'
								: ''}"
						>
							<svelte:boundary>
								<a
									href={project.url}
									class="w-full flex-grow sm:w-auto"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="flex flex-row justify-between">
										<div class="flex flex-grow items-center gap-4">
											<Fa
												icon={faProjectDiagram}
												size="lg"
												class="hidden {project.url
													? ''
													: 'animate-bounce'} text-gray-700 ease-in-out md:block dark:text-gray-300"
											/>
											<h3 class="prose prose-lg font-sans text-lg text-gray-700 dark:text-gray-300">
												{project.name}
											</h3>
										</div>
										{#if project.github}
											<div class="flex flex-row items-center gap-2">
												<Fa icon={faStar} size="lg" class="dark:text-amber-300" />
												<span class="text-xl font-bold text-gray-700 dark:text-gray-300">
													{(await getGithubData(project.github).then(
														(data) => data.stargazers_count
													)) ?? '-'}
												</span>
												<div>
													<span class="text-lg text-gray-500 dark:text-gray-400">
														{await getGithubData(project.github).then(
															(data) => data.license?.spdx_id ?? ''
														)}
													</span>
												</div>
											</div>
										{/if}
									</div>

									{#if project.url}
										<span class="mt-1 block text-xs text-gray-500 dark:text-gray-400"
											>click to learn more</span
										>
									{/if}
								</a>

								{#if project.github}
									<div class="mt-3 text-sm text-gray-500 dark:text-gray-400">
										{await getGithubData(project.github).then((data) => data.description)}
									</div>
								{/if}

								<div class="mt-3">
									<ul class="flex flex-wrap gap-2">
										{#each project.technologies as technology}
											<li
												class="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200"
											>
												{technology}
											</li>
										{/each}
									</ul>
								</div>

								{#snippet pending()}
									<div class="flex animate-pulse items-center gap-2">
										<div class="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
										<div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
									</div>
								{/snippet}

								{#snippet failed(error, reset)}
									<div class="flex animate-pulse items-center gap-2">
										<div class="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
										<div class="h-4 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
									</div>
								{/snippet}
							</svelte:boundary>
						</div>
					{/each}
				</div>
				<div
					class="flex flex-grow flex-col gap-6 rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:p-6 dark:border-gray-700 dark:bg-gray-800"
				>
					<div class="mb-4 flex flex-row items-center justify-between">
						<h2 class="prose prose-xl font-display text-4xl text-gray-700 dark:text-gray-300">
							Art
						</h2>
						<Fa icon={faPaintBrush} size="2x" class="text-gray-700 dark:text-gray-300" />
					</div>
					{#each arts as art}
						<div
							class="flex flex-col flex-wrap justify-between p-4 {art.steam
								? 'rounded-md border-2 border-gray-300 bg-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800'
								: 'sparkle rounded-md bg-amber-900'} animate {art.steam
								? 'cursor-pointer transition duration-200 ease-in-out hover:scale-101'
								: ''}"
						>
							<a
								href={art.steam}
								class="w-full flex-grow sm:w-auto"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div class="flex flex-row justify-between">
									<div class="flex flex-grow items-center gap-4">
										<Fa
											icon={faMusic}
											size="lg"
											class="hidden {art.steam
												? ''
												: 'animate-bounce'} text-gray-700 ease-in-out md:block dark:text-gray-300"
										/>
										<h3 class="prose prose-lg font-sans text-lg text-gray-700 dark:text-gray-300">
											{art.name}
										</h3>
									</div>
								</div>

								{#if art.steam}
									<span class="mt-1 block text-xs text-gray-500 dark:text-gray-400"
										>click to learn more</span
									>
								{/if}
							</a>

							<div class="mt-3 text-sm text-gray-500 dark:text-gray-400">
								{art.description}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.sparkle {
		position: relative;
		overflow: hidden;
	}
	.sparkle::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(
			120deg,
			transparent 40%,
			rgba(255, 255, 255, 0.1) 50%,
			transparent 60%
		);
		transform: rotate(0deg);
		animation: shine 2s linear infinite;
		pointer-events: none;
	}
	@keyframes shine {
		0% {
			transform: rotate(0deg) translateX(-100%);
		}
		100% {
			transform: rotate(0deg) translateX(100%);
		}
	}
</style>

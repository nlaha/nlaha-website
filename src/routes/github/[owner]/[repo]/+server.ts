import { json } from '@sveltejs/kit';

// Simple in-memory cache for repo data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache: Record<string, { data: any; timestamp: number }> = {};
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export async function GET({ params }) {
	const cacheKey = `${params.owner}/${params.repo}`;
	const now = Date.now();

	// Check cache
	if (cache[cacheKey] && now - cache[cacheKey].timestamp < ONE_DAY_MS) {
		return json(cache[cacheKey].data);
	}

	// Fetch from GitHub
	const response = await fetch(`https://api.github.com/repos/${params.owner}/${params.repo}`, {
		headers: {
			'User-Agent': 'nlaha.com <nlaha@nlaha.com>'
		}
	});
	const repoData = await response.json();

	// Store in cache
	cache[cacheKey] = { data: repoData, timestamp: now };

	return json(repoData);
}

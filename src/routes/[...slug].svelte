<script context="module">
	import { env } from '$lib/util/env';
	export const prerender = true;

	/** @type {import('./__types/[...slug]').Load} */
	export async function load({ fetch, params }) {
		const slug = params?.slug || 'home';
		const response = await fetch(`${env.payload_url}/api/pages?where[slug][equals]=${slug}`);
		const data = await response.json();
		if (!data.docs.length)
			return {
				status: 404
			};
		return {
			status: response.status,
			props: {
				page: response.ok && data.docs[0]
			}
		};
	}
</script>

<script lang="ts">
	export let page;
</script>

<h2>
	{JSON.stringify(page)}
</h2>

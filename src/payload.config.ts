import { buildConfig } from 'payload/config';
import { page } from './lib/collections/page';

export default buildConfig({
	// By default, Payload will boot up normally
	// and you will be provided with a base `User` collection.
	// But, here is where you define how you'd like Payload to work!
	collections: [page],
	globals: [
		{
			slug: 'header',
			fields: [
				{
					name: 'nav',
					type: 'array',
					fields: [
						{
							name: 'page',
							type: 'relationship',
							relationTo: 'pages'
						}
					]
				}
			]
		}
	]
});

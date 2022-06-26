import type { CollectionConfig, Field } from 'payload/types';
import formatSlug from '../util/formatSlug';

export const slug: Field = {
	name: 'slug',
	label: 'Slug',
	type: 'text',
	admin: {
		position: 'sidebar'
	},
	hooks: {
		beforeValidate: [formatSlug('title')]
	}
};

export const page: CollectionConfig = {
	slug: 'pages',
	access: {
		read: (): boolean => true // Everyone can read Pages
	},
	admin: {
		useAsTitle: 'title'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true
		},
		{
			name: 'content',
			type: 'richText',
			required: true
		},
		slug
	]
};

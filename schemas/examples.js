export default {
	name: 'examples',
	title: 'Examples',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'displayOrder',
			title: 'Display order',
			type: 'number',
		},
		{
			name: 'link',
			title: 'Link to site',
			type: 'string',
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
}

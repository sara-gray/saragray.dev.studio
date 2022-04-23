export default {
	name: 'skills',
	title: 'Skills',
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
			name: 'confidence',
			title: 'Confidence Value',
			description: '1 - low, 5 - high',
			type: 'number',
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
}

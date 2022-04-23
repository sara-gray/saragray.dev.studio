import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import skills from './skills'

export default createSchema({
	name: 'saragray.dev',
	types: schemaTypes.concat([post, author, category, skills, blockContent]),
})

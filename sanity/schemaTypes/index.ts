import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy';
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, caseStudy],
}

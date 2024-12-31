import { type SchemaTypeDefinition } from 'sanity'
import {cards} from './cards/cards'
import {comment} from './comments/comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards, comment],
}

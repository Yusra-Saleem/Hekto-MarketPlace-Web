import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import order from './orders'
import Review from './Review'
import userAddress from './userAddress'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,order , Review , userAddress],
}

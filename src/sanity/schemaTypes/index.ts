import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import order from './orders'
import Review from './Review'
import userAddress from './userAddress'
import discountEmailSubmission from './discountEmailSubmission'
import promotion from './promotion'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,order , Review , userAddress , promotion , discountEmailSubmission],
}

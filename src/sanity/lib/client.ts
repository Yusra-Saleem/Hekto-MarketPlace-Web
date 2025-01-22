import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

import { apiVersion, dataset } from '../env'

dotenv.config({ path: '.env.local' })

export const client = createClient({
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false, 
 


})



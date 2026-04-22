import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'r52stcp8',
  dataset: 'production',
  apiVersion: '2026-04-22',
  useCdn: false,
})

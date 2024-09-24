// Contentful SDK
import { createClient, ContentfulClientApi, EntryCollection, Entry } from 'contentful'

const client: ContentfulClientApi = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string
})

// Fetching Entries by Content Type
export async function fetchEntries(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching entries:', error)
    return []
  }
}

// Fetching Entries by ID
export async function fetchEntriesById(contentId: string) {
  try {
    const entries = await client.getEntry('07vrKNgnmqHfKzJWn5Nis')
    return entries.items
  } catch (error) {
    console.error('Error fetching entries:', error)
    return []
  }
}

// Fetching Assets
export async function fetchAssets() {
  try {
    const entries = await await client.getAssets()
    return entries.items
  } catch (error) {
    console.error('Error fetching assets:', error)
    return []
  }
}

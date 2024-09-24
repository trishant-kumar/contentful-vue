// Fetching all data using Fetch API
const fetchDataFromContentful = async () => {
  const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${space}/entries?access_token=${accessToken}`
  )
  const data = await response.json()
  return data
}

export { fetchDataFromContentful }

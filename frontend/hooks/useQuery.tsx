import useSWR, { SWRConfiguration } from 'swr'

interface Options extends SWRConfiguration {
  filters?: { [key: string]: string }
}

export const useQuery = (
  key: string[] | string | false,
  path: string,
  options?: Options,
) => {
  const filters = options?.filters || {}
  const filteredSearch = Object.entries(filters).reduce(
    (acc, [key, value]) => (value == null ? acc : { ...acc, [key]: value }),
    {},
  )
  const search = new URLSearchParams(filteredSearch)

  const origin = process.env.NEXT_PUBLIC_HOST

  return useSWR(
    key ? generateKey(key, filters) : null,
    () =>
      fetch(`${origin}${path}?` + search).then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          const error = new Error('An error ocurred. Please try again later.')
          // error.data = data
          throw error
        }
        return data
      }),
    options,
  )
}

export type QueryKey = string | string[] | { [key: string]: string }

export const generateKey = (...items: QueryKey[]) =>
  items
    .reduce<string[]>((keys, item) => {
      if (typeof item === 'string') return [...keys, item]
      if (Array.isArray(item)) return [...keys, ...item]
      // if is an object, order by keys
      const ordered = Object.entries(item)
        .sort((a, b) => {
          const first = a[0].toUpperCase()
          const second = b[0].toUpperCase()
          return first < second ? -1 : first > second ? 1 : 0
        })
        .map(([key, value]) => `${key}=${value}`)
      return [...keys, ...ordered]
    }, [])
    .join(' ')

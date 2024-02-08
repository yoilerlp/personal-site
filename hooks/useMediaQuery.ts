import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const mediaListener = (e: any) => setMatches(e.matches)

    media.addEventListener('change', mediaListener)
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
      media.removeEventListener('change', mediaListener)
    }
  }, [matches, query])

  return matches
}

export default useMediaQuery

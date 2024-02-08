export const capitalizeFullText = (texto: string): string => {
  return texto.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
}

export const removeDuplicate = (list: string[]) => {
  return [...new Set(list)]
}

export const formatDate = (dateS: string) => {
  try {
    const date = new Date(dateS)

    const formater = Intl.DateTimeFormat('es-CO', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })

    return formater.format(date)
  } catch (error) {
    return dateS
  }
}

export enum imgurSizes {
  small = 's',
  bigScuare = 'b',
  smallThumbnail = 't',
  mediumThumbnail = 'm',
  largueThumbnail = 'l',
  hugeThumbnail = 'h',
}

export const getImgurImgInSize = (url: string, size: imgurSizes) => {
  if (size === imgurSizes.small) return url

  const parts = url.split('.')

  const extension = parts.pop()
  return parts.join('.') + size + '.' + extension
}

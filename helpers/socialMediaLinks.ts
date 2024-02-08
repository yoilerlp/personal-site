import type { IconName } from '@/components/Icon'
import { MySocialMediaLinks } from '@/util/aboutMe'

type SocialIconData = {
  brandColor: string
  link: string
  iconName: IconName
}

export const SocialMediaLinksItemsDetails: SocialIconData[] = [
  // {
  //   iconName: 'FacebookIcon',
  //   brandColor: '#4267B2',
  //   link: MySocialMediaLinks.facebook,
  // },
  // {
  //   iconName: 'InstagramIcon',
  //   brandColor: '#e1306c',
  //   link: MySocialMediaLinks.instagram,
  // },
  {
    iconName: 'TwitterIcon',
    brandColor: '#1DA1F2',
    link: MySocialMediaLinks.twitter,
  },
  {
    iconName: 'LinkedinIcon',
    brandColor: '#0a66c2',
    link: MySocialMediaLinks.linkedin,
  },
  {
    iconName: 'GithubIcon',
    brandColor: '#333',
    link: MySocialMediaLinks.github,
  },
]

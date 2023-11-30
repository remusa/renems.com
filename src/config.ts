import type { Site, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://renems.com',
  author: 'René MS',
  desc: 'Personal website.',
  title: 'René MS',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
}

export const LOCALE = ['en-EN'] // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 40,
  height: 40,
}

export const SOCIALS: SocialObjects = [
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: 'Github',
    href: 'https://renems.com/github',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://renems.com/linkedin',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: 'Facebook',
    href: 'https://renems.com/facebook',
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: 'Instagram',
    href: 'https://renems.com/instagram',
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: 'Twitter',
    href: 'https://renems.com/twitter',
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: 'Twitch',
    href: 'https://renems.com/twitch',
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: 'YouTube',
    href: 'https://renems.com/youtube',
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: 'WhatsApp',
    href: 'https://renems.com/whatsapp',
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: 'Snapchat',
    href: 'https://renems.com/snapchat',
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: 'Pinterest',
    href: 'https://renems.com/pinterest',
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: 'TikTok',
    href: 'https://renems.com/tiktok',
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: 'CodePen',
    href: 'https://renems.com/codepen',
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: 'Discord',
    href: 'https://renems.com/discord',
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: 'GitLab',
    href: 'https://renems.com/gitlab',
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: 'Reddit',
    href: 'https://renems.com/reddit',
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: 'Skype',
    href: 'https://renems.com/skype',
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: 'Steam',
    href: 'https://renems.com/steam',
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: 'Telegram',
    href: 'https://renems.com/telegram',
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: 'Mastodon',
    href: 'https://renems.com/mastodon',
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
]

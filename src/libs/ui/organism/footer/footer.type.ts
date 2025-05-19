export type TFooter = {
  socials: {
    title: string
    items: Array<{ name: string; url: string; icon: string }>
  }

  links: {
    title: string
    items: Array<{ name: string; url: string; icon: string }>
  }

  services: {
    title: string
    items: Array<{ name: string; url: string }>
  }
  blogs: {
    title: string
    items: Array<{ title: string; url: string }>
  }
  regions: {
    title: string
    items: Array<{ flag: string; name: string; irl: string }>
  }
}

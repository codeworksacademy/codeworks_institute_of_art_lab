export class Artwork {
  alt = ''
  slug = ''
  constructor(data) {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.unsplashLink = data.originalLink
    this.description = data.description
    this.alt = data.altDescription
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
    this.thumbImg = data.imgUrls.thumb
    this.smallImg = data.imgUrls.small
    this.regularImg = data.imgUrls.regular
    this.fullImg = data.imgUrls.full
    this.rawImg = data.imgUrls.raw
  }

  get altDescription() {
    if (this.alt) return this.alt
    let alt = this.slug
    alt = alt.replace('-' + this.id, '')
    // @ts-ignore
    alt = alt.replaceAll('-', ' ')
    return alt
  }
}


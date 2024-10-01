import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"

class ArtworksService {
  async getArtworks() {
    const response = await api.get('api/artworks')
    logger.log('GOT ARTWORKS 🖼️🖼️🖼️', response.data)
    const artworks = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = artworks
  }
}

export const artworksService = new ArtworksService()
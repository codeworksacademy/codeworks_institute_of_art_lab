import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtworksService {
  async getArtworks() {
    const response = await api.get('api/artworks')
    logger.log('GOT ARTWORKS 🖼️🖼️🖼️', response.data)
  }
}

export const artworksService = new ArtworksService()
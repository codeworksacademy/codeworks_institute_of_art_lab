import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/Artwork.js"
import { AppState } from "@/AppState.js"

class ArtworksService {

  async getArtworks() {
    const response = await api.get('api/artworks')
    logger.log('GOT ARTWORKS 🖼️🖼️🖼️', response.data)
    this.handleResponseData(response.data)
  }

  async changePage(pageNumber) {
    AppState.artworks.length = 0
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    logger.log('GOT ARTWORKS 🖼️🖼️🖼️', response.data)
    this.handleResponseData(response.data)
  }

  handleResponseData(responseData) {
    const artworks = responseData.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = artworks
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.pages
  }
}

export const artworksService = new ArtworksService()
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
  async toggleAdmiration(artworkId) {
    const response = await api.post(`api/artworks/${artworkId}/admire`)
    logger.log('ADMIRED ARTWORK 👏🖼️', response.data)
    const updatedArtwork = new Artwork(response.data)
    const artworkIndex = AppState.artworks.findIndex(artwork => artwork.id == artworkId)
    AppState.artworks.splice(artworkIndex, 1, updatedArtwork)
    AppState.activeArtwork = updatedArtwork
  }

  handleResponseData(responseData) {
    const artworks = responseData.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = artworks
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.pages
  }


  setActiveArtwork(artwork) {
    AppState.activeArtwork = artwork
  }
}

export const artworksService = new ArtworksService()
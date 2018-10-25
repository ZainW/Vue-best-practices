import * as api from './api'

export default {
  async fetchUser (userId) {
    const { data } = await api.GET(`/users/${userId}`)
    return data
  }
}

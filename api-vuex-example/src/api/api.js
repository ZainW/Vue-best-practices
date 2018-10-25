import axios from 'axios'

export const instance = axios.create()

export function initialize ({ baseURL }) {
  instance.defaults.baseURL = baseURL
  return instance
}

export function updateSessionToken (token) {
  Object.assign(instance.defaults, { params: { token } }) // appends a token as a url param
  Object.assign(instance.defaults.headers, { Authorization: `Bearer ${token}` }) // adds a token to the authorization header
}

export function GET (endpoint, params = {}) {
  return instance.get(endpoint, { params })
}

export function POST (endpoint, params) {
  return instance.post(endpoint, { ...params })
}

export function PUT (endpoint, params) {
  return instance.put(endpoint, { ...params })
}

export function PATCH (endpoint, params) {
  return instance.patch(endpoint, { ...params })
}

export function DELETE (endpoint) {
  return instance.delete(endpoint)
}

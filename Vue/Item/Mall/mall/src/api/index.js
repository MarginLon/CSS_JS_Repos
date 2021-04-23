import http from '../utils/http'

export function getAA() {
    return http.get('/api/v1/index-infos')
}
export function getCart() {
    return http.get('/api/v1/shop-cart')
}
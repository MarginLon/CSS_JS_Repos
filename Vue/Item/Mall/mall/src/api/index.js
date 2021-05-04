import http from '../utils/http'

export function getAA() {
    return http.get('/api/v1/index-infos')
}
export function getCart() {
    return http.get('/api/v1/shop-cart')
}
export function login(params) {
    return http.post('/api/v1/user/login', params)
}
export function register(params) {
    return http.post('/api/v1/user/register', params)
}
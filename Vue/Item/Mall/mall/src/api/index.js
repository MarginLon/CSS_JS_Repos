import http from '../utils/http'

export function getAA() {
    return http.get('v1/index-infos')
}
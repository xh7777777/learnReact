import request from '../utils/request'

export function getUserListAPI(index) {
    return request({
        url:`https://api.github.com/search/users?q=${index}`,
        method:'get'
    })
}
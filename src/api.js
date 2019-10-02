import * as axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {"Content-Type": "application/json"}
});


export const roomsAPI = {
    getRooms() {
        return instance.get(`rooms`)
            .then(response => {
                    return response.data
                }
            )
    },

    getSingleRoom(slug) {
        return instance.get(`rooms?slug=${slug}`)
            .then(response => {
                    return response.data
                }
            )
    }
}


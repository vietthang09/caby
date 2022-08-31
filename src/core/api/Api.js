import AXIOS from "./axiosClient";

export const searchVideo = async (data) => {
    try {
        const res = await AXIOS.get(`youtube/search?q=${data}&page=1`)
        return res.data;
    } catch (error) {
        return error
    }
}

export const streamVideo = async (id) => {
    try {
        const res = await AXIOS.get(`youtube/stream/${id}`)
        return res.data
    } catch (error) {
        return error;
    }
}

export const listMusic = async (id) => {
    try {
        const res = await AXIOS.get(`music/${id}`)
        return res.data
    } catch (error) {
        return error;
    }
}



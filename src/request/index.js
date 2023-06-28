import axios from "axios";
const http = axios.create({
    baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
export const fetchPlaylistHot = () =>
    http.get('/playlist/hot')
export const fetchPlaylists = (cat) =>
    http.get('/top/playlist',{params: { cat },})
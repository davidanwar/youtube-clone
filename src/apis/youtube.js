import axios from 'axios';
const KEY = 'AIzaSyDiQ3QW-iPiKUWJXcNScuMruQtLWjeP-lQ';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
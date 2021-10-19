import axios from "axios";

export default {
    getAllGames(options) {
        return axios.get("/api/get-all-games", {
            options
        })
    }
}
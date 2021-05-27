export default {
    state: () => ({
        title: '',
        loading: false
    }),
    getters: {},
    mutations: {},
    actions: {
        async searchMovies (context) {
            state.loading = true
            const res = await axios.get(`https://www.omdbapi.com/?apikey=d454eb0&s=${this.title}`)
            console.log(res)
            this.loading = false
        }
    }
}
<template>
    <div>
        <v-text-field
            v-model="title"
            outlined
            @keypress.enter="searchMovies">
        <template v-slot:prepend-inner>
            <v-icon>search</v-icon>
        </template>
        <template v-slot:append >
            <v-progress-circular
                v-if="loading"
                size="24" 
                color="primary"
                indeterminate />

        </template>

        </v-text-field>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        title : {
            get () {
                return this.$store.state.movie.title
            },
            set (title) {
                this.$store.commit('movie/updateState', {
                    title
                })
            }
            
        },
        loading () {
            return this.$store.state.movie.loading
        }
    },
    methods:  {
        // .then 이용한 비동기
        // searchMovies () {
        //     axios.get(`https://www.omdbapi.com/?apikey=d454eb0&s=${this.title}`)
        //         .then(res => {
        //             console.log(res)
        //         })
        // }

        // async await 이용한 비동기
        // async searchMovies () {
        //     this.loading = true
        //     const res = await axios.get(`https://www.omdbapi.com/?apikey=d454eb0&s=${this.title}`)
        //     console.log(res)
        //     this.loading = false
        // }

        ...mapActions('movie', [
            'searchMovies'
        ])
    }
}
</script>
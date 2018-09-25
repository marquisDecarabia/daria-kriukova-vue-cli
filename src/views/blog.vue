<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div
                    class="column is-one-quarter"
                    v-for="(article, index) in articles"
                    :key="index">
                    <a :href="article.url" target="_blank">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img :src="article.urlToImage" :alt="article.title">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">{{ article.title }}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // export default {
    //     name: 'blog',
    //     async asyncData({ app }) {
    //         const { articles } = await app.$axios.$get(
    //             `https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=${
    //                 process.env.API_KEY
    //             }`
    //         );
    //         return { articles };
    //     }
    // };
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

    export default {
        data (){
            return {
                articles: [],
                API_KEY: '4a24859e550047168d37a01ee3b9eaeb' 
            }
        },
        created(){
            // this.getArticles(this.articles)
            this.axios.get(
                `https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=${
                    this.API_KEY
                }`).then(response => {
                    console.log(response.data.articles)
                    this.articles = response.data.articles
                }).catch(e => {
                    throw(e)
                });
        },
    };
</script>
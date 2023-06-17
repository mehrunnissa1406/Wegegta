<template>
    <div class="mx-10">
        <h1 class="md:text-3xl sm:text-lg md:text-text font-bold md:my-16 sm:my-6">Featured Post</h1>
        <router-link :to="`blog/${4}`">
            <VRow>
                <VCol class="md:border md:p-4" cols="4" md="4">
                    <h1 class="uppercase text-green-900"><span
                            class="bg-green-100 rounded md:p-1 sm:text-xs md:text-sm">Entrepreneurship</span></h1>
                    <h1 class="md:text-4xl sm:text-lg font-bold">Ideas that changed the Agribusiness</h1>
                    <h6 class="text-text opacity-60 md:pt-3 md:text-sm sm:text-xs">July 28, 2022 · 6 min read</h6>
                </VCol>
                <VCol cols="8" md="8">
                    <img :src="img" class="w-100" alt="">
                </VCol>
            </VRow>
        </router-link>
        <div class="flex justify-between md:mt-20 md:mb-5 sm:my-10">
        <h1 class="md:text-2xl sm:text-lg font-bold">Recent Posts</h1>
        <h1 class="sm:flex md:hidden sm:text-sm font-bold">See All</h1>
        </div>
        <v-sheet>
            <v-slide-group v-model="model">
                <v-slide-group-item v-for="(post, index) in posts" :key="index"
                    v-slot="{ isSelected, toggle, selectedClass }">
                    <router-link :to="`blog/${index}`"><v-card class="bg-slate-100 md:w-60 md:mx-6 md:h-100 sm:w-48 sm:h-auto sm:mx-2"
                            @click="toggle">
                            <div class="align-center justify-center">
                                <v-scale-transition>
                                    <v-icon v-if="isSelected" color="white" size="48"
                                        icon="mdi-close-circle-outline"></v-icon>
                                    <img :src="post.img" class="" alt="">

                                </v-scale-transition>
                                <div class="p-3 md:space-y-4">
                                    <h1 class="md:text-sm sm:text-xs"><span class="bg-slate-100 p-1 rounded">{{ post.subh }}</span></h1>
                                    <h1 class="md:text-2xl sm:text-xl">{{ post.h1 }}</h1>
                                </div>
                            </div>
                        </v-card></router-link>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>
<script>
import img from '../assets/images/Blog/Card.png'
import img2 from '../assets/images/Blog/Image (2).png'
import img3 from '../assets/images/Blog/Image.png'
// import img1 from '../assets/images/Home/MV/chicken-2.png'

export default {
    data() {
        return {
            img,
            model: null,
            posts: [
                {
                    subh: 'NEUTRAL',
                    h1: '7 Things about Agribusiness & Wegegata',
                    img: img3,
                },
                {
                    subh: 'NEUTRAL',
                    h1: '7 Things about Agribusiness & Wegegata',
                    img: img2,
                },
                {
                    subh: 'NEUTRAL',
                    h1: '7 Things about Agribusiness & Wegegata',
                    img: img3,
                },
                {
                    subh: 'NEUTRAL',
                    h1: '7 Things about Agribusiness & Wegegata',
                    img: img2,
                },
            ],
        }
    }

}
</script>
<template>
    <div id="blog">
        <VRow class="md:pl-20 md:py-28">
            <VCol cols="9" md="4">
                <img :src="vector" class="flex flex-col md:w-10 sm:w-6 md:pb-2" alt="">
                <h1 class="flex flex-col text-sn md:text-5xl sm:text-xl font-bold md:mb-12 sm:mb-6">{{ title }}</h1>
                <p1 class="font-serif md:text-lg sm:text-sm">{{ p1 }}</p1>
            </VCol>
            <VCol cols="12" md="7" class="md:ml-20 md:mt-10">
                <router-link to="/blog"><v-sheet>
                        <v-slide-group v-model="model">
                            <v-slide-group-item v-for="(post, index) in posts" :key="index"
                                v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card class="bg-slate-100 md:w-80 md:mx-6 md:h-100 sm:w-72 sm:h-auto sm:mx-2"
                                    @click="toggle">
                                    <div class="align-center justify-center">
                                        <v-scale-transition>
                                            <img :src="post.img" class="" alt="">
                                        </v-scale-transition>
                                        <div class="p-3 md:space-y-4">
                                            <h1 class="md:text-xl text-sn">{{ post.date }}</h1>
                                            <h1 class="font-semibold sm:text-sm sm:my-2 md:text-lg"><span class="">{{ post.h1
                                            }}</span></h1>
                                            <h1 class="md:text-sm sm:text-xs">{{ post.p1 }}</h1>
                                            <p class="text-pm font-medium md:text-lg sm:text-sm mt-4">Read More</p>
                                        </div>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet></router-link>
            </VCol>
        </VRow>
    </div>
</template>

<script>
import vector from '../assets/images/Home/about/AboutSI.png'
import p1 from '../assets/images/Products/Rectangle 28 (3).png'
import p2 from '../assets/images/Products/Rectangle 28.png'
export default {
    data() {
        return {
            p1,
            p2,
            model: null,
            vector,
            title: 'Blog Insights',
            p1: 'These are just a few examples of how agri businesses are using technology to address the challenges facing the agricultural industry. As these technologies continue to develop, agri businesses will be well-positioned to meet the growing demand for food and agricultural products',
            posts: [
                { img: p2, date: 'FEB 09, 2023', h1: 'Wegegta Fishery & Ethiopia market', p1: 'The fishery and Ethiopian market is a growing industry. Ethiopia has a large population and a growing economy, which is creating a demand for fish. The country also has a number of natural resources that are conducive to fish production, such as rivers, lakes, and reservoirs.' },
                { img: p1, date: 'FEB 09, 2023', h1: 'Roasted Coffee  Export', p1: "Ethiopia is the birthplace of coffee, and it is still one of the world's leading producers of green coffee beans.The Ethiopian coffee industry is worth an estimated $3 billion per year.The majority of Ethiopia's coffee is exported, with the United States, Germany, and Japan being the largest markets." },
            ],
        }
    }
}
</script>

<style scoped>
#blog {
    width: 100%;
    background: linear-gradient(to right,
            white 0%,
            white 80%,
            #ED8E26 80%,
            #ED8E26 100%);
}
</style>
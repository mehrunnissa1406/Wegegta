<template>
<div class="md:my-20 md:mx-40 sm:my-10 sm:mx-10">
<h1 class="text-sn md:text-4xl sm:text-xl mb-12 font-bold">{{ post.h1 }}</h1>
<VRow>
    <VCol cols="1">
        <span class="text-white bg-orange-300 md:text-3xl sm:text-lg rounded-full md:p-4 sm:p-2">W</span>
    </VCol>
    <VCol class="md:ml-0 sm:ml-3">
    <span class="md:text-2xl sm:text-lg text-black">{{ post.author }}</span>
    <div class="text-xs text-text">{{ post.published }}</div>
    </VCol>
</VRow>
<div class="md:m-16">
<p>{{ post.p1 }}</p>
    <img :src="require(`../assets/images/Blog/${post.img}`)" class="w-100 my-10" alt="">
    <p>{{ post.p2 }}</p><br>
    <p>{{ post.p3 }}</p>
    <div class="m-10 text-left">
    <li>{{ post.li1 }}</li><br>
    <li>{{ post.li2 }}</li><br>
    <li>{{ post.li3 }}</li><br>
    </div>
    <p>{{ post.p4 }}</p>
    <h1 class="my-10 text-black font-bold text-xl">{{ post.subh }}</h1>
    <p>{{ post.p5 }}</p>
    <p class="my-10">{{ post.p6 }}</p>
    <div class="m-10 text-left">
        <li>{{ post.l1 }}</li><br>
        <li>{{ post.l2 }}</li><br>
        <li>{{ post.l3 }}</li><br>
        </div>
    <p class="mb-10">{{ post.p7 }}</p>
</div>
</div>
</template>

<script setup>
import { useRoute, RouterView } from "vue-router"
import posts from "../data/posts.json"
const route = useRoute()
const post = posts.find(p => p.id === parseInt(route.params.id))
</script>
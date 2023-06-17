<template>
<div class="mb-20 mt-4">
    <hero/>
</div>
    <div class="my-20">
        <venture/>
    </div>
</template>
<script>
import venture from '../components/Venture.vue'
import hero from '../components/VHero.vue'
export default {
    components:{
        venture,
        hero,
    }
}
</script>
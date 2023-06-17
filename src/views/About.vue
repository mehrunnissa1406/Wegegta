<template>
    <div class="mb-20 mt-4">
        <Hero />
    </div>
    <div class="my-20">
        <mission />
    </div>
    <div class="my-20">
        <value />
    </div>
    <div class="md:my-20 sm:mx-12 md:mx-0">
        <team />
    </div>
</template>
<script>
import Hero from '../components/AHero.vue'
import mission from '../components/AMission.vue'
import value from '../components/AValue.vue'
import team from '../components/ATeam.vue'
export default {
    components: {
        Hero,
        mission,
        value,
        team,
    }
}
</script>
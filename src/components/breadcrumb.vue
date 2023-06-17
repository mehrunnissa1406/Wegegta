<template>
    <v-breadcrumbs :items="items" class="hidden md:flex">
        <template v-slot:prepend>
        </template>
    </v-breadcrumbs>
</template>
<script>
export default {
    props:['link'],
    data(){
        return {
            items: [
                {
                    title: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    title: this.link,
                    disabled: true,
                    href: this.link,
                },
            ],
        }
    }
}
</script>
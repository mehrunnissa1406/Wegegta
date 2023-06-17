<template>
  <Header class="relative bg-white top-0 bootom-0 right-0"></Header>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/footer.vue'
export default {
  components: {
    Header, 
    Footer,
  },
}
</script>




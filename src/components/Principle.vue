<template>
  <div class="principle">
  <h1>{{principle.name}}</h1>
  <h1>{{principle.description}}</h1>
  </div>
</template>


<script>
import store from '../store/solid-store'

export default {
  name: 'principle',
  data () {
    return {
       principle: store.getPrinciple(this.$route.params.letter)
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>
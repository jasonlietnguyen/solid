<template>
  <div class="solid">
   <h1>S.O.L.I.D</h1>
   <ul>
     <li v-for="letter in solid">
     <router-link :to="'/solid/' + letter">{{letter}}</router-link>
     </li>
   </ul>
  </div>
</template>

<script>

export default {
  name: 'solid',
  data () {
    return {
      solid: 'SOLID'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

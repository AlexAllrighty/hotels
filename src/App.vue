

<template>

  <div id="App">
    <navigation></navigation>
    <search></search>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Tahoma, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }



</style>

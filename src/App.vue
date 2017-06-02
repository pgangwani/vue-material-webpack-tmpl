<template lang="pug">

#app
  link(rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic")
  link(rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons")
  
  md-toolbar
    h2.md-headline Title goes here

    md-button.md-raised(@click.native="$router.push('/')") Hello
    md-button.md-raised.md-accent(@click.native="$router.push('/test')") Test
  
  p Material icons:
    md-icon build
    md-icon copyright
    md-icon g_translate
  
  router-view
    
</template>


<script>
  export default {
    name: 'app'
  }

</script>

<style lang="scss">
  

</style>

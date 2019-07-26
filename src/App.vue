<template>
  <div id="app">
  	
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
	data () {
	    return {}
	}
}
</script>

<style lang="scss">
#app {
  max-width: 750px;
  margin: 0 auto;
}

</style>

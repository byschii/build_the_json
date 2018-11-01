<template>
  <div id="app">
    <object-displayer :object-source="jsonIntergitySource"/>
  </div>
</template>




<script>
import ObjectDisplayer from "./components/ObjectDisplayer.vue";
import { jsonManager } from "./jsonManager.js"

export default {
  name: 'app',
  components:{
    "object-displayer":ObjectDisplayer
  },
  data(){
    var data = {jsonIntergitySource: jsonManager.body["integrity"]};
    return data;
  },


  computed:{},
  created: function(){ }
}
</script>















<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

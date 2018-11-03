<template>
  <div class="pkr_container">
    <span>{{label}}</span>
    <select>
      <option v-for="opt in options" v-bind:key="opt" @click="setDecided(opt)">
        {{opt}} 
      </option>
    </select>
      <div class="innerObjectDisplayerZone">
          <caronte altro="google" :datiDaTraghettare="selectedObject"/>
      </div>
  </div>
</template>

<script>
//
import ObjectDisplayer from "./ObjectDisplayer.vue";
import Caronte from "./Caronte.vue";
import _ from "lodash";
import cr from "crypto-js";

export default {
  name:"picker",
   components: {
      "object-displayer":ObjectDisplayer,
      "caronte":Caronte
   },
   props: {
      label: {
         type: String,
         default: "Tipo:",
         required: false
      },
      sourceData: { // che sono le opzioni
         type: Object,
         required: true
      }
   },
   data() {
      var state = {
         options :[],
         selected: null,
         randomino: null,
         selectedObject: null
      };
      return state;
   },   
   methods: {
      setDecided(opz) {
         this.selected = opz;
         
         this.selectedObject = this.sourceData[this.selected];
         this.randomino = cr.SHA1(this.selected).toString();
      }
   },
   created: function() {
      this.options = _.keys(this.sourceData);
      
      this.selected = this.options[0];
      this.selectedObject = this.sourceData[this.selected];
   }
};
</script>


<style scoped>
div > * {
   /*margin: 1pt;
}
div.pkr_container {
   border: 1px solid #333;*/
}
</style>

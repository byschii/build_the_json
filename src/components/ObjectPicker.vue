<template>
  <div class="pkr_container">
    <span>{{label}}</span>
    <select>
      <option v-for="opt in options" v-bind:key="opt" @click="setDecided(opt)">
        {{opt}} 
      </option>
    </select><pre>{{selected}}</pre>
      <div class="innerObjectDisplayerZone">
             <!-- <object-displayer :object-source="selectedObject"/>-->
             <pre>
              <dummy-comp :text="experiment"/>
             </pre>
      </div>
  </div>
</template>

<script>
//
import ObjectDisplayer from "./ObjectDisplayer.vue";
import DummyComp from "./DummyComp.vue";
import _ from "lodash";

export default {
  name:"picker",
   components: {
      "object-displayer":ObjectDisplayer,
      "dummy-comp" : DummyComp
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
         options :[]
      };
      return state;
   },

   computed:{
      jsonToExplore(){
        return this.sourceData[this.selected];
      },

      experiment(){
        let r1 = _.random(0,10);
        let r2 = _.random(10,100);
        return [r1,r2];
      }

   },
   
   methods: {
      setDecided(opz) {
         this.selected = opz;

      }
   },

   created: function() {
      this.options = _.keys(this.sourceData);
      this.selected = this.options[0];
   }
};
</script>


<style scoped>
div > * {
   margin: 1pt;
}
div.pkr_container {
   border: 1px solid #333;
}
</style>

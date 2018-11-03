<template>
   <div class="external" v-if="display">
      <div class="propper">
         <div v-for="property in properties_data" v-bind:key="property">
            <properties-filler :sourceData="property"/>
         </div>
      </div>
      <div class="costanti"> 
         <div v-for="c of costanti_data" v-bind:key="c">
            <string-displayer :sourceData="c"/>
         </div>
      </div>

      <div class="pickers">
         <object-picker v-if="hasOtherInnerObjects" :sourceData="picker_data"/>
      </div>

  </div>
</template>

<script>
import PropertiesFiller from "./PropertiesFiller.vue";
import ObjectPicker from "./ObjectPicker.vue";
import StringDisplayer from "./StringDisplayer.vue";

import Vue from 'vue'
import { jsonManager } from "../jsonManager.js";

import _ from "lodash";

export default {
   name: "object-displayer",
   components: {
      "properties-filler":PropertiesFiller,
      "string-displayer":StringDisplayer,
      "object-picker":ObjectPicker
   },
   props: {
      objectSource: {
         required: true
      }
   },
   data() {
      let datas = {
         dataSource:null,
         properties_data: [],
         costanti_data: [],
         picker_label: "",
         hasOtherInnerObjects: true,
         picker_data: {},
         display :true

      };
      return datas;
   },
   watch:{
      objectSource: function(newVal, oldVal){
         this.dataSource = newVal;
         var _self = this;

         _self.display = false;
         
         this.properties_data = [];
         this.costanti_data = [];

         Vue.nextTick(function (){
            _self.buildaTutto();
            _self.display = true;
            //_self.$forceUpdate();
         });

         //console.log(newVal, oldVal);
      }
   },
   methods:{
      buildaTutto(){

         //PROCEDERE NELL ORDINE DEL TEMPLATE, quindi prima il propertiesFiller
         let allPropertiesSets = jsonManager.utilities.exploreObjects.getInnerArrays(this.dataSource);
         for (let elem of _.toPairs(allPropertiesSets)){
            this.properties_data.push(elem);
         }


         //POI LE STRINGHE
         let allStringsSet = jsonManager.utilities.exploreObjects.getInnerStrings(this.dataSource);
         for (let elem of _.toPairs(allStringsSet)){
            this.costanti_data.push(elem);
         }

         //POI IL FAMIGERATO PICKER
         let allObjectsSet = jsonManager.utilities.exploreObjects.getInnerObjects(this.dataSource);
         this.picker_data = allObjectsSet;

         this.hasOtherInnerObjects = ( (_.keys(this.picker_data)).length != 0 );
         
      }
   },

   created: function() {
      this.dataSource = this.objectSource; //metto i dati di input in data
      this.buildaTutto();
   }
};
</script>






<style scoped>
div.external {
   border: 4pt solid #111;
   padding: 1pt;
}
div.pickers {
   border: 2pt solid #445;
   padding: 2pt;
   margin: 1pt;
}
div.propper {
   border: 2pt solid #aab;
   padding: 2pt;
   margin: 1pt;
}
div.costanti {
   border: 1pt solid #778;
   padding: 2pt;
   margin: 1pt;
}
</style>

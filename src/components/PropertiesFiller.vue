<template>
  <div class="section">
    <div>
      {{description}}
    </div>
    <div class="keyval" v-for="field in fields" v-bind:key="field">
      <span> {{field}} </span> 
      <input :id="description" @keyup="updtValue(field, $event)"> 
    </div>
  </div>
  
</template>

<script>

export default {
   name:"properties-filler",
   props: {
      sourceData:{
        type: Array,
        required: true
      }
   },
   data() {
      return {
        fields :[],
        description:""
      };
   },
   methods: {
      updtValue(prop, val) {
        console.log("value of " + prop + " in " + val.target.id + " updated to " + val.target.value )
      }
   },
   created: function() {
    this.description = this.sourceData[0];
    this.fields = this.sourceData[1];
   }
};
</script>

<style scoped>
div > * {
   /*border: 3px;
   margin: 1pt;

}
div.section {
   border: 1pt solid black;*/
}
</style>

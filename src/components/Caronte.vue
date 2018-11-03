<template>
	<div class="objectDisplayerZone">
		<!--<span>{{altro}}</span>-->
		<object-displayer :objectSource="datiDaTraghettare"/>

	</div>
</template>

<script>
import _ from "lodash";
import ObjectDisplayer from "./ObjectDisplayer.vue";
import Vue from 'vue'

export default {
	name :"caronte",
	//components:{
	//	"object-displayer":ObjectDisplayer,
	//},
	props:{
		datiDaTraghettare:{
			type: Object,
			required:false
		},
		altro:{
			type:String
		}
	},
	watch:{
		datiDaTraghettare: function(newVal, oldVal){
			console.log("NUOVO:" + newVal);
			console.log("VECCHIO:"+ oldVal);
		}
	},
	mounted: function(){
		//console.log(this.datiDaTraghettare);
	},
	created: function(){
		//this.$options.components['object-displayer'] = Vue.extend(Caronte);
		//this.$options.components['caronte'] = Vue.extend(ObjectDisplayer);

		this.$options.components['object-displayer'] = Vue.extend(ObjectDisplayer);

	}
}
</script>

<style scoped>
	span{
		font-size: 20pt;
	}
</style>
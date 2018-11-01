<template>
	<span>{{textSpace}}</span>
</template>

<script>
import _ from "lodash";

export default {
	name :"dummy-comp",
	props:{
		text:{
			type: String,
			required:true
		}
	},
	data(){
		return {textSpace : []}
	},
	created: function(){
		this.textSpace = _.words(this.text);

	}
}
</script>

<style scoped>
	span{
		font-size: 20pt;
	}
</style>
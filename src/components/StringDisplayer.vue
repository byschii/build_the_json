<template>
	<span>
		{{key}} -> {{val}}
	</span>
</template>

<script>
import _ from "lodash";

export default {
	name:"string-displayer",
	props:{
		sourceData:{
			type: Array,
			required: true
		}
	},
	data(){
		return {
			key:"",
			val:""
		}
	},
	created: function(){
		this.key = _.toPairs(this.sourceData)[0][1];
		this.val = _.toPairs(this.sourceData)[1][1];

	}
}
</script>

<style scoped>
	
</style>
<template>
	<div class="ui">
	 	<div v-show="isFetching" class="ui active centered inline loader"></div>
		<div v-show="newsList.length" class="ui bottom content">
			<div v-for="(news,index) in newsList">

			</div>
		</div>
		<!-- 避免使用v-else  -->
		<div v-show="!newsList.length && !isFetching">暂无数据</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		created(){
		   this.$store.dispatch('getNewsList');
		},
	  	computed: mapGetters({
            newsList:'getNewsList',
            isFetching:'isFetching'
      	}),
	    methods:{

	    }
	}
</script>
<style lang="less" scoped>
	
</style>
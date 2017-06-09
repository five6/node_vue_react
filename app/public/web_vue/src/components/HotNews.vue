<template>
	<div class="ui">
	 	<div v-show="isFetching" class="ui active centered inline loader"></div>
        <div v-for="(news,index) in newsList">
            <p>
                <span>{{news.title}}</span>
                <span>{{news.time}}</span>
            </p>
        </div>
		<!-- 避免使用v-else  -->
		<div v-show="!newsList.length && !isFetching">暂无数据</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex';
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

	    },
		components:{
		}
	}
</script>
<style lang="less" scoped>
	
</style>
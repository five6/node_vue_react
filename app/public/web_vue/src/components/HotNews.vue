<template>
	<div class="">
	 	<div v-show="isFetching" class="ui active centered inline loader"></div>
        <diV class="news-infinite-container" id="news-infinite-container">
            <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
            <mu-list>
                <template v-for="(news,index) in newsList">
                    <mu-list-item>
                        <mu-sub-header>{{news.time}}</mu-sub-header>
                        <mu-content-block>
                            {{news.title}}
                        </mu-content-block>
                    </mu-list-item>
                </template>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </diV>
		<!-- 避免使用v-else  -->
		<div v-show="!newsList.length && !isFetching">暂无数据</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex';
	export default{
		data(){
            return{
                scroller: null,
                trigger: null,
            }
		},
		created(){
		   this.$store.dispatch('getNewsList');
		},
        mounted(){
            this.scroller = document.getElementById("news-infinite-container");
            this.trigger = this.$el;
        },
	  	computed: mapGetters({
            newsList:'getNewsList',
            isFetching:'isFetching',
            refreshing:'refreshing',
            loading:'loading'
      	}),
	    methods:{
            refresh () {
                this.refreshing = true;
                this.$store.dispatch('getNewsList');
//                setTimeout(() => {
//                    this.refreshing = false
//                }, 2000)
            },
            loadMore () {
                this.loading = true;
                var newsList = this.newsList;
                var lastNews = newsList[newsList.length-1];
                var newsId =lastNews._id;
                this.$store.dispatch('getMoreNews',{newsId:newsId,page:1,per_page:20});
//                setTimeout(() => {
//                    for(var i= 0;i< 10;i++){
//                        this.newsList.push({
//                            title:"",
//                            time:new Date()
//                        })
//                    }
//                    this.loading = false;
//                }, 2000)
            }
	    },
		components:{
        }
	}
</script>
<style lang="css" scoped>
    .news-infinite-container{
        width: 100%;
        height: 700px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #d9d9d9;
    }
</style>
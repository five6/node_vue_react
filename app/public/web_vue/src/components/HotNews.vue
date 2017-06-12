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
            var newsId = "";
            var page = this.page;
            var per_page = this.per_page;
            this.$store.dispatch('getNewsList',{newsId:newsId,page:page,per_page:per_page,init:true});
		},
        mounted(){
            this.scroller = document.getElementById("news-infinite-container");
            this.trigger = this.$el;
        },
	  	computed: mapGetters({
            newsList:'getNewsList',
            isFetching:'isFetching',
            refreshing:'refreshing',
            loading:'loading',
            page:'page',
            per_page:'per_page'
      	}),
	    methods:{
            refresh () {
                this.refreshing = true;
                var newsId = "";
                var page = this.page;
                var per_page = this.per_page;
                this.$store.dispatch('getNewsList',{newsId:newsId,page:page,per_page:per_page,init:false});
            },
            loadMore () {
                this.loading = true;
                var newsList = this.newsList;
                var lastNews = newsList[newsList.length-1];
                var newsId =lastNews._id;
                var page = this.page;
                var per_page = this.per_page;
                this.$store.dispatch('getMoreNews',{newsId:newsId,page:page,per_page:per_page});
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
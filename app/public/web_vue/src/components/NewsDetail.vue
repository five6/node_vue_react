<template>
    <div class="newsDetail">
        <iframe v-show="news" ref="iframe" :src="news ? news.source :''" class="iframe"></iframe>
        <span v-show="!news">News Missing</span>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name: 'hello',
        props:['news'],
        data () {
            return {
                msg: '新闻详情页面'
            }
        },
        created(){

        },
        computed: mapGetters({

        }),
        mounted(){

        },
        methods:{
            showMenus(){

            }
        }
    }
</script>

<style lang="less" scoped>
    .newsDetail{
        height: 780px;
    }
    .iframe{
        width: 100%;
        height:100%;
        border: 0;
    }
</style>

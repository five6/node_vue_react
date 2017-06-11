export default {
	getNewsList:state => state.newsList,
	isFetching:state => state.isFetching,
    refreshing:state => state.refreshing,
    loading:state => state.loading,
    per_page:state => state.per_page,
    page:state => state.page
}
export default {
    state: {
        tagsList: [],
        activeIndex:'10'
    },
    mutations: {
        commitTagList(state, playload) {
            state.tagsList = playload
        }
    }
}
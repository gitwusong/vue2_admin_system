<script>
import vTags from '@/views/common/Tags.vue'
export default {
    components: {
        vTags
    },
    data() {
        return {
            tagsList: []
        }
    },
    watch: {
        '$store.state.tags.tagsList'(newVal) {
            const arr = []
            for (let i = 0; i < newVal.length; i++) {
                if (newVal[i].name) {
                    newVal[i].name && arr.push(newVal[i].name)
                }
            }
            this.tagsList = arr
        }
    },
    render() {
        return (
            <div id='app'>
                <router-view name = 'headerView'/>
                <v-tags/>
                <div id='om-globalView'>
                    <keep-alive include = { this.tagsList }>
                        <router-view name='globalView' />
                    </keep-alive>
                </div>
            </div>
        )
    }
}
</script>

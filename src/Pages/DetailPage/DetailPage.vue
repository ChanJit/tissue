<template>
    <div>
        <TabView/>
    </div>
</template>

<script>
import HorizontalBarChart from './components/HorizontalBarChart'
import TabView from './components/TabView'

export default {
  name: 'DetailPage',
  components: {
    HorizontalBarChart,
    TabView
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

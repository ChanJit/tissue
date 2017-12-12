<template>
  <v-container row>
    <v-flex class="text-xs-left" subheading lighten-4>Total weekly cost: </v-flex>
    <h2>RM {{totalExpenses}}</h2>
    <template v-for="item in items" >
      <div v-bind:key="item.title">
        <v-layout>
          <v-flex class="text-xs-left" xs6 v-text="item.title"></v-flex>
          <v-flex>RM {{item.price}}</v-flex>
        </v-layout>
      </div>
    </template>
  </v-container>
</template>

<script>
  export default {
    name: "cost-details",
    props: {
      items: {
        type: Array
      }
    },
    computed: {
      totalExpenses: function () {
        const result = this.items.reduce((previous, current) => {
            return {price: current.price + previous.price};
        });

        return result.price || 0;
      }
    },
    mounted: function() {
      console.log(this.items)
    }
  }
</script>

<style scoped>

</style>

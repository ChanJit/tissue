<template>
  <v-container row class="costDetailsContainer">
    <div class="containerTitle"> Estimated {{dateMode.name}} Cost </div>
    <div class="subtitle">below are rough estimation of your {{dateMode.name.toLowerCase()}} expenses on average, it would be varied for everyone</div>
    <h2 class="totalExpense">RM {{totalExpenses}}</h2>
    <template v-for="item in items" >
      <div v-bind:key="item.title">
        <v-layout class="center">
          <v-flex class="text-xs-left item-text" xs6 v-text="item.title"></v-flex>
          <v-flex class="item-text">RM {{item.price}}</v-flex>
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
      },
      dateMode: {
        type: Object
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
.center{
  align-items: center;
  justify-content: center;
}

.costDetailsContainer{
  justify-content: center;
  align-items: center;
}

.containerTitle{
  color: #2d3092;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}

.totalExpense{
  margin-top: 10px;
  margin-bottom: 40px;
}

.subtitle{
  font-style: italic;
  font-size: 12px;
  color: grey;
}

.item-text{
  font-size: 15px;
  max-width: 200px;
}
</style>

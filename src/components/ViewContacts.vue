<template>
  <div>
    <b-table striped hover @row-clicked="rowClick" :items="items"></b-table>
  </div>
</template>

<script>
export default {
  methods: {
    rowClick(row) {
      this.$router.push({ path: `/edit/${row.id}` })
    }
  },
  data() {
    return {
      items: [
        { id: 1, firstName: 'Dickerson', lastName: 'Macdonald' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

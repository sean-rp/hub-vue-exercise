<template>
  <div>
    <b-table striped hover @row-clicked="rowClick" :items="contacts"></b-table>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  methods: {
    rowClick(row) {
      this.$router.push({ path: `/edit/${row.id}` })
    }
  },
  // props: ['contacts'],
  data() {
    return {
      contacts: this.contacts
    }
  },
  mounted () {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {
    //     this.contacts = response.data.map(contact => {
    //       return {
    //         id: contact.id,
    //         name: contact.name,
    //         street: contact.address.street,
    //         city: contact.address.city,
    //         zip: contact.address.zipcode,
    //         email: contact.email,
    //         phone: contact.phone,
    //       }
    //     })
    //   })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

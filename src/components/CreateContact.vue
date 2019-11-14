<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <legend>Contact Info</legend>
        <b-form-input
          v-model="all.form.name"
          id="first-name"
          placeholder="First Name"
        ></b-form-input>
        <b-form-input
          v-model="all.form.address.street"
          id="street"
          placeholder="Street"
        ></b-form-input>
        <b-input-group>
          <b-form-input
            v-model="all.form.address.city"
            id="city"
            placeholder="City"
          ></b-form-input>
          <b-form-select 
            v-model="all.form.address.state" 
            id="state" 
            :options="states"
          ></b-form-select>
          <b-form-input
            v-model="all.form.address.zip"
            id="zip"
            placeholder="ZIP"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="all.form.email"
          id="email"
          placeholder="Email"
        ></b-form-input>
        <b-form-input
          v-model="all.form.phone"
          id="phone"
          placeholder="Phone"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit">Submit</b-button>
    </b-form>
    <!-- TODO remove before PR -->
    <div style="background: #222; border: 2px solid deeppink; border-radius: 4px; margin-top: 80px; padding: 20px;">
      <code>
        {{ all }}
      </code>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateContact',
  props: {
  },
  // TODO why does data have to be function sometimes?
  data() {
    return {
      all: {
        message: 'Please fill your information in the form below',
        form: {
          name: null,
          address: {
            street: null,
            city: null,
            state: null,
            zip: null,
          },
          email: null,
          phone: null,
        },
      },
      states: [
        { value: null, text: 'State', disabled: true},
        { value: 'il', text: 'Illinois' },
        { value: 'mi', text: 'Michigan' },
        { value: 'mn', text: 'Minnesota', disabled: true },
      ]
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      axios
        .post('https://jsonplaceholder.typicode.com/users', this.form)
        .then((response) => {
          console.log(response)
          // TODO add confirmation toast
          // TODO spread response ID into form object and add to contacts array
          this.$router.push({ path: `/` })
        })
        // TODO add error message?
        .catch(error => console.log(error))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

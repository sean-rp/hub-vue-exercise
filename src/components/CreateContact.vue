<template>
  <div>
    <b-form>
      <b-form-group>
        <legend>Contact Info</legend>
        <b-input-group>
          <b-form-input
            v-model="all.form.firstName"
            id="first-name"
            placeholder="First Name"
          ></b-form-input>
          <b-form-input
            v-model="all.form.lastName"
            id="last-name"
            placeholder="Last Name"
          ></b-form-input>
        </b-input-group>
        <b-form-input
          v-model="all.form.address"
          id="address"
          placeholder="Address"
        ></b-form-input>
        <b-input-group>
          <b-form-input
            v-model="all.form.city"
            id="city"
            placeholder="City"
          ></b-form-input>
          <b-form-input
            v-model="all.form.state"
            id="state"
            placeholder="State"
          ></b-form-input>
          <b-form-input
            v-model="all.form.zip"
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
      <b-form-group>
        <legend>Preferences</legend>
        <b-form-select v-model="all.form.selectedLunch" :options="options"></b-form-select>
      </b-form-group>
    </b-form>
    <!-- TODO remove before PR -->
    <div style="border: 2px solid deeppink; border-radius: 4px; margin: 20px; padding: 20px;">
      <code>
        {{ all }}
      </code>
    </div>
  </div>

</template>

<script>
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
          firstName: null,
          lastName: null,
          address: null,
          city: null,
          state: null,
          zip: null,
          email: null,
          phone: null,
          selectedLunch: null,
        },
      },
      options: [
        { value: null, text: 'Please select' },
        { value: 'a', text: 'Pizza' },
        { value: 'b', text: 'Hamburger' },
        { value: 'c', text: 'Salad', disabled: true }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

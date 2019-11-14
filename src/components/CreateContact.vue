<template>
  <div>
    <b-form>
      <b-form-group>
        <legend>Contact Info</legend>
        <b-input-group>
          <b-form-input
            v-model="all.form.firstName"
            id="first-name"
            placeholder="Enter First Name"
            ></b-form-input>
            <b-form-input
            v-model="all.form.lastName"
            id="last-name"
            placeholder="Enter Last Name"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group>
        <legend>Preferences</legend>
        <b-form-select v-model="all.form.selectedLunch" :options="options"></b-form-select>
      </b-form-group>
    </b-form>
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

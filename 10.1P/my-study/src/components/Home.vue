<template>
  <h2>Welcome {{ fname }} {{ lname }}!</h2>
  <p>What is your name?</p>
  <p>First Name: <input id="fname" v-model="fname" /></p>
  <p>Last Name: <input id="lname" v-model="lname" /></p>
  <p>
    <input
      id="ocean"
      type="radio"
      name="location"
      value="ocean"
      v-model="checked"
      checked
    />
    <label for="ocean">Ocean</label>
    <input
      id="mountain"
      type="radio"
      name="location"
      value="mountain"
      v-model="checked"
    />
    <label for="mountain">Mountain</label>
  </p>
  <span v-if="checked === 'mountain'"
    ><img alt="Mountain" src="../assets/mountain.jpg"
  /></span>
  <span v-else><img alt="Ocean" src="../assets/ocean.jpg" /></span>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      checked: null,
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  export default {
    components: {
      EditProfileForm,
    },
    data() {
      return {
        model: {}
      }
    }
  }
</script>
<style>
</style>

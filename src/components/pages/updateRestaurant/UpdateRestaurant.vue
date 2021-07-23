<template>
  <FrontEnd>
    <template v-slot:nav>
      <Nav></Nav>
    </template>
    <template v-slot:main>
      <div>
        <div class="container">
          <h1 class="text-center py-3">Update Restaurant</h1>
          <form @submit.prevent="addRestaurantHandler">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" class="form-control" v-model="name" id="" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Address</label>
              <input type="text" class="form-control" v-model="address" id="" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Contact</label>
              <input type="text" class="form-control" v-model="contact" id="" />
            </div>

            <div class="d-grid">
              <button type="submit" class="d-block btn btn-primary">
                Update Restaurant
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </FrontEnd>
</template>

<script>
import Nav from "../../includes/Nav.vue";
import FrontEnd from "../../layouts/frontEnd/FrontEnd.vue";

export default {
  name: "UpdateRestaurant",
  components: {
    Nav,
    FrontEnd,
  },
   data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
};
</script>

<style>
</style>
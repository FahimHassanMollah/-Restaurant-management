<template>
  <div>
    <FrontEnd>
      <template v-slot:nav>
        <Nav></Nav>
      </template>
      <template v-slot:main>
        <div class="container">
          <h1 class="text-center py-3">Add Restaurant</h1>
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
                Add Restaurant
              </button>
            </div>
          </form>
        </div>
      </template>
    </FrontEnd>
  </div>
</template>

<script>
import Nav from "../../includes/Nav.vue";
import FrontEnd from "../../layouts/frontEnd/FrontEnd.vue";
import axios from "axios";

export default {
  name: "AddRestaurant",
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
  beforeRouteEnter (to, from, next) {
     const user = JSON.parse(localStorage.getItem('user-info'))
     if (user) {
         next()
     }
     else{
         next('/signIn')
     } 
  },
  methods: {
    async addRestaurantHandler() {
      try {
        const response = await axios.post("http://localhost:3000/restaurants", {
          name: this.name,
          address: this.address,
          contact: this.contact,
        });
        if (response.status === 201) {
            this.$router.push({name:'Home'})
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
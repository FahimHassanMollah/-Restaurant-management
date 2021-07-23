<template>
  <FrontEnd>
    <template v-slot:nav>
      <Nav></Nav>
    </template>
    <template v-slot:main>
      <div>
        <div class="container">
          <h1 class="text-center py-3">Update Restaurant</h1>
          <form @submit.prevent="updateRestaurantHandler">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" class="form-control" v-model="name"  id="" />
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
import {useRoute} from 'vue-router'
import axios from 'axios';

export default {
  name: "UpdateRestaurant",
  components: {
    Nav,
    FrontEnd,
  },
   data() {
    return {
      id:'',
      name: "",
      address: "",
      contact: "",
      restaurantInfo:''
    };
  },
  beforeRouteEnter (to, from, next) {
    const user = localStorage.getItem('user-info')
    if (user) {
      next()
    }
    else{
      next('/SignIn')
    }
  },
 async created(){
    const route = useRoute()
    this.id = route.params.id

   const response =await axios.get(`http://localhost:3000/restaurants?id=${this.id}`)
   this.restaurantInfo = response.data[0]
   this.name =this.restaurantInfo.name;
   this.address =this.restaurantInfo.address;
   this.contact =this.restaurantInfo.contact;


  },
  methods:{
   async updateRestaurantHandler(){
     const response =await axios.put(`http://localhost:3000/restaurants/${this.id}`,{
       name:this.name,
       address:this.address,
       contact:this.contact
     })
     if (response.status === 200) {
       this.$router.push({name:'Home'})
     }
    }
  }
 
};
</script>

<style>
</style>
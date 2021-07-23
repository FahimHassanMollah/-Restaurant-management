<template>
  <div>
    <FrontEnd>
      <template v-slot:nav>
        <Nav></Nav>
      </template>
      <template v-slot:main>
        <div class="container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact</th>
                <th colspan="2" scope="" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(restaurant,index) in restaurants" :key="index">
                <th scope="row">{{ restaurant.id }}</th>
                <td>{{ restaurant.name }}</td>
                <td>{{ restaurant.address }}</td>
                <td>{{ restaurant.contact }}</td>
                <td>
                    <router-link :to="`/UpdateRestaurant/${restaurant.id}`" class="btn btn-warning">Update</router-link>
                   
                </td>
                <td>
                     <button class="btn btn-danger">Delete</button>
                   
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </FrontEnd>
  </div>
</template>

<script>
import Nav from "../../includes/Nav.vue";
import FrontEnd from "../../layouts/frontEnd/FrontEnd.vue";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    FrontEnd,
    Nav,
  },
 async created(){
   try {
       const response = await axios.get('http://localhost:3000/restaurants'); 
       if (response.status === 200) {
           this.restaurants = response.data
       }
   } catch (error) {
       console.log(error)
   }

  }
  ,
  data(){
      return {
          restaurants:''
      }
  },
  methods:{

  }
};
</script>

<style>
</style>
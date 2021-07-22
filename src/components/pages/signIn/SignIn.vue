<template>
  <FrontEnd>
      <template v-slot:nav>
        <Nav></Nav>
      </template>
      <template v-slot:main>
        <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h1 class="text-center">Sign In</h1>
            <form @submit.prevent="signInHandler">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  id="exampleInputEmail1"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  id="exampleInputPassword1"
                />
              </div>

            <div class="d-grid">
                <button type="submit" class="d-block btn btn-primary">Sign In</button>
            </div>
            <div class="text-center">
              <router-link to="/signUp">
                <button class="btn ">Sign Up</button>
              </router-link>
            </div>
            </form>
          </div>
        </div>
      </div>
      </template>
  </FrontEnd>
</template>

<script>
import Nav from '../../includes/Nav.vue'
import FrontEnd from '../../layouts/frontEnd/FrontEnd.vue'

export default {
    name:'SignIn',
    components:{
        Nav,FrontEnd
    },
    data(){
        return {
            email:"",
            password:""
        }
    },
    methods:{
        signInHandler(){
            
        }
    }
}
</script>

<style>

</style>
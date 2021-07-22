<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Resturant management </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link active" aria-current="page" >Home</router-link>
          <router-link to="/signUp" class="nav-link active" aria-current="page" >Sign up</router-link>
          <router-link to="/signIn" class="nav-link active" aria-current="page" >Sign In</router-link>
         
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:'Nav'
};
</script>

<style></style>

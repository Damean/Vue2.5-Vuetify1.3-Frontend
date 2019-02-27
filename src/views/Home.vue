<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-space-around>
      <v-flex v-for="i in 6" :key="`1${i}`" xs12 md6 lg4 >
        <v-card dark >
          <v-img src="http://lorempixel.com/640/480/city" aspect-ratio="2.5" ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Lorem ipsum</h3>
              <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>

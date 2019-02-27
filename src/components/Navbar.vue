<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Ventus </span>
        <span class="font-weight-light">Interactive</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="" dark>
      <v-layout column align-center>
        <v-flex class="mt-5 text-xs-center">
          <v-avatar size="100" color="grey lighten-5 pa-2">
            <img src="/ventus_logo.svg" class="ma-2" >
          </v-avatar>
          <p class="white--text subheading mt-1 ">
            <span>Ventus </span>
            <span class="font-weight-light">Interactive</span>
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.icon" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Coming Soon', route: '/' },
        { icon: 'folder', text: 'Coming Soon', route: '/' },
        { icon: 'person', text: 'Coming Soon', route: '/' },
      ],
      snackbar: false,
    }
  }
}
</script>

<style>

</style>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <!-- {{ routeLinks }} -->
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-subtitle>created by</v-list-item-subtitle>
            <v-list-item-title class="title">Avinaba Dutta</v-list-item-title>
            <v-list-item-subtitle>
              duttaavinaba98@gmail.com
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="routes in routeLinks"
          :key="routes.path"
          link
          v-if="routes.name != 'index'"
          :to="routes.path"
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ routes.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{
              routes.name.toUpperCase()
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Rabindrasangeet -AIO</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    select: "",
    drawer: false,
    routeLinks: []
  }),
  created() {
    this.getRoutes();
  },
  methods: {
    getRoutes() {
      this.routeLinks = this.$router.options.routes;
      console.log(this.routeLinks);
    }
  }
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <h1>Hello</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    select: "",
    drawer: false,
  }),
};
</script>

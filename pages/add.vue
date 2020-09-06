<template>
  <div>
    <v-card :loading="loading">
      <v-card-title>Insert a song details</v-card-title>
      <v-card-subtitle>Details</v-card-subtitle>
      <v-card-text>
        <v-alert
          color="error white--text"
          v-if="errors.length"
          icon="mdi-alert"
          dark
          outlined
        >
          <div v-for="(error, i) in errors" :key="error">
            {{ i + 1 }}. {{ error }}
          </div>
        </v-alert>
        <v-text-field
          hide-details="auto"
          label="Song Name"
          filled
          v-model="song.name"
          autocomplete="off"
          class="mb-2"
        ></v-text-field>
        <v-row>
          <v-col cols="12" sm="3">
            <v-text-field
              hide-details="auto"
              label="Origin"
              filled
              v-model="song.origin"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              hide-details="auto"
              label="Parjay"
              filled
              v-model="song.parjay"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              hide-details="auto"
              label="Collection"
              filled
              v-model="song.collection"
              autocomplete="off"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              hide-details="auto"
              label="Swarabitan"
              filled
              v-model="song.swarabitan"
              autocomplete="off"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
          v-model="song.lyrics"
          auto-grow
          label="Songs Lyrics"
          filled
        ></v-textarea>
        <v-btn @click="submit" :loading="loading" :disabled="loading"
          >Save</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    errors: [],
    song: {
      name: "",
      origin: "",
      parjay: "",
      collection: "",
      swarabitan: "",
      lyrics: ""
    },
    loading: false
  }),
  methods: {
    submit() {
      this.errors = [];
      if (this.song.name == "") this.errors.push("Song name must not be empty");
      if (this.song.lyrics == "")
        this.errors.push("Song lyrics must not be empty");
      if (this.errors.length == 0) {
        // this.loading = true;
        fetch("/api/song", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "post",
          body: JSON.stringify(this.song)
        });
      }
    }
  }
};
</script>

<style></style>

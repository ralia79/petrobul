<template>
  <div class="container">
    <v-app-bar elevate-on-scroll color="transparent">
      <v-toolbar-title class="title"> LOGO SECTON </v-toolbar-title>

      <v-toolbar-items>
        <ul class="d-flex align-center justify-center">
          <li>Start</li>
          <li>Heizol bestellen</li>
          <li>Uber uns</li>
          <li>Kontakt</li>
        </ul>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <ul class="d-flex align-center justify-center">
          <div class="d-flex flex-row align-center">
            <span class="material-icons d-flex align-center justify-center"
              >alternate_email
            </span>
            <p class="pa-0 ma-0">info@petrboul-jeizoel.de</p>
          </div>
          <div class="d-flex flex-row align-center">
            <span class="material-icons d-flex align-center justify-center"
              >phone_in_talk</span
            >
            <p class="pa-0 ma-0">022335067787</p>
          </div>
          <div class="d-flex flex-row align-center">
            <span class="material-icons d-flex align-center justify-center"
              >flag</span
            >
            <p class="pa-0 ma-0">GR</p>
          </div>
        </ul>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<style>
.title {
  cursor: pointer;
}

ul {
  margin-left: 30px;
  gap: 2rem;
}

span {
  width: 2rem;
  height: 2rem;
  color: white;
  background-color: #ca0000;
  padding: 5px;
  margin: 0 5px 0 0;
  border-radius: 50%;
  scale: 0.7;
}
</style>

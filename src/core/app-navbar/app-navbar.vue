<template>
  <div class="container">
    <v-app-bar elevate-on-scroll color="transparent">
      <v-toolbar-title class="title"> PETROBUL </v-toolbar-title>

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
          <div class="d-flex flex-row">
            <i class="material-icons">mail</i>
            <p>info@petrboul-jeizoel.de</p>
          </div>
          <div class="d-flex flex-row">
            <p>022335067787</p>
          </div>
          <div class="d-flex flex-row">
            <p>GR</p>
          </div>
        </ul>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<style lang="scss">
.title {
  cursor: pointer;
}

ul {
  margin-left: 30px;
  gap: 2rem;
}
</style>

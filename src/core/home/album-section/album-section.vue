<template>
  <div class="w-100 pink-bg pt-10">
      <v-container class="d-flex flex-column align-center">
            <h2 class="blue-text text-bold text-h4 pb-10">Die wichtigsten Fragen</h2>
            <album v-for="(item , key) in questionCardItem" :key="key" :isLeft="item.isLeft" :show-btn="item.showBtn" :text-btn="item.textBtn" :image="item.image" :items="item.items" />
      </v-container>
  </div>
</template>

<script src="./album-section.component.ts"></script>

<template>
  <v-row no-gutters v-if="images.length === 1">
    <v-col cols="12">
      <v-card flat tile class="d-flex ma-1">
        <v-img
        max-height="380"
        :src="!preview ? !isErrorLoadingImage ? `${images[0]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp' : images[0].preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(0)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  <v-row no-gutters v-else-if="images.length === 2">
    <v-col cols="6" v-for="(im, i) in images" :key="im">
      <v-card flat tile class="d-flex" :class="i === 0 ? 'mr-1' : null">
        <v-img
        height="280"
        :src="!preview ? (!isErrorLoadingImage ? `${im}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : im.preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(i)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  <v-row no-gutters v-else-if="images.length === 3">
    <v-col cols="8">
      <v-card flat tile class="d-flex mb-1">
        <v-img
        height="380"
        :src="!preview ? (!isErrorLoadingImage ? `${images[0]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[0].preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(0)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="4" column>
      <v-row no-gutters>
      <v-col cols="12">
        <v-card flat tile class="d-flex ma-1">
          <v-img
          height="190"
          :src="!preview ? (!isErrorLoadingImage ? `${images[1]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[1].preview"
          aspect-ratio
          @error="isErrorLoadingImage = true"
          @click="isErrorLoadingImage ? null : showFullImage(1)"
          >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="grey"></v-progress-circular>
            </v-row>
          </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card flat tile class="d-flex mx-1">
          <v-img
          height="190"
          :src="!preview ? (!isErrorLoadingImage ? `${images[2]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[2].preview"
          aspect-ratio
          @error="isErrorLoadingImage = true"
          @click="isErrorLoadingImage ? null : showFullImage(2)"
          >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate color="grey"></v-progress-circular>
            </v-row>
          </template>
          </v-img>
        </v-card>
      </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row no-gutters v-else-if="images.length > 3">
    <v-col cols="12">
      <v-card flat tile class="d-flex mb-1">
        <v-img
        height="380"
        :src="!preview ? (!isErrorLoadingImage ? `${images[0]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[0].preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(0)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card flat tile class="d-flex">
        <v-img
        height="120"
        :src="!preview ? (!isErrorLoadingImage ? `${images[1]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[1].preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(1)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card flat tile class="d-flex mx-1">
        <v-img
        height="120"
        :src="!preview ? (!isErrorLoadingImage ? `${images[2]}` : 'https://r.mt.ru/r29/photoF39E/20185050913-0/jpg/bp@2x.webp') : images[2].preview"
        aspect-ratio
        @error="isErrorLoadingImage = true"
        @click="isErrorLoadingImage ? null : showFullImage(2)"
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey"></v-progress-circular>
          </v-row>
        </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="4" class="text-center">
      <div class="overlay" @click="showFullImage(3)">еще <br/> {{images.length - 3}} фото</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    images: Array,
    preview: Boolean
  },
  data: () => ({
    isErrorLoadingImage: false
  }),
  methods: {
    showFullImage (i) {
      this.$emit('show-full-image', i)
    }
  }
}
</script>

<style lang="scss" scoped>
  .overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.6em;
    background: rgba(0, 0, 0, 0.644);
  }
</style>

<template>
  <!-- simpleEcommerce.vue -->
  <LazyHero />
  <!-- <LazyApplication /> -->
</template>

<script setup>
import Hero from '~/components/hero/index.vue'
import Application from '~/components/Application.vue'
definePageMeta({
  layout: 'simpleEcommerce'
})

useSeoMeta({
  title: 'li socl2, IoT battery, 3.6v lithium battery manufacturer',
  ogTitle: 'li socl2, IoT battery, 3.6v lithium battery manufacturer',
  description: 'The Li-SOCl2 Batteries are renowned for exceptional energy density, extended shelf life and reliability even under extreme temperature conditions',
  ogDescription: 'The Li-SOCl2 Batteries are renowned for exceptional energy density, extended shelf life and reliability even under extreme temperature conditions',
  ogImage: 'https://www.gpww.com/images/hybrid-capacitor-battery.png',
  twitterCard: 'summary_large_image',
})

</script>

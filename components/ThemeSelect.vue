<script setup lang="ts">
import {MoonIcon, SunIcon} from 'lucide-vue-next'

const colorMode = useColorMode()

const themes = ref([
  'light',
  'dark'
])

const icons = {
  light: SunIcon,
  dark: MoonIcon,
}

function nextTheme() {
  const currentIndex = themes.value.indexOf(colorMode.preference);
  const nextIndex = (currentIndex + 1) % themes.value.length;
  colorMode.preference = themes.value[nextIndex]
}

const currentIcon = computed(() => icons[colorMode.preference] ?? null)
</script>

<template>
  <Button variant="outline" v-bind="$attrs" @click="nextTheme" class="min-w-[50px]">
    <component :is="currentIcon"
               class="h-[1.2rem] w-[1.2rem] transition-opacity ease-linear"/>
  </Button>
</template>
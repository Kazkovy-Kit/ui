<script setup lang="ts">
const colorMode = useColorMode()

const themes = ref([
  'light',
  'dark'
])


function nextTheme() {
  const currentIndex = themes.value.indexOf(colorMode.preference);
  const nextIndex = (currentIndex + 1) % themes.value.length;
  colorMode.preference = themes.value[nextIndex]
}

</script>

<template>
  <Button variant="outline" v-bind="$attrs" @click="nextTheme" class="min-w-[50px]">
    <client-only>
      <Icon name="lucide:sun"
            v-show="colorMode.preference === 'light'"
            class="h-[1.2rem] w-[1.2rem] transition-opacity ease-linear"/>
      <Icon name="lucide:moon"
            v-show="colorMode.preference === 'dark'"
            class="h-[1.2rem] w-[1.2rem] transition-opacity ease-linear"/>
    </client-only>
  </Button>
</template>
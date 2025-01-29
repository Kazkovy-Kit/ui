<script setup lang="ts">
const {setLocale, locale, locales, loadLocaleMessages} = useI18n()
await loadLocaleMessages('uk') //Load fallback locale
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" v-bind="$attrs">
        {{ locales.find(l => l.code === locale)?.name }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem v-for="locale in locales" @click="setLocale(locale.code)" class="hover:cursor-pointer">
        {{ locale.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
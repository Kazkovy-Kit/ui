<script setup lang="ts">
const {t} = useI18n()
const props = defineProps<{
  show: boolean,
  reset: () => void,
  submitLoading: boolean
}>()

const loading = ref(false)

async function resetForm() {
  loading.value = true
  setTimeout(() => {
    props.reset()
    loading.value = false
  }, 200)
}

</script>

<template>
  <transition
      name="fancy-slide"
      enter-active-class="transform transition ease-in-out duration-300"
      enter-from-class="translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform transition ease-in-out duration-300"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-full opacity-0"
  >
    <div class='absolute bottom-4 left-0 w-full' v-show="show">
      <Card
          class="px-6 py-4 max-w-xl flex gap-10 justify-center m-auto items-center border-gray-700 bg-zinc-100 dark:bg-zinc-900">
        <span class="text-sm  font-medium">
        {{ t('alerts.changes') }}
      </span>
        <div class="flex items-center gap-2">
          <Button variant="link" :loading="submitLoading || loading" @click.prevent="resetForm" type="reset">
            {{ t('general.clear') }}
          </button>
          <Button variant="default" :loading="submitLoading || loading" type="submit" @click="$emit('submit')">
            {{ t('general.save') }}
          </Button>
        </div>
      </Card>
    </div>
  </Transition>
</template>

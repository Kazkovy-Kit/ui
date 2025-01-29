<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {Primitive, type PrimitiveProps} from 'radix-vue'
import {type ButtonVariants, buttonVariants} from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class'],
  loading?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
      :disabled="loading"
      :as="as"
      :as-child="asChild"
      :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <Icon name="lucide:loader-circle" v-if="loading" class="animate-spin"/>
    <slot v-else/>
  </Primitive>
</template>

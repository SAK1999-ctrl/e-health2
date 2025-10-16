<template>
  <div class="w-full relative h-[31px] text-left text-xs text-gray-100 font-manrope">
    <div class="absolute top-[0px] left-[0px] rounded-num-8 bg-gray-100 border-indigo border-solid border-[1px] box-border w-[267px] h-[31px]" />
    <div class="absolute top-[calc(50%_-_8.42px)] left-[calc(50%_-_122.92px)] font-light inline-block w-num-93_4 h-num-14_2">
      {{ placeholder }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
}

defineProps<Props>()
</script>

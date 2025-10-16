<template>
  <div class="w-full relative h-[50px] text-center text-base text-white font-raleway">
    <div class="absolute top-[0px] left-[calc(50%_-_106.5px)] rounded-[50px] gradient-primary border-white border-solid border-[1px] box-border w-[213px] h-[50px] hover:scale-105 transition-transform cursor-pointer" />
    <div class="absolute top-[9px] left-[calc(50%_-_90.97px)] leading-[31.2px] font-semibold flex items-center justify-center w-[180.8px] cursor-pointer">
      {{ buttonText }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  buttonText: string
}>()
</script>
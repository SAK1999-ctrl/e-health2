<template>
  <div class="w-full relative h-[31px] text-left text-xs text-gray-100 font-manrope">
    <div class="absolute top-[0px] left-[0px] rounded-num-8 bg-gray-100 border-indigo border-solid border-[1px] box-border w-[267px] h-[31px]" />
    <div class="absolute top-[calc(50%_-_8.12px)] left-[calc(50%_-_120.3px)] font-medium inline-block w-num-93_4 h-num-14_2">
      {{ placeholder }}
    </div>
    <img 
      class="absolute top-[13.4px] left-[247.61px] w-2.5 h-[5px] object-contain" 
      src="/src/assets/icons/arrow.svg" 
      alt="Dropdown arrow" 
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
}

defineProps<Props>()
</script>

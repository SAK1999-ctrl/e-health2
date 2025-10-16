<template>
  <div class="w-full relative h-[263px]">
    <img 
      class="absolute top-[3px] left-[2.54px] rounded-[50px] w-[217.2px] h-[257px] object-cover" 
      :src="imageSrc" 
      :alt="imageAlt" 
    />
    <div class="absolute top-[0px] left-[0px] [filter:drop-shadow(20px_30px_30px_rgba(0,_0,_0,_0.25))] rounded-[50px] border-mediumslateblue border-solid border-[3px] box-border w-[222.3px] h-[263px]" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string
  imageAlt: string
}

defineProps<Props>()
</script>

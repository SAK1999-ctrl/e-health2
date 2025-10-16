import { onMounted } from 'vue'

export function useAnimation(selector = '[data-fade]') {
  onMounted(() => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add('fade-in')
    })
  })
}
<template>
  <flow-form :questions="questions" :language="language">
    <slot>
      <CalendlyInlineWidget v-bind="options" />
    </slot>
  </flow-form>
  <div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
import FlowForm from './components/FlowForm.vue'


const options = {
  url: 'https://calendly.com/caeappt/speakwithanexpert',
}

const language = new LanguageModel({
  // Your language definitions here (optional).
  // You can leave out this prop if you want to use the default definitions.
})

const questions = ref([
  new QuestionModel({
    title: 'Question',
    type: QuestionType.MultipleChoice,
    options: [
      new ChoiceOption({
        label: 'Answer'
      })
    ]
  })
])
useCalendlyEventListener({
  onDateAndTimeSelected: event => {
    console.log("onDateAndTimeSelected", event)
  },
})

onMounted(() => {
  /* let recaptchaScript = document.createElement('script')
recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
document.head.appendChild(recaptchaScript)*/
})

// Define props
const { questions: propQuestions, language: propLanguage } = defineProps(['questions', 'language'])
</script>


<style>
/* Import Vue Flow Form base CSS */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
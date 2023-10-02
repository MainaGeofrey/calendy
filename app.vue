<template>

          <div v-if="showCalendarSlot"  class="vff-animate f-fade-in-up field-submittype">
        <slot>
        <CalendlyInlineWidget v-bind="options" />
      </slot>
          </div>
          <div v-else>
      <flow-form :questions="questions" :language="language" :showCalendarSlot="showCalendarSlot">

    </flow-form>
          </div>

<!--  <div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>-->
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import { FlowForm,QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
//import FlowForm from './components/FlowForm.vue'


const options = {
  url: 'https://calendly.com/caeappt/speakwithanexpert',
}

const language = new LanguageModel({
  // Your language definitions here (optional).
  // You can leave out this prop if you want to use the default definitions.
})



const showCalendarSlot = ref(true);

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
    showCalendarSlot.value = false;
  },
})

onMounted(() => {
  /* let recaptchaScript = document.createElement('script')
recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
document.head.appendChild(recaptchaScript)*/
})

// Define props
const { questions: propQuestions, language: propLanguage, showCalendarSlot: propshowCalendarSlot } = defineProps(['questions', 'language', 'showCalendarSlot'])
</script>


<style>
/* Import Vue Flow Form base CSS */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
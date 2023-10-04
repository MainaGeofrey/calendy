<template>
  <div v-if="showCalendarSlot" class="vff-animate f-fade-in-up field-submittype">
    <slot>
      <CalendlyInlineWidget v-bind="options" />
    </slot>
  </div>
  <div v-else>
    <flow-form :questions="questions" :language="language"  :launchCalendarCondition="launchCalendarCondition" v-on:calendar="handleShowCalendar" :nextStepIndex="nextStepIndex" ref="form">

    </flow-form>
  </div>

  <!--  <div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>-->
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import {  QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
import FlowForm from './components/FlowForm.vue'


const options = {
  url: 'https://calendly.com/caeappt/speakwithanexpert',
}



const launchCalendarCondition = ref({
  quizId: 'budget_range',
  quizAnswer: 'schedule_callback'
})
const language = new LanguageModel({
  // Your language definitions here (optional).
  // You can leave out this prop if you want to use the default definitions.
})

const formRef = ref()

const showCalendarSlot = ref(false);
const calendarStepIndex = ref();
const nextStepIndex = ref();

const handleShowCalendar = (value: any) => { 
  showCalendarSlot.value = true;
  calendarStepIndex.value = value.currentStepIndex;
  nextStepIndex.value = ++calendarStepIndex.value
  console.log("^^^^^^^^^handle show calendar index^^^^^^^^^",calendarStepIndex.value)
}

const questions = ref([
  new QuestionModel({
    id: 'vehicle_type',
    //tagline: 'Path B',
    title: '1.What is your preferred Vehicle Type?*',
    //subtitle: 'Path A sounds like a winner! 😉',
    type: QuestionType.MultipleChoice,
    multiple: false,
    required: true,
    options: [
      new ChoiceOption({
        imageSrc: '~/assets/images/facebook.png',
        label: 'Ok, let\'s go with A',
        value: 'path_a',

      }),
      new ChoiceOption({
        label: 'Yes, finish the survey'
      })
    ],
    /*jump: {
      path_a: 'path_a'
    }*/
  }),

      new QuestionModel({
    id: 'budget_range',
    // tagline: '2.What is your Budget Range?*',
    title: '2.What is your Budget Range?*',
    helpTextShow: false,
    type: QuestionType.MultipleChoice,
    multiple: false,
   // allowOther: true,
    required: true,
    options: [
      new ChoiceOption({
        label: '150-200 Bi-Weekly',
        value: '150-200',
      }),
      new ChoiceOption({
        label: '250-350 Bi-Weekly',
        value: '250-350',
      }),
      new ChoiceOption({
        label: 'Above 350 Bi-Weekly',
        value: 'above_350',
      })
    ]
  }),



  new QuestionModel({
    id: 'budget_range',
    tagline: '3.What is your Budget Range?*',
    //title: 'Multiple choice question:',
    helpTextShow: false,
    type: QuestionType.MultipleChoice,
    multiple: false,
    //allowOther: true,
    required: true,
    options: [
      new ChoiceOption({
        label: 'Book a virtual appointment with an expert for an expedited pre-approval tailored to your specific needs',
        value: 'schedule_callback',
      }),
      new ChoiceOption({
        label: 'Enjoy a hassle-free experience using our platform and complete your pre-approval at your own pace',
        value: 'self_serve',
      }),

    ]
  }),





])
useCalendlyEventListener({
  onDateAndTimeSelected: event => {
    //console.log("onDateAndTimeSelected", event)
    showCalendarSlot.value = false;
  },
})


onMounted(() => {
  //formRef.value.focus()
  console.log(formRef.value)
  /* let recaptchaScript = document.createElement('script')
recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
document.head.appendChild(recaptchaScript)*/
})

// Define props
const { questions: propQuestions, language: propLanguage, 
 launchCalendarCondition: proplaunchCalendarCondition, nextStepIndex: propNextStepIndex } = defineProps(['questions', 'language', 'showCalendarSlot'])
</script>  


<style>
/* Import Vue Flow Form base CSS */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; 
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css'; */
</style>
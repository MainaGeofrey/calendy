<template>
  <div v-if="showCalendarSlot" class="">

    <!--    
      <CalendlyInlineWidget v-bind="options" />-->
    <div class="calendly-inline-widget" data-url="https://calendly.com/caeappt/speakwithanexpert"
      style="min-width:320px;height:700px;"></div>

  </div>
  <div v-else>
    <flow-form :questions="questions" :language="language" :launchCalendarCondition="launchCalendarCondition"
      v-on:calendar="handleShowCalendar" :nextStepIndex="nextStepIndex" ref="form">

    </flow-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue'
import { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'
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
  console.log("^^^^^^^^^handle show calendar index^^^^^^^^^", calendarStepIndex.value)


  let recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
  document.head.appendChild(recaptchaScript)
}

const questions = ref([
  new QuestionModel({
    id: 'vehicle_type',
    //tagline: 'Path B',
    title: '1.What is your preferred Vehicle Type?*',
    //subtitle: 'Path A sounds like a winner! 😉',
    type: QuestionType.MultiplePictureChoice,
    multiple: false,
    required: true,
    options: [
      new ChoiceOption({
        imageSrc: '~/assets/images/Depositphotos_7486411_S.jpg',
        imageAlt: 'Sedan',
        label: 'Sedan',
        value: 'Sedan',

      }),
      new ChoiceOption({
        imageSrc: '~/assets/images/Depositphotos_526166136_S.jpg',
        imageAlt: 'SUV',
        label: 'SUV',
        value: 'SUV',

      }),
      new ChoiceOption({
        imageSrc: '~/assets/images/Depositphotos_564946972_S.jpg',
        imageAlt: 'Truck',
        label: 'Truck',
        value: 'Truck',

      }),
      new ChoiceOption({
        imageSrc: '~/assets/images/Depositphotos_353686092_S.jpg',
        imageAlt: 'Van',
        label: 'Van',
        value: 'Van',

      }),
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
    tagline: '',
    //title: 'Multiple choice question:',
    helpTextShow: false,
    type: QuestionType.MultipleChoice,
    multiple: false,
    //allowOther: true,
    required: true,
    options: [
      new ChoiceOption({
        choiceTagLine: 'Schedule a Call Back',
        label: 'Book a virtual appointment with an expert for an expedited pre-approval tailored to your specific needs',
        value: 'schedule_callback',
      }),
      new ChoiceOption({
        choiceTagLine: 'Self-Serve',
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


})

// Define props
const { questions: propQuestions, language: propLanguage,
  launchCalendarCondition: proplaunchCalendarCondition, nextStepIndex: propNextStepIndex } = defineProps(['questions', 'language', 'showCalendarSlot'])
</script>  



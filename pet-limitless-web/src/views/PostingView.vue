<template>
  <FormKit
    type="form"
    #default="{ value, state: { valid } }"
    :plugins="[stepPlugin]"
    @submit="submitApp"
    :actions="false"
  >
    <ul class="steps">
      <li
        v-for="(step, stepName) in steps"
        :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
        @click="activeStep = stepName"
        :data-step-valid="step.valid && step.errorCount === 0"
        :data-step-active="activeStep === stepName"
      >
        <span
          v-if="checkStepValidity(stepName)"
          class="step--errors"
          v-text="step.errorCount + step.blockingCount"
        />
        <div v-if="stepName == 'houseInfo'">房屋資訊</div>
        <div v-if="stepName == 'contactInfo'">聯絡資訊</div>
        <div v-if="stepName == 'tenantRequirement'">房客要求</div>
        <div v-if="stepName == 'otherInfo'">其他資訊</div>
        <!-- {{ camel2title(stepName) }} -->
      </li>
    </ul>

    <!-- .form-body solely for styling -->
    <div class="form-body">
      <section v-show="activeStep === 'houseInfo'">
        <FormKit type="group" id="houseInfo" name="houseInfo">
          <FormKit type="group" v-model="address">
            <FormKit
              type="text"
              label="Street address"
              name="street"
              placeholder="Your street"
              validation="required"
            />

            <FormKit
              type="select"
              label="State"
              name="state"
              placeholder="Your state"
              :options="['公寓', '電梯大樓', '透天厝']"
              validation="required"
            />
          </FormKit>
          <FormKit
            type="text"
            label="標題"
            name="title"
            placeholder="標題"
            validation="required"
          />

          <FormKit
            type="select"
            name="houseType"
            label="房屋類型"
            placeholder="請選擇"
            :options="['雅房', '分租套房', '獨立套房', '整層住家']"
            validation="required"
          />

          <FormKit
            type="select"
            name="buildingType"
            placeholder="請選擇"
            label="建築型態"
            :options="['公寓', '電梯大樓', '透天厝']"
            validation="required"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'contactInfo'">
        <FormKit id="contactInfo" type="group" name="contactInfo">
          <FormKit
            type="text"
            label="*Organization name"
            name="org_name"
            placeholder="MyOrg, Inc."
            help="Enter your official organization name."
            validation="required|length:3"
          />

          <FormKit
            type="date"
            label="Date of incorporation"
            :validation="[['before_date', new Date(Date.now())]]"
            name="date_inc"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'tenantRequirement'">
        <FormKit id="tenantRequirement" type="group" name="tenantRequirement">
          <FormKit
            type="text"
            label="*Organization name"
            name="org_name"
            placeholder="MyOrg, Inc."
            help="Enter your official organization name."
            validation="required|length:3"
          />

          <FormKit
            type="date"
            label="Date of incorporation"
            :validation="[['before_date', new Date(Date.now())]]"
            name="date_inc"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'otherInfo'">
        <FormKit id="otherInfo" type="group" name="otherInfo">
          <FormKit
            type="checkbox"
            label="*I'm not a previous grant recipient"
            help="Have you received a grant from us before?"
            name="not_previous_recipient"
            validation="required|accepted"
            :validation-messages="{
              accepted: 'We can only give one grant per organization.',
            }"
          />
          <FormKit
            type="textarea"
            label="*How will you use the money?"
            name="how_money"
            help="Must be between 20 and 500 characters."
            placeholder="Describe how the grant will accelerate your efforts."
            validation="required|length:20,500"
          />
        </FormKit>
      </section>

      <!-- NEW: Adds Next / Previous navigation buttons. -->
      <div class="step-nav">
        <FormKit
          type="button"
          :disabled="activeStep == 'houseInfo'"
          @click="setStep(-1)"
          label="上一步"
        />
        <FormKit
          type="button"
          class="next"
          v-if="activeStep != 'otherInfo'"
          @click="setStep(1)"
          label="下一步"
        />

        <FormKit
          v-if="activeStep == 'otherInfo'"
          type="submit"
          label="送出"
          :disabled="!valid"
        />
      </div>
    </div>
  </FormKit>
</template>

<script lang="ts">
import { camel2title, axios } from "../utils/utils";
import useSteps from "../utils/useSteps";
import { ref } from "vue";

export default {
  name: "PostingView",

  setup() {
    // NEW: submit handler, which posts to our fake backend.
    const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps();
    const submitApp = async (formData, node) => {
      try {
        const res = await axios.post(formData);
        node.clearErrors();
        alert("Your application was submitted successfully!");
      } catch (err) {
        node.setErrors(err.formErrors, err.fieldErrors);
      }
    };
    const checkStepValidity = (stepName) => {
      return (
        (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) &&
        visitedSteps.value.includes(stepName)
      );
    };

    const address = ref("");

    return {
      steps,
      visitedSteps,
      activeStep,
      setStep,
      stepPlugin,
      submitApp,
      checkStepValidity,
      camel2title,
      address,
    };
  },
};
</script>

<style>
:root {
  --gray: #ccccd7;
  --gray-l: #eeeef4;
}

.formkit-form {
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  background: #fff;
  color: #000;
  border: 1px solid var(--gray);
  border-radius: 0.5em;
  box-shadow: 0.25em 0.25em 1em 0 rgba(0, 0, 0, 0.1);
}

#app .source-content {
  padding: 2em;
  background: transparent;
}

.steps {
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  background: var(--gray-l);
  border-radius: 0.4em 0.4em 0 0;
  overflow: hidden;
  border-bottom: 1px solid var(--gray);
}

.step {
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background: var(--gray-l);
  border-right: 1px solid var(--gray);
  color: gray;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
}

.step:last-child {
  box-shadow: 0.1em -0.1 0.1em 0 rgba(0, 0, 0, 0.33);
}

.step:hover {
  cursor: pointer;
}

[data-step-active="true"] {
  color: black;
  background: white !important;
  border-bottom: none;
  position: relative;
}

.step--errors,
[data-step-valid="true"]:after {
  content: "âœ“";
  background-color: #54a085;
  position: absolute;
  top: 4px;
  right: 4px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
}

.step--errors {
  background-color: #ff4949;
  color: #fff;
  z-index: 100;
}

.step-nav {
  display: flex;
  margin-top: 2em;
  margin-bottom: 1em;
  justify-content: space-between;
}

.form-body {
  padding: 2em;
}

.next {
  margin-left: auto;
}

.formkit-outer[data-type="submit"] .formkit-wrapper {
  padding: 0 2em 1em 2em;
  display: flex;
}

.formkit-outer[data-type="submit"] .formkit-input {
  margin-left: auto;
  margin-right: 0;
}

.formkit-form > .formkit-messages {
  padding: 0 2em 0em 2em;
}
.formkit-form > .formkit-messages:last-child {
  padding: 0 2em 2em 2em;
}

[data-errors="true"] .formkit-label {
  color: #ff4949;
}
.formkit-wrapper {
  max-width: 100%;
}
button:hover {
  cursor: pointer;
}
p {
  max-width: 600px;
}
p small {
  color: #999;
}

@media (max-width: 438px) {
  h1 {
    font-size: 1.15em;
  }
  #app .source-content {
    padding: 0.5em;
  }
  .steps {
    flex-direction: column;
  }
  .step {
    border-bottom: 1px solid var(--gray);
    border-right: none;
  }
  .step:last-child {
    border-bottom: none;
  }
  .form-body {
    padding: 1em;
  }
  .formkit-outer[data-type="submit"] .formkit-wrapper {
    padding: 0 1em 1em 1em;
    display: flex;
  }
  .formkit-form > .formkit-messages {
    padding: 0 1em 0em 1em;
  }
  .formkit-form > .formkit-messages:last-child {
    padding: 0 1em 1em 1em;
  }
}
</style>

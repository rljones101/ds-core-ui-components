<template>
  <div>
    <h2>Text Fields</h2>
    <p>Text fields allow users to input, edit and select text typically inside forms. But they can appear in other places as well like dialog boxes and search.</p>
    <code-viewer>
      <template #header>
        Input and textarea
      </template>
      <template #content>
        <ds-input-wrapper>
          <label>Input - placeholder</label>
          <ds-input placeholder="add your name..." />
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>Input - Read only</label>
          <ds-input
            value="can only read this"
            readonly
          />
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>Input - disabled</label>
          <ds-input
            value="I am disabled"
            :disabled="true"
          />
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>Input - Number</label>
          <ds-input type="number" />
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>Input - Password</label>
          <ds-input type="password" />
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>Textarea</label>
          <ds-textarea />
        </ds-input-wrapper>
      </template>
      <template #html-code-block>
        <pre>
          &lt;ds-input-wrapper>
          &lt;label>Input - placeholder&lt;/label>
          &lt;ds-input placeholder="add your name..." />
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>Input - Read only&lt;/label>
          &lt;ds-input
              value="can only read this"
              readonly
          />
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>Input - disabled&lt;/label>
          &lt;ds-input
              value="I am disabled"
              :disabled="true"
          />
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>Input - Number&lt;/label>
          &lt;ds-input type="number" />
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>Input - Password&lt;/label>
          &lt;ds-input type="password" />
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>Textarea&lt;/label>
          &lt;ds-textarea />
        &lt;/ds-input-wrapper>
        </pre>
      </template>
    </code-viewer>
    <h2>Errors and Messages</h2>
    <p>
      The <code>ds-input-wrapper</code> is used to work with the 3rd party Vue validation <a
        href="https://vuelidate.js.org/"
        target="_blank"
      > Vuelidate</a>:
    </p>
    <code-viewer>
      <template #header>
        Validation
      </template>
      <template #content>
        <ds-input-wrapper :class="messageClass">
          <label>Name</label>
          <ds-input placeholder="add your name..." />
          <span class="ds-helper-text">Please enter your name</span>
          <p class="ds-error">
            Name is required
          </p>
        </ds-input-wrapper>
        <ds-input-wrapper>
          <label>No Error</label>
          <ds-input />
          <span class="ds-helper-text">This will show no styling errors</span>
        </ds-input-wrapper>
        <ds-input-wrapper :class="messageClass">
          <label>Comment</label>
          <ds-textarea />
          <span class="ds-helper-text">please leave a comment and let us know what you think</span>
          <p class="ds-error">
            There is an error
          </p>
        </ds-input-wrapper>
        <md-switch
          v-model="hasMessages"
          class="md-primary"
        >
          {{ !hasMessages ? 'Show' : 'Hide' }} Errors
        </md-switch>
      </template>
      <template #html-code-block>
        <pre>
          &lt;ds-input-wrapper :class="messageClass">
          &lt;label>Name&lt;/label>
          &lt;ds-input placeholder="add your name..." />
          &lt;span class="ds-helper-text">Please enter your name&lt;/span>
          &lt;p class="ds-error">
            Name is required
          &lt;/p>
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper>
          &lt;label>No Error&lt;/label>
          &lt;ds-input />
          &lt;span class="ds-helper-text">This will show no styling errors&lt;/span>
        &lt;/ds-input-wrapper>
        &lt;ds-input-wrapper :class="messageClass">
          &lt;label>Comment&lt;/label>
          &lt;ds-textarea />
          &lt;span class="ds-helper-text">please leave a comment and let us know what you think&lt;/span>
          &lt;p class="ds-error">
            There is an error
          &lt;/p>
        &lt;/ds-input-wrapper>
        &lt;md-switch
            v-model="hasMessages"
            class="md-primary"
        >
          <span v-pre>{{ !hasMessages ? 'Show' : 'Hide' }} Error</span>
        &lt;/md-switch>
        </pre>
      </template>
      <template #javascript-code-block>
        <pre>
import DsInputWrapper from '@/components/controls/ds-input-wrapper/ds-input-wrapper'
import DsInput from '@/components/controls/ds-input/DsInput'
import DsTextarea from '@/components/controls/ds-textarea/DsTextarea'
export default {
  name: 'InputWrapperCode',
  components: {
    DsTextarea,
    DsInput,
    DsInputWrapper
  },
  data() {
    return {
      selectedColor: null,
      colors: [
        { id: 1, name: 'blue' },
        { id: 2, name: 'green' },
        { id: 3, name: 'orange' }
      ],
      hasMessages: false
    }
  },
  computed: {
    messageClass () {
      return {
        'ds-invalid': this.hasMessages
      }
    }
  }
}
        </pre>
      </template>
    </code-viewer>
  </div>
</template>

<script>
import CodeViewer from '@/components/CodeViewer'
export default {
  name: 'InputWrapperCode',
  components: {
    CodeViewer
  },
  data() {
    return {
      selectedColor: null,
      colors: [
        { id: 1, name: 'blue' },
        { id: 2, name: 'green' },
        { id: 3, name: 'orange' }
      ],
      hasMessages: false
    }
  },
  computed: {
    messageClass () {
      return {
        'ds-invalid': this.hasMessages
      }
    }
  }
}
</script>

<style scoped>

</style>

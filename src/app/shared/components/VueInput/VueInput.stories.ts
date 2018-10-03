import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueInput      from './VueInput.vue';

const story = (storiesOf('VueInput', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" />`,
}));

story.add('Disabled', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" :disabled="true" />`,
}));

story.add('Hint', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" message="please enter a number" />`,
}));

story.add('Validation/Error state', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" validation="required" required message="please enter a number" />`,
}));

story.add('Readonly', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" readonly />`,
}));

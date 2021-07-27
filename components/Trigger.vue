<template lang="pug">
  .flex.items-center.justify-center.w-full.mb-12
    label.flex.items-center.cursor-pointer(:for="labelName")
      .relative
        input.sr-only(
          type="checkbox"
          v-model="value"
          :id="labelName"
          @change="handleInput"
        )
        .block.border.border-gray-600.bg-gray-600.w-14.h-8.rounded-full.transition(v-if="value")
        .block.border.border-gray-600.w-14.h-8.rounded-full.transition(v-else)
        .dot.absolute.left-1.top-1.w-6.h-6.rounded-full.transition(
          :class="value ? 'bg-white' : 'bg-gray-600'"
        )
      .ml-3.text-gray-700.font-medium(v-if="label") {{ label }}
</template>
<script>
export default {
  props: [
    'label'
  ],
  prop: ['hidden'],
  model: {
    prop: 'hidden',
    event: 'blur'
  },
  data: () => ({
    labelName: '',
    value: false
  }),
  mounted () {
    this.labelName = Math.random() * 100
  },
  methods: {
    handleInput (e) {
      this.$emit('blur', this.value)
    }
  }
}
</script>
<style lang="scss" scoped>
  input:checked ~ .dot {
    transform: translateX(100%);
    // background-color: #7d14a0;
  }
</style>

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': 'warn',
    'vue/max-attributes-per-line': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/name-property-casing': 'warn',
    'vue/no-multi-spaces': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/no-parsing-error': 'warn',
    'vue/no-duplicate-attributes': 'warn',
    'vue/no-reserved-keys': 'warn',
    'vue/no-shared-component-data': 'warn',
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/no-template-key': 'warn',
    'vue/no-textarea-mustache': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/require-component-is': 'warn',
    'vue/require-prop-type-constructor': 'warn',
    'vue/require-render-return': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/require-valid-default-prop': 'warn',
    'vue/return-in-computed-property': 'warn',
    'vue/use-v-on-exact': 'warn',
    'vue/valid-template-root': 'warn',
    'vue/valid-v-bind': 'warn',
    'vue/valid-v-cloak': 'warn',
    'vue/valid-v-else-if': 'warn',
    'vue/valid-v-else': 'warn',
    'vue/valid-v-for': 'warn',
    'vue/valid-v-html': 'warn',
    'vue/valid-v-if': 'warn',
    'vue/valid-v-model': 'warn',
    'vue/valid-v-on': 'warn',
    'vue/valid-v-once': 'warn',
    'vue/no-async-in-computed-properties': 'warn',
    'vue/no-dupe-keys': 'warn',
    'vue/valid-v-pre': 'warn',
    'vue/valid-v-show': 'warn',
    'vue/valid-v-text': 'warn',
    'vue/attributes-order': 'warn',
    'vue/no-confusing-v-for-v-if': 'warn',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'warn'
  },

  extends: [
    'plugin:vue/recommended',
    //'@vue/standard'
  ],

  'extends': [
    'plugin:vue/recommended',
    //'@vue/standard'
  ]
}

import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'antfu/if-newline': 'off',
  },
})

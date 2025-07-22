import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElButton: typeof import('element-plus')['ElButton'] & {
      size?: 'small' | 'default' | 'large' | 'custom-size' // 添加你的自定义类型
    }
  }
}
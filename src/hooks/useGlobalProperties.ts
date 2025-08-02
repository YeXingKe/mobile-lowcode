import { getCurrentInstance } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { Router } from 'vue-router'

interface GlobalProperties {
  $$refs: any
  $route: RouteLocationNormalizedLoaded
  $router: Router
}

export const useGlobalProperties = () => {
  // 只包含 应用级注入的全局属性，可自定义
  const globalProperties = getCurrentInstance()!.appContext.config
    .globalProperties as unknown as GlobalProperties

  const registerRef = (el, _vid: string) =>
    el && globalProperties.$$refs && (globalProperties.$$refs[_vid] = el)

  return {
    globalProperties,
    registerRef,
  }
}

import type { DefineComponent } from 'vue'

type ModuleType = { default: DefineComponent }

const modules = import.meta.glob<ModuleType>('./*/index.(tsx|vue)', { eager: true }) // 取代 globEager

const components: Record<string, DefineComponent> = {}

console.log('启动', modules)

for (const path in modules) {
  const comp = modules[path].default
  if (comp) {
    components[comp.name || path.split('/')[1]] = comp
  }
}

console.log('left-aside', modules)

export default components

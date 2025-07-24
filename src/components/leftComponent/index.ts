import  type { DefineComponent } from "vue";

const modules = import.meta.glob('./*/index.(tsx|vue)',{ eager: true }); // 取代 globEager

const components:Record<string,DefineComponent> = {}

console.log('启动',modules)

for(const path in modules){
    const comp = modules[path].default;
    if(comp){
      components[comp.name || path.split('/')[1]] = comp        
    }
}

console.log('left-aside',modules)

export default components
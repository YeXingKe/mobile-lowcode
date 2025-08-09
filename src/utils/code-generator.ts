import { VantEnum } from "@/enums/vant"
import type { VisualEditorBlockData } from "./visual-editor"
// import { parse } from "@vue/compiler-sfc"
export const generateCode = function(content, codeType= 'vue') {
  let jsonContent:VisualEditorBlockData = JSON.parse(content)
  
  const defaultTemplate = (templateStr='',scriptStr='')=>{
    return `
    <template>
         ${ templateStr || ''}
    </template>
    <script lang="ts" setup>
         ${ scriptStr || ''}
    </script>
    `
  }

  let scriptStr=''
  let startStr = ''
  let propsStr = ''
  
  if(jsonContent.props && Object.keys(jsonContent.props).length){
    Object.keys(jsonContent.props).forEach((key)=>{
      propsStr+=`:${key}="props.${key}" `
    })    
  }

  scriptStr+=`
    defineOptions({
       name: '${jsonContent._vid}',
    })
    const props = withDefaults(defineProps<{${jsonContent.props}}>(),{})
  `

  if(jsonContent.componentKey === VantEnum.radio){
    startStr += `
    <van-field :name="props.name" modelValue="" ${propsStr}>
      <template #input>
        <van-radio-group v-model="props.modelValue">
          <van-radio v-for="(item,index) in props.options" :name="item.value">{{item.label}}</van-radio>
        </van-radio-group>     
      </template>
    </van-field>
    `
  }else{
    startStr += `
    <van-field :name="props.name" modelValue="" ${propsStr}>
      <template #input>
        <van-${jsonContent.componentKey} v-model="props.modelValue"><van-${jsonContent.componentKey}>
      </template>
    </van-field>
    `
  }
  
  return defaultTemplate(startStr,scriptStr)
}

// export const formatVueCode = (code) => {
//   const { descriptor } = parse(code);
//   return `
//       <template>
//         ${descriptor.template?.content || ''}
//       </template>
//       <script>
//         ${descriptor.script?.content || ''}
//       </script>
//   `; // ✅ 确保反引号闭合
// };
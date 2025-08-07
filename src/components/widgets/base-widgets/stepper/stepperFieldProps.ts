import type { StepperProps } from "vant"
import { createFieldProps } from "../createFieldProps"
import { createEditorInputProp, createEditorModelBindProp, createEditorSwitchProp } from "@/utils/visual-editor-props"


const stepperInternalProps = {
    modelValue: createEditorInputProp({label: '默认值',defaultValue: ''}),
    min:createEditorInputProp({label: '最小值',defaultValue: ''}),
    max:createEditorInputProp({label: '最大值',defaultValue: ''}),
    autoFixed:createEditorSwitchProp({label: '自动校验超出数额',defaultValue: true}),
    // defaultValue:createEditorInputProp({label: '初始化值',defaultValue: '1'}), // 可选
    step:createEditorInputProp({label: '步长',defaultValue: '2'}),
    // name:createEditorInputProp({label: '唯一标识',defaultValue: ''}),
    inputWidth:createEditorInputProp({label: '输入框宽度',defaultValue: '32px'}),
    buttonSize:createEditorInputProp({label: '按钮大小及高度',defaultValue: ''}),
    decimalLength:createEditorInputProp({label: '固定显示的小数位数',defaultValue: ''}),
    theme:createEditorInputProp({label: '样式风格',defaultValue: ''}),
    placeholder:createEditorInputProp({label: '输入框占位符',defaultValue: ''}),
    integer:createEditorSwitchProp({label: '是否只允许输入整数',defaultValue: false}),
    disabled:createEditorSwitchProp({label: '是否禁用步进器',defaultValue: false}),
    disablePlus:createEditorSwitchProp({label: '是否禁用增加按钮',defaultValue: false}),
    disableMinus:createEditorSwitchProp({label: '是否禁用减少按钮',defaultValue: false}),
    disableInput:createEditorSwitchProp({label: '是否禁用输入框',defaultValue: false}),
    // beforeChange:
    showPlus:createEditorSwitchProp({label: '是否显示增加按钮',defaultValue: true}),
    showMinus:createEditorSwitchProp({label: '是否显示减少按钮',defaultValue: true}),
    showInput:createEditorSwitchProp({label: '是否显示输入框',defaultValue: true}),
    longPress:createEditorSwitchProp({label: '是否开启长按手势',defaultValue: true}),
    allowEmpty:createEditorSwitchProp({label: '是否允许输入的值为空',defaultValue: false}),
}

export const stepperFieldProps = () => ({
    name: createEditorModelBindProp({ label: '字段绑定', defaultValue: '' }),
    label: createEditorInputProp({ label: '输入框左侧文本', defaultValue: '步进器' }),
  ...stepperInternalProps,
  ...createFieldProps(),
})
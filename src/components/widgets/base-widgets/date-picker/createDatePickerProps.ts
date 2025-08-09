import {  createEditorDatePickerProp, createEditorInputNumberProp, createEditorInputProp, createEditorSelectProp, createEditorSwitchProp } from "@/utils/visual-editor-props"
import { createFieldProps } from "../createFieldProps"

const datePickerInternalProps = {
    // filter	选项过滤函数	(type: string, options: PickerOption[], values: string[]) => PickerOption[]	-
    // formatter	选项格式化函数	(type: string, option: PickerOption) => PickerOption	-
    // modelValue:createEditorInputProp({label: '当前选中的日期',defaultValue: '2025-08-09'}),
    columnsType:createEditorSelectProp({
        label: '选项类型',
        options: [
            {
                label: "年月日",
                value: ['year', 'month', 'day'],
            },
            {
                label: "年月",
                value: ['year', 'month'],
            },
            {
                label: "月日",
                value: ['month', 'day'],
            },
            {
                label: "年",
                value: ['year'],
            },
            {
                label: "月",
                value: ['month'],
            },
            {
                label: "日",
                value: ['day'],
            },
        ],
        defaultValue: ['year', 'month', 'day'],
    }),
    // minDate:createEditorDatePickerProp({label: '可选的最小时间，精确到日',defaultValue: null}),
    // maxDate:createEditorDatePickerProp({label: '可选的最大时间，精确到日',defaultValue: null}),
    title:createEditorInputProp({label: '顶部栏标题',defaultValue: '选择日期'}),
    confirmButtonText:createEditorInputProp({label: '确认按钮文字',defaultValue: '确认'}),
    cancelButtonText:createEditorInputProp({label: '取消按钮文字',defaultValue: '取消'}),
    showToolbar:createEditorSwitchProp({label: '是否显示顶部栏',defaultValue: true}),
    loading:createEditorSwitchProp({label: '是否显示加载状态',defaultValue: false}),
    readonly:createEditorSwitchProp({label: '是否为只读状态，只读状态下无法切换选项',defaultValue: false}),
    optionHeight:createEditorInputNumberProp({label: '选项高度，支持 px vw vh rem 单位，默认 px',defaultValue: 44}),
    visibleOptionNum:createEditorInputNumberProp({label: '可见的选项个数',defaultValue: 6}),
    swipeDuration:createEditorInputNumberProp({label: '可见的选项个数',defaultValue: 1000}),
}

export const createDatePickerProps = () => ({
  label:createEditorInputProp({label: '左侧文本',defaultValue: '日期'}),
  placeholder:createEditorInputProp({label: '占位符',defaultValue: '点击选择'}),
  ...createFieldProps(),
  ...datePickerInternalProps,
})
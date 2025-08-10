import {  createEditorInputNumberProp, createEditorInputProp, createEditorSelectProp, createEditorSwitchProp } from "@/utils/visual-editor-props"
import { createFieldProps } from "../createFieldProps"

const timePickerInternalProps = {
    // filter	选项过滤函数	(type: string, options: PickerOption[], values: string[]) => PickerOption[]	-
    // formatter	选项格式化函数	(type: string, option: PickerOption) => PickerOption	-
    // modelValue:createEditorInputProp({label: '当前选中的日期',defaultValue: '2025-08-09'}),
    columnsType:createEditorSelectProp({
        label: '选项类型',
        options: [
            {
                label: "时分秒",
                value: ['hour', 'minute','second'],
            },
            {
                label: "时分",
                value: ['hour', 'minute'],
            },
            {
                label: "分秒",
                value: ['minute','second'],
            },
            {
                label: "时",
                value: ['hour'],
            },
            {
                label: "分",
                value: ['minute'],
            },
            {
                label: "秒",
                value: ['second'],
            },
        ],
        defaultValue: ['hour', 'minute','second'],
    }),
    minHour:createEditorInputNumberProp({label: '可选的最小小时',defaultValue: 0}),
    maxHour:createEditorInputNumberProp({label: '可选的最大小时',defaultValue: 23}),
    minMinute:createEditorInputNumberProp({label: '可选的最小分钟',defaultValue: 0}),
    maxMinute:createEditorInputNumberProp({label: '可选的最大分钟',defaultValue: 59}),
    minSecond:createEditorInputNumberProp({label: '可选的最小秒数',defaultValue: 0}),
    maxSecond:createEditorInputNumberProp({label: '可选的最大秒数',defaultValue: 59}),
    // min-time v4.5.0	可选的最小时间，格式参考 07:40:00，使用时 min-hour min-minute min-second 不会生效	string	-
    // max-time v4.5.0	可选的最大时间，格式参考 10:20:00，使用时 max-hour max-minute max-second 不会生效	string	-
    title:createEditorInputProp({label: '顶部栏标题',defaultValue: '选择时间'}),
    confirmButtonText:createEditorInputProp({label: '确认按钮文字',defaultValue: '确认'}),
    cancelButtonText:createEditorInputProp({label: '取消按钮文字',defaultValue: '取消'}),
    showToolbar:createEditorSwitchProp({label: '是否显示顶部栏',defaultValue: true}),
    loading:createEditorSwitchProp({label: '是否显示加载状态',defaultValue: false}),
    readonly:createEditorSwitchProp({label: '是否为只读状态，只读状态下无法切换选项',defaultValue: false}),
    optionHeight:createEditorInputNumberProp({label: '选项高度，支持 px vw vh rem 单位，默认 px',defaultValue: 44}),
    visibleOptionNum:createEditorInputNumberProp({label: '可见的选项个数',defaultValue: 6}),
    swipeDuration:createEditorInputNumberProp({label: '可见的选项个数',defaultValue: 1000}),
}

export const createTimePickerProps = () => ({
  label:createEditorInputProp({label: '左侧文本',defaultValue: '时间'}),
  placeholder:createEditorInputProp({label: '占位符',defaultValue: '点击选择'}),
  ...createFieldProps(),
  ...timePickerInternalProps,
})
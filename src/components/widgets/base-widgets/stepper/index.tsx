import { useGlobalProperties } from "@/hooks/useGlobalProperties";
import { Field, Stepper } from "vant";
import { stepperFieldProps } from "./stepperFieldProps";


export default {
    key: 'stepper',
    moduleName: 'baseWidgets',
    label: '表单项 - 布进器',
    preview: () => (
        <Stepper modelValue="2" step="1"></Stepper>
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties()
        let rules = []
        try {
            rules = JSON.parse(props.rules)
        } catch (e) { }

        return () => (
            <div style={styles}>
                <Field
                    {...props}
                    modelValue={''}
                    name={Array.isArray(props.name) ? [...props.name].pop() : props.name}
                    v-slots={{
                        input: () => (
                            <Stepper
                            ref={(el) => registerRef(el, block._vid)}
                            {...props}
                            v-model={props.modelValue}/>
                        ),
                    }}
                />
            </div>
        )
    },
    props: {
        ...stepperFieldProps()
    },
    events: [
        { label: '输入框聚焦时触发', value: 'focus' },
        { label: '开关状态切换时触发', value: 'change' },
        { label: '点击不可用的按钮时触发', value: 'overlimit' },
        { label: '点击增加按钮时触发', value: 'plus' },
        { label: '点击减少按钮时触发', value: 'minus' },
        { label: '输入框失焦时触发', value: 'blur' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
}

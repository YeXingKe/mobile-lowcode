import { useGlobalProperties } from "@/hooks/useGlobalProperties";
import { createEditorInputProp, createEditorModelBindProp } from "@/utils/visual-editor-props";
import { Field, Switch } from "vant";
import { createFieldProps } from "./createFieldProps";

export default {
    key: 'switch',
    moduleName: 'baseWidgets',
    label: '表单项类型 - 单选框',
    preview: () => (
      <Switch modelValue={true}></Switch>
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
                        <Switch                                 
                            ref={(el) => registerRef(el, block._vid)}
                            {...props}
                            v-model={props.modelValue}
                        />
                        ),
                    }}
                />
            </div>
        )
    },
    props: {
        modelValue: createEditorInputProp({ label: '默认值', defaultValue: 'true' }),
        name: createEditorModelBindProp({ label: '字段绑定', defaultValue: '' }),
        label: createEditorInputProp({ label: '输入框左侧文本', defaultValue: '开关' }),
        loading: createEditorInputProp({ label: '是否加载状态', defaultValue: 'false' }),
        size: createEditorInputProp({ label: '按钮尺寸', defaultValue: '26px' }),// number string
        activeValue:createEditorInputProp({ label: '打开时对应的值', defaultValue: 'true' }),
        inactiveValue:createEditorInputProp({ label: '关闭时对应的值', defaultValue: 'false' }),        
        activeColor:createEditorInputProp({ label: '打开时的背景色', defaultValue: '#1989fa' }),
        inactiveColor:createEditorInputProp({ label: '关闭时的背景色', defaultValue: 'rgba(120, 120, 128, 0.16)' }),
        ...createFieldProps()
    },
    events: [
        { label: '点击时触发', value: 'click' },
        { label: '开关状态切换时触发', value: 'change' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
}
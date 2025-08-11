import { useGlobalProperties } from "@/hooks/useGlobalProperties";
import { createEditorCrossSortableProp, createEditorInputProp, createEditorModelBindProp, createEditorSelectProp } from "@/utils/visual-editor-props";
import { Field, Radio, RadioGroup } from "vant";
import { createFieldProps } from "../createFieldProps";

export default {
    key: 'radio',
    moduleName: 'baseWidgets',
    label: '表单项 - 单选框',
    preview: () => (
        <RadioGroup direction="horizontal">
            <Radio name='A'>A</Radio>
            <Radio name='B'>B</Radio>
        </RadioGroup>
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
                            <RadioGroup
                                ref={(el) => registerRef(el, block._vid)}
                                {...props}
                                v-model={props.modelValue}
                            >
                                {props.options?.map((item) => (
                                    <Radio name={item.value} style={{ marginBottom: '5px' }}>
                                        {item.label}
                                    </Radio>
                                ))}
                            </RadioGroup>
                        ),
                    }}
                />
            </div>
        )
    },
    props: {
        modelValue: createEditorInputProp({ label: '默认值', defaultValue: '' }),
        name: createEditorModelBindProp({ label: '字段绑定', defaultValue: '' }),
        label: createEditorInputProp({ label: '输入框左侧文本', defaultValue: '单选框' }),
        options: createEditorCrossSortableProp({
            label: '默认选项',
            labelPosition: 'top',
            multiple: false,
            defaultValue: [
                { label: '胡萝卜', value: 'carrot' },
                { label: '白菜', value: 'cabbage' },
                { label: '猪', value: 'pig' },
            ],
        }),
        direction: createEditorSelectProp({
            label: '排列方向',
            options: [
                {
                    label: '水平',
                    value: 'horizontal',
                },
                {
                    label: '垂直',
                    value: 'vertical',
                },
            ],
            defaultValue: 'horizontal',
        }),
        ...createFieldProps(),
    },
    events: [{ label: '点击单选框时触发', value: 'click' }],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
}

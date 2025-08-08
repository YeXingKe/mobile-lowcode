import { useGlobalProperties } from "@/hooks/useGlobalProperties";
import { createEditorColorProp, createEditorInputNumberProp, createEditorInputProp, createEditorModelBindProp, createEditorSwitchProp } from "@/utils/visual-editor-props";
import { Field, Rate } from "vant";
import { createFieldProps } from "../createFieldProps";

export default {
    key: 'rate',
    moduleName: 'baseWidgets',
    label: '评分',
    preview: () => (
     <Field
        name="rate"
        v-slots={{ input: () => <Rate modelValue={3} /> }}
      ></Field>
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
                    <Rate
                        ref={(el) => registerRef(el, block._vid)}
                        {...props}
                        v-model={props.modelValue}
                    ></Rate>
                    ),
                }}
                />
            </div>
        )
    },
    props: {
        modelValue: createEditorInputNumberProp({ label: '当前分值', defaultValue: 3 }),
        gutter: createEditorModelBindProp({ label: '图标间距', defaultValue: '4px' }),
        size: createEditorInputProp({ label: '图标大小', defaultValue: '20px' }),
        count: createEditorInputNumberProp({ label: '图标总数', defaultValue: 5 }),
        label: createEditorInputProp({ label: '输入框左侧文本', defaultValue: '评分' }),
        color: createEditorColorProp({ label: '选中时的颜色', defaultValue: '#ee0a24' }),
        voidColor: createEditorColorProp({ label: '未选中时的颜色', defaultValue: '#c8c9cc' }),
        disabledColor: createEditorColorProp({ label: '选中时的颜色', defaultValue: '#c8c9c' }),
        icon:createEditorInputProp({ label: '选中时的图标名称或图片链接', defaultValue: 'star' }),
        voidIcon: createEditorInputProp({ label: '未选中时的图标名称或图片链接', defaultValue: 'star-o' }),
        iconPrefix: createEditorInputProp({ label: '图标类名前缀', defaultValue: 'van-icon' }),
        allowHalf: createEditorSwitchProp({ label: '是否允许半选', defaultValue: false }),
        clearable: createEditorSwitchProp({ label: '是否允许再次点击后清除', defaultValue: false }),
        touchable: createEditorSwitchProp({ label: '是否可以通过滑动手势选择评分', defaultValue: true }),
        ...createFieldProps()
    },
    events: [
        { label: '当前分值变化时触发的事件', value: 'change' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
}
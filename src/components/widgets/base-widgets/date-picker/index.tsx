import { DatePicker, Field, Popup } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import type { VisualEditorComponent } from '@/utils';
import { reactive, useAttrs } from 'vue';
import { createDatePickerProps } from './createDatePickerProps';


export default {
    key: 'date-picker',
    moduleName: 'baseWidgets',
    label: '表单项-日期',
    preview: () => (
        <Field
            label="日期"
            placeholder="点击选择"
        />
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties();

        const attrs = useAttrs()

        const state = reactive({
            showPicker: false,
            text: '',
            defaultIndex: 0,
        });
        const customFieldName = {
            text: 'label',
            value: 'value',
        };
        console.log({...props},'props====');
        const onConfirm = (value) => {
            props.modelValue = value.value;
            state.text = value;
            state.showPicker = false;
            console.log(props);
        };

        const columnsType = ['year', 'month'];
        const filter = (type, options) => {
          if (type === 'month') {
            return options.filter((option) => Number(option.value) % 6 === 0);
          }
          return options;
        };


        return () => {
            if (props.modelValue) {
                // state.defaultIndex = props.columns?.findIndex((item) => item.value == props.modelValue);
                // state.text = props.columns[state.defaultIndex]?.label;
            }

            return (
                <div style={styles}>
                    <Field
                       v-model={props.modelValue}
                        {...props}
                        readonly
                        clickable
                        onClick={() => (state.showPicker = true)}
                        name={Array.isArray(props.name) ? [...props.name].pop() : props.name}
                    >
                        {{
                            input: () =>
                                state.text?.trim() == '' ? (
                                    <span class={'placeholder'}>{props.placeholder}</span>
                                ) : (
                                    state.text
                                ),
                        }}
                    </Field>
                    {/* 相当于v-model:show="state.showPicker" */}
                    <Popup v-model={[state.showPicker, 'show']} position={'bottom'}>
                        <DatePicker
                            ref={(el) => registerRef(el, block._vid)}
                            // title="选择年月"
                            filter={filter}
                            {...props}
                            {...attrs}
                            onConfirm={onConfirm}
                            onCancel={() => (state.showPicker = false)}
                        />
                    </Popup>
                </div>
            )
        };
    },
    props: {
        ...createDatePickerProps()
    },
    events: [
        { label: '点击完成按钮时触发', value: 'confirm' },
        { label: '点击取消按钮时触发', value: 'cancel' },
        { label: '选项改变时触发', value: 'change' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
} as VisualEditorComponent;

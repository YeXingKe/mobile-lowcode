import { DatePicker, Field, Popup } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import type { VisualEditorComponent } from '@/utils';
import { reactive, useAttrs, watchEffect } from 'vue';
import { createDatePickerProps } from './createDatePickerProps';
import { dayjs } from 'element-plus';


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
            currentDate: ['2025','08','09'],
        });

        const onConfirm = (value) => {
            // props.modelValue = value.value;
            state.text = dayjs(new Date(value)).format('YYYY-MM-DD');
            state.showPicker = false;
        };


        return () => {
            if (props.modelValue) {
                state.text = dayjs(new Date(props.modelValue)).format('YYYY-MM-DD');
            }

            return (
                <div style={styles}>
                    <Field
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
                            v-model:modelValue={state.currentDate}
                            // filter={filter}
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

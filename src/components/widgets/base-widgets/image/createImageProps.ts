import {  createEditorInputNumberProp, createEditorInputProp, createEditorSelectProp, createEditorSwitchProp } from "@/utils/visual-editor-props"

const imageInternalProps = {
    src: createEditorInputProp({label: '图片链接',defaultValue: 'https://img.yzcdn.cn/vant/cat.jpeg'}),
    fit:createEditorSelectProp({
        label: '图片填充模式',
        options: [
            {
                label: '保持宽高缩放图片，使图片的长边能完全显示出来',
                value: 'contain',
            },
            {
                label: '保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边',
                value: 'cover',
            },
            {
                label: '拉伸图片，使图片填满元素',
                value: 'fill',
            },
            {
                label: '保持图片原有尺寸',
                value: 'none',
            },
            {
                label: '取 none 或 contain 中较小的一个',
                value: 'scale-down',
            },
        ],
        defaultValue: 'fill',
    }),
    position:createEditorSelectProp({
        label: '图片位置',
        options: [
            {
                label: '左',
                value: 'left',
            },
            {
                label: '上',
                value: 'top',
            },
            {
                label: '下',
                value: 'bottom',
            },
            {
                label: '中',
                value: 'center',
            },
            {
                label: '右',
                value: 'right',
            },
        ],
        defaultValue: 'center',
    }),
    alt: createEditorInputProp({label: '替代文本',defaultValue: ''}),
    width: createEditorInputNumberProp({label: '宽度',defaultValue: 100}),
    height: createEditorInputNumberProp({label: '高度',defaultValue: 100}),
    radius: createEditorInputNumberProp({label: '圆角大小',defaultValue: 0}),
    round:createEditorSwitchProp({ label: '是否显示为圆形', defaultValue: false }),
    block:createEditorSwitchProp({ label: '是否将根节点设置为块级元素', defaultValue: false }),
    lazyLoad:createEditorSwitchProp({ label: '是否开启图片懒加载', defaultValue: false }),
    showError:createEditorSwitchProp({ label: '是否展示图片加载失败提示', defaultValue: true }),
    showLoading:createEditorSwitchProp({ label: '是否展示图片加载中提示', defaultValue: true }),
    errorIcon:createEditorInputProp({ label: '失败时提示的图标名称或图片链接', defaultValue: 'photo-fail' }),
    loadingIcon:createEditorInputProp({label: '加载时提示的图标名称或图片链接',defaultValue: 'photo'}),
    iconSize:createEditorInputProp({label: '加载图标和失败图标的大小',defaultValue: '32px'}),
    iconPrefix:createEditorInputProp({label: '图标类名前缀',defaultValue: 'van-icon'}),
    crossorigin:createEditorInputProp({label: '控制跨域资源加载行为',defaultValue: ''}),
    referrerpolicy:createEditorInputProp({label: '控制 HTTP Referer 请求头 如何发送的属性',defaultValue: ''}),
    decoding:createEditorInputProp({label: '控制浏览器如何解码和显示图像',defaultValue: ''}),
}

export const createImageProps = () => ({
  ...imageInternalProps,
})
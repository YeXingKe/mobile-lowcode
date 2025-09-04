
import type { Animation } from '@/utils/visual-editor';

export const useAnimate = async (
  animateEl: HTMLElement,
  animations: Animation | Animation[],
  prefixCls = 'animate__',
) => {
  animations = Array.isArray(animations) ? animations : [animations];

  const play = (animate: Animation) =>
    new Promise((resolve) => {
      if (animateEl) {
        const animationName = `${prefixCls}${animate.value}`;

        // 过滤可能残留的animate.css动画类名
        animateEl.classList.value = animateEl.classList.value
          .split(' ')
          .filter((item) => !item.includes(prefixCls))
          .join(' ');

        // 设置动画属性
        const setAnimate = () => {
          animateEl.style.setProperty('--animate-duration', `${animate.duration}s`); //    设置动画持续时间
          animateEl.style.setProperty('animation-delay', `${animate.delay}s`); // 设置动画持续时间
          animateEl.style.setProperty(
            'animation-iteration-count',
            `${animate.infinite ? 'infinite' : animate.count}`,
          ); // 设置动画重复次数（无限或指定次数）
          animateEl?.classList.add(`${prefixCls}animated`, animationName); // 添加动画类名
        };

        // 动画结束时，删除类名
        const handleAnimationEnd = (event?: AnimationEvent) => {
          event?.stopPropagation(); // 停止事件传播
          animateEl.classList.remove(`${prefixCls}animated`, animationName); // 移除动画类名
          animateEl.removeEventListener('animationend', handleAnimationEnd); // 移除事件监听器
          resolve('animation end');
        };

        setAnimate(); // 应用动画设置

        animateEl?.addEventListener('animationend', handleAnimationEnd, { once: true }); // 添加一次性动画结束事件监听
        // animateEl?.addEventListener('animationcancel', handleAnimationEnd, { once: true })
      } else {
        resolve('动画执行失败！执行动画元素不存在！');
      }
    });

  for (const item of animations) {
    await play(item);
  }
};

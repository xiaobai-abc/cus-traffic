"use client";
import cn from "classnames";
import HeadBg from "@/assets/block-head.png";
/**
 * 常用块的 布局组件
 * @param {string} title - 标题
 * @param {string} subtitle - 副标题
 * @param {React.ReactNode} extra - 额外内容
 * @param {string} className - 样式
 * @param {string} contentClassName - 内容样式
 * @param {React.ReactNode} children - 子组件
 */
function Block({
  title = "标题",
  subtitle = "副标题",
  extra,
  className,
  contentClassName,
  children
}) {
  return (
    <div className={cn("flex flex-col overflow-hidden", className)}>
      {/* TODO 背景未靠左 */}
      <h2
        className="pl-12 py-3 flex items-center"
        style={{
          background: `url('${HeadBg.src}') no-repeat`,
          // background: `url('/image/a.svg') no-repeat`,
          // background: `url('/image/block-head.svg') no-repeat`,
          backgroundSize: "100% 100%",
          backgroundPosition: "left center",
        }}>
        <span className="font-pangmen mr-3 text-xl text-[#D3F3FF] leading-none italic font-light tracking-widest">
          {title}
        </span>
        <span className="font-ali text-xs text-white/60 italic font-light">
          {subtitle}
        </span>
        <div className="ml-auto mr-0">{extra}</div>
      </h2>

      <div className={cn("mt-2.5", contentClassName)}>{children}</div>
    </div>
  );
}

export default Block;

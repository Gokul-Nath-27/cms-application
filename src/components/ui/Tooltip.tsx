"use client";
import * as React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { css, cx } from '../../../styled-system/css';
import { useIsMobile } from "@/hooks/useIsMobile";

const tooltipStyles = css({
  borderRadius: '6px',
  padding: '6px 8px',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.4',
  letterSpacing: '0.01em',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  userSelect: 'none',
  wordWrap: 'break-word',
  animationDuration: '500ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  zIndex: 50,

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: 'slideDownAndFade',
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: 'slideLeftAndFade',
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: 'slideUpAndFade',
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: 'slideRightAndFade',
  },
});

const tooltipArrowStyles = css({
  fill: 'rgba(0, 0, 0, 0.9)',
  width: '8px',
  height: '4px',
});

type TooltipWrapperProps = {
  children: React.ReactNode;
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  className?: string;
  delayDuration?: number;
};

const TooltipWrapper = ({
  children,
  content,
  side = 'right',
  sideOffset = 8,
  className,
  delayDuration = 500
}: TooltipWrapperProps) => {
  const isMobile = useIsMobile()
  if (isMobile) return children
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div>
            {children}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={cx(tooltipStyles, className)}
            sideOffset={sideOffset}
            side={side}
            collisionPadding={8}
          >
            {content}
            <Tooltip.Arrow className={tooltipArrowStyles} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipWrapper;
import React from 'react';

// This is a simplified motion proxy that mimics framer-motion's API
// but implements basic animations with CSS and React state
type MotionProps = {
  initial?: { [key: string]: any };
  animate?: { [key: string]: any };
  transition?: { [key: string]: any };
  whileHover?: { [key: string]: any };
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: React.ReactNode;
};

export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>(
    ({ 
      initial, 
      animate, 
      transition, 
      whileHover, 
      className = '', 
      style = {}, 
      children,
      ...props 
    }, ref) => {
      // Convert motion properties to CSS
      const animationStyle: React.CSSProperties = {
        ...style,
        transition: `transform ${transition?.duration || 0.3}s, 
                     opacity ${transition?.duration || 0.3}s, 
                     box-shadow ${transition?.duration || 0.3}s`,
        opacity: animate?.opacity ?? 1,
        transform: animate?.scale ? `scale(${animate.scale})` : 
                  animate?.y ? `translateY(${animate.y}px)` : undefined,
      };
      
      // Add animation delay if specified
      if (transition?.delay) {
        animationStyle.transitionDelay = `${transition.delay}s`;
      }

      // Apply initial state classes
      let animationClass = className;
      if (initial?.opacity === 0) {
        animationClass += ' animate-fade-in';
      }
      if (initial?.y !== undefined) {
        animationClass += ' animate-slide-up';
      }

      return (
        <div 
          ref={ref}
          className={animationClass}
          style={animationStyle}
          {...props}
        >
          {children}
        </div>
      );
    }
  )
};
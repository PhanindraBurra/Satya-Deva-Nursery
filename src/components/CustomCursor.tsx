import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element with data-cursor-text
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor-text]') as HTMLElement | null;
      if (cursorTarget) {
        setHoverText(cursorTarget.getAttribute('data-cursor-text') || 'VIEW');
        setIsHovering(true);
      } else {
        setHoverText(null);
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {hoverText}
    </div>
  );
};

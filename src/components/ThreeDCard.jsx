import React, { createContext, useState, useContext, useRef } from 'react';

const MouseEnterContext = createContext([false, () => {}]);
const MousePositionContext = createContext({ x: 0, y: 0 });

export const CardContainer = ({
  children,
  className = "",
  containerClassName = "",
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Very gentle, subtle micro-tilt (max ~3 to 4 degrees)
    const rawX = (e.clientX - left - width / 2) / 60;
    const rawY = (e.clientY - top - height / 2) / 60;
    
    const clampedX = Math.max(-4, Math.min(4, rawX));
    const clampedY = Math.max(-4, Math.min(4, rawY));

    setRotateX(-clampedY);
    setRotateY(clampedX);
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <MousePositionContext.Provider value={mousePos}>
        <div
          className={`flex items-center justify-center ${containerClassName}`}
          style={{ perspective: "1000px" }}
        >
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative transition-transform duration-300 ease-out ${className}`}
            style={{
              transformStyle: "preserve-3d",
              transform: isMouseEntered
                ? `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
                : "rotateY(0deg) rotateX(0deg)",
            }}
          >
            {children}
          </div>
        </div>
      </MousePositionContext.Provider>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className = "",
}) => {
  const [isMouseEntered] = useContext(MouseEnterContext);
  const mousePos = useContext(MousePositionContext);

  return (
    <div
      className={`relative h-full w-full rounded-2xl [transform-style:preserve-3d] transition-all duration-300 ${className}`}
    >
      {/* Subtle radial spotlight glow */}
      {isMouseEntered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 75%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const [isMouseEntered] = useContext(MouseEnterContext);

  // Softened micro-depth (subtle 3D layering without harsh protrusion)
  const subtleZ = Number(translateZ) * 0.2;
  const subtleX = Number(translateX) * 0.2;
  const subtleY = Number(translateY) * 0.2;

  return (
    <Tag
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: isMouseEntered
          ? `translateX(${subtleX}px) translateY(${subtleY}px) translateZ(${subtleZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

import { ReactNode, useRef, useState, useEffect } from "react";

interface InfoProps {
  children: ReactNode;
}

export default function UsingProductsElementAnimation({ children }: InfoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMouseOutside, setIsMouseOutside] = useState(true);
  const [isMouseEntering, setIsMouseEntering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    const maxDistanceX = rect.width / 10;
    const maxDistanceY = rect.height / 10;

    const clampedX = Math.min(
      Math.max(-distanceX, -maxDistanceX),
      maxDistanceX
    );
    const clampedY = Math.min(
      Math.max(-distanceY, -maxDistanceY),
      maxDistanceY
    );

    const normalizedX = clampedX / maxDistanceX;
    const normalizedY = clampedY / maxDistanceY;

    const edgeRotationX = normalizedY * 20;
    const edgeRotationY = -normalizedX * 20;

    setPosition({
      x: normalizedX * maxDistanceX,
      y: normalizedY * maxDistanceY,
    });
    setRotation({ x: edgeRotationX, y: edgeRotationY });
    setIsMouseOutside(false);
  };

  const handleMouseEnter = () => {
    setIsMouseEntering(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOutside(true);
  };

  useEffect(() => {
    if (isMouseOutside) {
      const multiplier = 0.5;
      const interval = setInterval(() => {
        setPosition((prev) => ({
          x: prev.x * multiplier,
          y: prev.y * multiplier,
        }));
        setRotation((prev) => ({
          x: prev.x * multiplier,
          y: prev.y * multiplier,
        }));

        if (Math.abs(position.x) < 0.5 && Math.abs(position.y) < 0.5) {
          setPosition({ x: 0, y: 0 });
          setRotation({ x: 0, y: 0 });
          clearInterval(interval);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isMouseOutside, position]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
          transform: `translate(${position.x}px, ${
            position.y
          }px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,

          transition:
            isMouseOutside || isMouseEntering ? "transform 0.3s ease" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}

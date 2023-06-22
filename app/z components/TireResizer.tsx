import React, { useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

const CircleResizer: React.FC = () => {
  const [radius, setRadius] = useState<number>(50);
  const [centerX, setCenterX] = useState<number>(200);

  const handleCircleDrag: DraggableEventHandler = (_, { deltaX }): void => {
    // Increase or decrease radius based on drag direction
    setRadius((prevRadius) => prevRadius + deltaX);
  };

  const handleSquareDrag: DraggableEventHandler = (_, { deltaX }): void => {
    // Move the square horizontally and update the circle's center accordingly
    setCenterX((prevCenterX) => prevCenterX + deltaX);
  };

  return (
    <div>
      <svg width={400} height={400}>
        <circle cx={centerX} cy={200} r={radius} fill="blue" />
      </svg>
      <Draggable
        axis="x"
        onDrag={handleCircleDrag}
        position={{ x: 0, y: 0 }}
        bounds={{ left: -radius, right: radius }}
      >
        <div
          style={{
            width: '10px',
            height: '10px',
            background: 'red',
            position: 'absolute',
            left: `${centerX + radius}px`,
            top: '200px',
            transform: 'translate(-50%, -50%)',
            cursor: 'ew-resize',
          }}
        />
      </Draggable>
      <Draggable
        axis="x"
        onDrag={handleSquareDrag}
        position={{ x: 0, y: 0 }}
        bounds={{ left: -200, right: 200 }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            background: 'green',
            position: 'absolute',
            left: `${centerX}px`,
            top: '190px',
            transform: 'translate(-50%, -50%)',
            cursor: 'move',
          }}
        />
      </Draggable>
    </div>
  );
};

export default CircleResizer;

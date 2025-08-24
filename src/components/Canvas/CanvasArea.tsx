import React, { useRef, useEffect } from "react";

interface CanvasAreaProps {
  shape: string;
  color: string;
  replayStep?: { shape: string; color: string };
}

const CanvasArea: React.FC<CanvasAreaProps> = ({ shape, color, replayStep }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawShape = (ctx: CanvasRenderingContext2D, shapeToDraw: string, colorToDraw: string) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = colorToDraw;
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    if (shapeToDraw === "circle") {
      let r = 0;
      const anim = setInterval(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
        ctx.fill();
        r += 2;
        if (r > 50) clearInterval(anim);
      }, 10);
    } else if (shapeToDraw === "square") {
      let size = 0;
      const anim = setInterval(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillRect(centerX - size/2, centerY - size/2, size, size);
        size += 2;
        if (size > 100) clearInterval(anim);
      }, 10);
    } else if (shapeToDraw === "triangle") {
      let scale = 0;
      const anim = setInterval(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - scale);
        ctx.lineTo(centerX - scale, centerY + scale);
        ctx.lineTo(centerX + scale, centerY + scale);
        ctx.closePath();
        ctx.fill();
        scale += 2;
        if (scale > 50) clearInterval(anim);
      }, 10);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // normal draw
    drawShape(ctx, replayStep?.shape || shape, replayStep?.color || color);
  }, [shape, color, replayStep]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={500}
      className="border border-gray-400 bg-white"
    />
  );
};

export default CanvasArea;

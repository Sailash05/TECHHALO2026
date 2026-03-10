import { useEffect } from "react";

export default function CursorTrail() {

  useEffect(() => {

    const createSpark = (x, y) => {

      const spark = document.createElement("div");
      spark.className = "cursor-spark";

      /* random offset so sparks are NOT exactly on cursor */
      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 30;

      spark.style.left = x + offsetX + "px";
      spark.style.top = y + offsetY + "px";

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 400);

    };

    /* mouse movement */
    const handleMouseMove = (e) => {

      for (let i = 0; i < 2; i++) {
        createSpark(e.clientX, e.clientY);
      }

    };

    /* touch movement (mobile) */
    const handleTouchMove = (e) => {

      const touch = e.touches[0];

      for (let i = 0; i < 2; i++) {
        createSpark(touch.clientX, touch.clientY);
      }

    };

    /* touch tap (optional but recommended) */
    const handleTouchStart = (e) => {

      const touch = e.touches[0];

      for (let i = 0; i < 4; i++) {
        createSpark(touch.clientX, touch.clientY);
      }

    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };

  }, []);

  return null;
}
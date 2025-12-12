import React, { useEffect, useState } from "react";
import "./globalAnimations.css";

export default function TransitionWrapper({ children }) {
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    const totalDuration = 1800;

    const timer = setTimeout(() => {
      setTransitioning(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {transitioning && <div className="cortina-transition"></div>}
      {children}
    </>
  );
}

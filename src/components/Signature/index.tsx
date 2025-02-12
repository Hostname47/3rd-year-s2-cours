import { useEffect, useRef, useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import "./styles.css";

function Signature() {
  const animationRef = useRef<null | number>(null);
  const [heartSize, setHeartSize] = useState(16);

  useEffect(() => {
    animationRef.current = setInterval(() => {
      setHeartSize((v) => (v === 16 ? 19 : 16));
    }, 400);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [heartSize]);

  return (
    <div id="signature-container">
      <span className="signature-text">Crafted with</span>
      <span id="signature-heart-container" title="Love">
        <HeartIcon
          title="Love"
          fill="#FF0000"
          width={heartSize}
          height={heartSize}
        />
      </span>
      <span className="signature-text">
        by{" "}
        <a href="https://nassri.netlify.app" target="_blank" className="link">
          Mouad Nassri
        </a>
      </span>
    </div>
  );
}

export default Signature;

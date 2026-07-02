"use client";
import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: "100%", padding: "40px 0", background: "white" }}>
      <div
        className="elfsight-app-9cfd7b85-3714-463c-a1ae-43463678d667"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

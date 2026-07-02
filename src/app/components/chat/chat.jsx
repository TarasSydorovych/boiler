// import React from "react";
// import css from "./chat.module.css";
// import { FaViber, FaTelegramPlane } from "react-icons/fa";

// export default function Chat() {
//   return (
//     <div className={css.sectionWrap}>
//       <a
//         href="viber://chat?number=+380962960328"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <FaViber className={css.faViber} />
//       </a>
//       <a href="https://t.me/silechnick" target="_blank" rel="noreferrer">
//         <FaTelegramPlane className={css.telegram} />
//       </a>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import css from "./chat.module.css";
import { FaViber, FaTelegramPlane, FaPhone } from "react-icons/fa";

export default function Chat() {
  const [showPhones, setShowPhones] = useState(false);

  const togglePhones = () => {
    setShowPhones((prev) => !prev);
  };

  return (
    <div className={css.sectionWrap}>
      <div onClick={togglePhones} className={css.phoneButton}>
        <FaPhone className={css.aPhone} />
      </div>

      {showPhones && (
        <div className={css.phoneList}>
          <a href="tel:+380992465404" className={css.phoneLink}>
            (099) 246 54 04
          </a>
          <br />
          <a href="tel:+380962960328" className={css.phoneLink}>
            (096) 296 03 28
          </a>
        </div>
      )}

      <a
        href="viber://chat?number=+380962960328"
        target="_blank"
        rel="noreferrer"
      >
        <FaViber className={css.faViber} />
      </a>

      {/* Telegram */}
      <a href="https://t.me/silechnick" target="_blank" rel="noreferrer">
        <FaTelegramPlane className={css.telegram} />
      </a>
    </div>
  );
}

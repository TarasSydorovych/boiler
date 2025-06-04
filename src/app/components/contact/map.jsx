"use client";
import { useState, useEffect } from "react";
import css from "./contact.module.css";

const Map = () => {
  const [mapWidth, setMapWidth] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 300 && window.innerWidth <= 960) {
        setMapWidth("90%");
      } else if (window.innerWidth > 700) {
        setMapWidth("50%");
      } else {
        setMapWidth("50%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d85704.72153521852!2d35.0480823!3d47.8343131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x23f72084e9563a8b%3A0xbb42349c5adc44ab!2sZP-BOYLER.COM!5e0!3m2!1sru!2sua!4v1749053755456!5m2!1sru!2sua"
      width={mapWidth}
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;

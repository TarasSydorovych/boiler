"use client";
import { useState } from "react";
import css from "./main.module.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const translations = {
  ua: {
    title: "Безкоштовна консультація",
    namePlaceholder: "Ваше ім'я",
    phonePlaceholder: "Ваш телефон",
    submitButton: "Відправити",
    errorMessage: "Будь ласка, заповніть усі поля.",
    successMessage: "Вашу заявку успішно надіслано!",
    errorSendingMessage: "Не вдалося надіслати дані. Спробуйте пізніше.",
    popupTitle: "Залиште заявку на консультацію",
  },
  ru: {
    title: "Бесплатная консультация",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Ваш телефон",
    submitButton: "Отправить",
    errorMessage: "Пожалуйста, заполните все поля.",
    successMessage: "Ваша заявка успешно отправлена!",
    errorSendingMessage: "Не удалось отправить данные. Попробуйте позже.",
    popupTitle: "Оставьте заявку на консультацию",
  },
};

const ButtonFreeConsultationOr = ({ t }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const currentLang = translations[t] || translations["ua"];

  const handleSubmit = async (data) => {
    if (!data.name || !data.phone) {
      Swal.fire({
        icon: "error",
        title: currentLang.errorMessage,
        confirmButtonColor: "#e87a4f",
      });
      return;
    }

    try {
      await emailjs.send(
        "service_j1k8xeo", // Новий Service ID
        "template_37pxcwy", // Новий Template ID
        {
          name: data.name,
          phone: data.phone,
        },
        "kJwgpMvooReE0v_CT" // Новий Public Key
      );

      Swal.fire({
        icon: "success",
        title: currentLang.successMessage,
        confirmButtonColor: "#e87a4f",
      });

      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Error during email sending:", error);
      Swal.fire({
        icon: "error",
        title: currentLang.errorSendingMessage,
        confirmButtonColor: "#e87a4f",
      });
    }
  };

  const openPopup = () => {
    Swal.fire({
      title: currentLang.popupTitle,
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="${currentLang.namePlaceholder}" />
        <input type="tel" id="phone" class="swal2-input" placeholder="${currentLang.phonePlaceholder}" />
      `,
      focusConfirm: false,
      showCloseButton: true,
      confirmButtonText: currentLang.submitButton,
      confirmButtonColor: "#e87a4f",
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value.trim();
        const phone = Swal.getPopup().querySelector("#phone").value.trim();

        if (!name || !phone) {
          Swal.showValidationMessage(currentLang.errorMessage);
          return null;
        }
        return { name, phone };
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const { name, phone } = result.value;
        setFormData({ name, phone });
        handleSubmit({ name, phone });
      }
    });
  };

  return (
    <button className={css.freConsult} onClick={openPopup}>
      {currentLang.title}
    </button>
  );
};

export default ButtonFreeConsultationOr;

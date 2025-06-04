"use client"; // Використовуємо клієнтську частину
import css from "./standart.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md"; // Іконка для закриття меню
import { IoMdClose } from "react-icons/io";

const Navigations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Визначення ширини екрану
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960); // Мобільна версія при ширині <= 768px
    };

    handleResize(); // Виклик при першому рендері
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Відкриття/закриття меню
  };

  return (
    <>
      {isMobile ? (
        <div className={css.mobileMenu}>
          <button onClick={toggleMenu} className={css.hamburgerButton}>
            {isMenuOpen ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
          {isMenuOpen && (
            <div className={css.fullScreenMenu}>
              <IoMdClose className={css.ioMdClose} onClick={toggleMenu} />

              <ul className={css.mobileNav}>
                <a href="tel:+380992465404">(099) 246 54 04</a>
                <li>
                  <Link href={`/ua`} className={css.link} onClick={toggleMenu}>
                    Головна
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/ua/service`}
                    className={css.link}
                    onClick={toggleMenu}
                  >
                    Послуги
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/ua/blog`}
                    className={css.link}
                    onClick={toggleMenu}
                  >
                    Блог
                  </Link>
                </li>

                <li>
                  <Link
                    href={`/ua/contact`}
                    className={css.link}
                    onClick={toggleMenu}
                  >
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul className={css.ulNavigation}>
          {" "}
          <li className={css.liNavigation}>
            <a href="tel:+380992465404" className={css.hrefToA}>
              (099) 246 54 04
            </a>
          </li>
          <li className={css.liNavigation}>
            <Link href={`/ua`} className={css.link}>
              Головна
            </Link>
          </li>
          <li className={css.liNavigation}>
            <Link href={`/ua/service`} className={css.link}>
              Послуги
            </Link>
          </li>
          <li className={css.liNavigation}>
            <Link href={`/ua/blog`} className={css.link}>
              Блог
            </Link>
          </li>
          <li className={css.liNavigation}>
            <Link href={`/ua/contact`} className={css.link}>
              Контакти
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navigations;

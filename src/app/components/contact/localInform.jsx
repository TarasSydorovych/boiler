import css from "./contact.module.css";
import { FaHome } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { GrPlan } from "react-icons/gr";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const LocalInform = ({ t }) => {
  const phoneNumber = "+380675771375";
  return (
    <div className={css.localInformWrap}>
      <div className={css.wrapInformationsI}>
        <IoLocationSharp className={css.aHome} />
        <p className={css.pAdress}>{t("roztashuvania")}</p>
      </div>
      <p className={css.greyDesc}>{t("realAdres")}</p>
      <div className={css.wrapInformationsI}>
        <MdPhone className={css.aHome} />
        <p className={css.pAdress}>{t("phoneContact")}</p>
      </div>
      <p className={css.greyDesc}>+38 (096) 29 60 328</p>

      <div className={css.wrapInformationsI}>
        <MdEmail className={css.aHome} />
        <p className={css.pAdress}>Email</p>
      </div>
      <p className={css.greyDesc}>silechnick95@gmail.com</p>
      <div className={css.wrapInformationsI}>
        <GrPlan className={css.aHome} />
        <p className={css.pAdress}>{t("hourstContact")}</p>
      </div>
      <p className={css.greyDesc}> 9:00 – 18:00</p>
    </div>
  );
};
export default LocalInform;

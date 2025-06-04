import css from "./contact.module.css";
import LocalInform from "./localInform";
import Map from "./map";

const FirstBlockContact = ({ t, lng }) => {
  return (
    <div className={css.wrapContact}>
      <p className={css.pContackMail}>{t("contacts")}</p>
      <div className={css.wrapMapWith}>
        <Map />
        <LocalInform t={t} />
      </div>
    </div>
  );
};
export default FirstBlockContact;

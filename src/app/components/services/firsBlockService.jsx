import css from "./service.module.css";
import Image from "next/image";
import Link from "next/link";
import rectangle from "../img/Rectangle.png";

const FirstBlockService = ({ t, lng }) => {
  return (
    <section className={css.firstBlockWrap}>
      {/* <Dot className={css.datFirst} />
      <Dot className={css.datSecond} /> */}

      <div className={css.wrapFirstInServ}>
        <h1 className={css.h1ServOffer}>{t("offer")}</h1>
        <div className={css.blockWrapServise}>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("landTitle")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link href={`/${lng}`} className={css.moreDetails}>
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("businesTitile")}</h2>
              <p className={css.servDesc}>{t("secondOfferDesc")}</p>
              <Link href={`/${lng}/remont-pralok`} className={css.moreDetails}>
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("onlineTitile")}</h2>
              <p className={css.servDesc}>{t("threOfferDesc")}</p>
              <Link
                href={`/${lng}/ustanovka-santekhniki`}
                className={css.moreDetails}
              >
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("crmInterTitile")}</h2>
              <p className={css.servDesc}>{t("fiveOfferDesc")}</p>
              <Link href={`/${lng}`} className={css.moreDetails}>
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("forVodonag.firstH")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link
                href={`/${lng}/remont-vodonahrivachiv`}
                className={css.moreDetails}
              >
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("forVodonagObslug.firstH")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link
                href={`/${lng}/servis-boyleriv`}
                className={css.moreDetails}
              >
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("ustanovkaBoi.firstH")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link
                href={`/${lng}/ustanovka-bojlera`}
                className={css.moreDetails}
              >
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("kupBoiler.firstH")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link href={`/${lng}/kupyty-bojlery`} className={css.moreDetails}>
                {t("moreDet")}
              </Link>
            </div>
          </div>
          <div className={css.blockCssServ}>
            <div className={css.wrapSmallKL}>
              <h2 className={css.landP}>{t("chustkaBoiler.firstH")}</h2>
              <p className={css.servDesc}>{t("firstOfferDesc")}</p>
              <Link
                href={`/${lng}/chystka-boileriv`}
                className={css.moreDetails}
              >
                {t("moreDet")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.wrapFirstInServAsk}>
        <h2 className={css.h1ServOffer}>{t("queTitle")}</h2>
        <div className={css.wrapQuestAndG}>
          <div className={css.wrapAllQuestion}>
            <div className={css.wrapAllQuestion}>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>01</p>
                  <p className={css.pOneQiedsO}>{t("firstQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("firstAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>02</p>
                  <p className={css.pOneQiedsO}>{t("secondQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("secondAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>03</p>
                  <p className={css.pOneQiedsO}>{t("threQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("threAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>04</p>
                  <p className={css.pOneQiedsO}>{t("fourQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("fourAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>05</p>
                  <p className={css.pOneQiedsO}>{t("fiveQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("fiveAnsver")}</p>
              <div className={css.line}></div>
              <div className={css.wrapOjut}>
                <div className={css.oneAsk}>
                  <p className={css.oneQuestiMainNumber}>06</p>
                  <p className={css.pOneQiedsO}>{t("sixQuestion")}</p>
                </div>
              </div>
              <p className={css.ansver}>{t("sixAnsver")}</p>
              <div className={css.line}></div>
            </div>
          </div>
          <Image src={rectangle} className={css.asdf} alt="Photo" />
        </div>
      </div>
    </section>
  );
};
export default FirstBlockService;

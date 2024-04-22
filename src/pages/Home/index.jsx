import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Home.module.scss";

import heroImg from "../../assets/img/hero-img.svg";
import flashcardSectionImg from "../../assets/img/flashcard-section.svg";
import mindMapSectionImg from "../../assets/img/mind-map-section.svg";
import testingSectionImg from "../../assets/img/testing-section.svg";
import progressSectionImg from "../../assets/img/progress-section.svg";
import passFailIcon from "../../assets/icon/pass-fail.svg";
import totalSalesIcon from "../../assets/icon/total-sales.svg";
import maybeIcon from "../../assets/icon/maybe.svg";
import step1Icon from "../../assets/icon/step-1.svg";
import step2Icon from "../../assets/icon/step-2.svg";
import step3Icon from "../../assets/icon/step-3.svg";

function Home() {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <div className={styles.home}>
      <div className={`${styles.hero}  ${styles.homeSection} container`}>
        <div className={styles.heroLeft}>
          <h1>Тарихты интерактивті және тартымды әдістермен үйреніңіз</h1>
          <p>
            Флешкарталар, ақыл-ой карталары және тесттер арқылы тарихты
            зерттеудің жаңа әдісін ашыңыз.
          </p>
          <div>
            <a href="#flashcard-section">
              <button className="btn btn--navy">Көбірек білу үшін</button>
            </a>
            <Link to={loggedIn ? "/learning-techniques" : "/auth/login"}>
              <button className="btn btn--navy-outline">Бастау</button>
            </Link>
          </div>
        </div>
        <img className={styles.heroRight} src={heroImg} alt="hero" />
      </div>

      <div
        id="flashcard-section"
        className={`${styles.section} ${styles.homeSection}`}
      >
        <div className={`${styles.sectionContent} container`}>
          <img
            className={styles.sectionImg}
            src={flashcardSectionImg}
            alt="flashcard section"
          />
          <div className={styles.sectionText}>
            <h5 className={styles.title}>Флеш-карталар</h5>
            <h2 className={styles.subtitle}>
              Интерактивті флешкарталармен тарихты меңгеру
            </h2>
            <p className={styles.text}>
              Біздің флешкарта мүмкіндігіміз тарихи фактілер мен күндерді
              үйренуді қызықты және тиімді етеді. Интерактивті флешкарталардың
              көмегімен сіз маңызды ақпаратты оңай есте сақтай аласыз және тарих
              емтихандарын тапсыра аласыз.
            </p>
            <div className={styles.features}>
              <div>
                <h4 className={styles.featureTitle}>Оңай оқу</h4>
                <p className={styles.featureText}>
                  Біздің кең ауқымды флешкарталар жинағын зерттеп, тарихи
                  біліміңізді кеңейтіңіз.
                </p>
              </div>
              <div>
                <h4 className={styles.featureTitle}>Белсенді қайталау</h4>
                <p className={styles.featureText}>
                  Жүйелі және белсенді қайталау арқылы біліміңізді барынша
                  арттырыңыз.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.homeSection}`}>
        <div className={`${styles.sectionContent} container`}>
          <div className={styles.sectionText}>
            <h5 className={styles.title}>Майнд мап</h5>
            <h2 className={styles.subtitle}>
              Тарихи оқиғалар мен қарым-қатынастарды оңай елестетіңіз
            </h2>
            <p className={styles.text}>
              Ақыл-ой карталары негізгі ақпаратты түсінуді және есте сақтауды
              жеңілдететін тарихи оқиғалар мен олардың байланыстарын көрнекі
              түрде көрсетеді.
            </p>
          </div>
          <img
            className={styles.sectionImg}
            src={mindMapSectionImg}
            alt="mind map section"
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.homeSection}`}>
        <div className={`${styles.sectionContent} container`}>
          <img
            className={styles.sectionImg}
            src={testingSectionImg}
            alt="testing section"
          />
          <div className={styles.sectionText}>
            <h5 className={styles.title}>Тест</h5>
            <h2 className={styles.subtitle}>
              Біліміңізді тексеріп, емтихандарға дайындалыңыз
            </h2>
            <p className={styles.text}>
              Біздің тестілеу мүмкіндігіміз біліміңізді бағалауға және
              емтихандарға оңай дайындалуға мүмкіндік береді.
            </p>
            <div className={styles.featuresList}>
              <div>
                <img src={passFailIcon} alt="testing features icon" />
                <p>
                  Өз қажеттіліктеріңізді ескере отырып, тақырып немесе сынып
                  бойынша тест таңдаңыз.
                </p>
              </div>
              <div>
                <img src={totalSalesIcon} alt="testing features icon" />
                <p>
                  Прогрессіңізді қадағалаңыз және уақыт өте келе жақсарғаныңызды
                  көріңіз
                </p>
              </div>
              <div>
                <img src={maybeIcon} alt="testing features icon" />
                <p>Әр түрлі сұрақ түрлерімен өзіңізді сынаңыз</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.homeSection}`}>
        <div className={`${styles.sectionContent} container`}>
          <div className={styles.sectionText}>
            <h2 className={styles.subtitle}>
              Прогрессіңізді қадағалаңыз және біліміңізді жетілдіріңіз
            </h2>
            <p className={styles.text}>
              Платформасыз арқылы сіз өзіңіздің жетістіктеріңізді оңай бақылай
              аласыз және тарихты зерттеуде қаншалықты жақсы болғаныңызды көре
              аласыз.
            </p>
            <div className={styles.features}>
              <div>
                <h4 className={styles.featureTitle}>Прогрессті бақылаңыз</h4>
                <p className={styles.featureText}>
                  Прогрессіңізді бақылап, уақыт өте келе жақсартуларыңызды көру
                  арқылы мотивацияны сақтаңыз
                </p>
              </div>
              <div>
                <h4 className={styles.featureTitle}>
                  Жекелендірілген ұсыныстар
                </h4>
                <p className={styles.featureText}>
                  Әлсіз жерлеріңізге назар аударуға және нәтижелерді арттыруға
                  көмектесетін прогреске негізделген жекелендірілген нұсқаулық
                  алыңыз.
                </p>
              </div>
            </div>
          </div>
          <img
            className={styles.sectionImg}
            src={progressSectionImg}
            alt="progress section"
          />
        </div>
      </div>

      <div className={`${styles.steps} ${styles.homeSection}`}>
        <div className={`${styles.stepsContent} container`}>
          <div className={styles.text}>
            <h1>Интерактивті зерттеу құралдарымен тарихты үйреніңіз</h1>
            <p>
              Тіркеліңіз және тарихты меңгеруге көмектесетін интерактивті оқу
              құралдарын ұсынатын инновациялық оқу платформамызды зерттеңіз.
              Флэш-карталардан бастап ақыл-ой карталары мен сынақтарға дейін
              бізде табысқа жету үшін қажет нәрсенің бәрі бар.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepItem}>
              <img src={step1Icon} alt="step 1" />
              <h3>Сайтқа тіркелу</h3>
              <p>Тегін тіркелгіңізді жасау арқылы бастаңыз.</p>
            </div>
            <div className={styles.stepItem}>
              <img src={step2Icon} alt="step 2" />
              <h3>Оқу құралдарын зерттеңіз</h3>
              <p>
                Интерактивті флешкарталарды, ақыл-ой карталарын және
                тесттерімізді табыңыз.
              </p>
            </div>
            <div className={styles.stepItem}>
              <img src={step3Icon} alt="step 3" />
              <h3>Прогрессіңізді бақылаңыз</h3>
              <p>Пайдаланушы бетінде оқу үлгеріміңізді бақылаңыз.</p>
            </div>
          </div>

          <div className={styles.stepsBtns}>
            <Link to={loggedIn ? "/learning-techniques" : "/auth/login"}>
              <button className="btn">Тіркелу</button>
            </Link>
            <Link to={loggedIn ? "/learning-techniques" : "/auth/login"}>
              <button className="btn btn--dark-blue-outline">
                Менің аккаунтым бар
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

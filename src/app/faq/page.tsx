import QuestionCard from "./components/questionCard";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div style={{ flex: 1 }}>
      <div className={styles.titleCard}>Вопросы-ответы</div>
      <div className={styles.questionContainer}>
        <QuestionCard
          questionText="Что такое Билетопоиск?"
          answerText="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
        />
        <QuestionCard
          questionText="Какой компании принадлежит Билетопоиск?"
          answerText="Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей на то время)."
        />
        <QuestionCard
          questionText="Как купить билет на Билетопоиск?"
          answerText="— Вы продаёте билетов? — Нет, просто показываю. — Красивое..."
        />

        <QuestionCard
          questionText="Как оставить отзыв на Билетопоиск?"
          answerText="Чтобы оставить отзыв о фильме на Билетопоиск, нужно всего лишь..."
        />
      </div>
    </div>
  );
}

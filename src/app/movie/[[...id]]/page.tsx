import FilmCard from "./components/FilmCard";
import ReviewCard from "./components/ReviewCard";
import styles from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className={styles.content}>
      <FilmCard filmData={testMovie}></FilmCard>

      {testReviews.map((review) => (
        <ReviewCard reviewData={review} key={review.id} />
      ))}
    </div>
  );
}

const testMovie = {
  title: "Властелин колец: Братство Кольца",
  posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
  releaseYear: 2001,
  description:
    "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
  genre: "fantasy",
  id: "2aT976Fs_Bek0e2ZR_05V",
  rating: 8,
  director: "Питер Джексон",
  reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
};

const testReviews = [
  {
    id: "6iaV-jUSjfl-gGk8EOdQ1",
    name: "Андрей",
    text: "Фильм хороший, но сюжет немного затянут",
    rating: 7,
  },
  {
    id: "-b9ezNy3oSoMpldgUl_IC",
    name: "Екатерина",
    text: "В целом, фильм понравился, но некоторые моменты были не очень понятны",
    rating: 6,
  },
];

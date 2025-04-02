export interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
    genre?: string;
    rating?: number;
    isAvailable?: boolean;
  }
  
  export const books: Book[] = [
    {
      id: 1,
      title: "Великий Гетсбі",
      author: "Френсіс Скотт Фіцджеральд",
      year: 1925,
      genre: "Класика",
      rating: 4.5,
      isAvailable: true
    },
    {
      id: 2,
      title: "1984",
      author: "Джордж Орвелл",
      year: 1949,
      genre: "Антиутопія",
      rating: 4.8,
      isAvailable: false
    },
    {
      id: 3,
      title: "Вбити пересмішника",
      author: "Гарпер Лі",
      year: 1960,
      genre: "Драма",
      rating: 4.7,
      isAvailable: true
    },
    {
      id: 4,
      title: "Гобіт, або Туди і Звідти",
      author: "Джон Роналд Руел Толкін",
      year: 1937,
      genre: "Фентезі",
      rating: 4.9,
      isAvailable: true
    },
    {
      id: 5,
      title: "Гордість і упередження",
      author: "Джейн Остін",
      year: 1813,
      genre: "Роман",
      rating: 4.6,
      isAvailable: false
    },
    {
      id: 6,
      title: "Мобі Дік, або Білий кит",
      author: "Герман Мелвілл",
      year: 1851,
      genre: "Пригоди",
      rating: 4.3,
      isAvailable: true
    },
    {
      id: 7,
      title: "Ловець у житі",
      author: "Джером Девід Селінджер",
      year: 1951,
      genre: "Роман",
      rating: 4.2,
      isAvailable: true
    },
    {
      id: 8,
      title: "Прекрасний новий світ",
      author: "Олдос Гакслі",
      year: 1932,
      genre: "Наукова фантастика",
      rating: 4.4,
      isAvailable: false
    },
    {
        id: 9,
        title: "Сон в літню ніч",
        author: "Вільям Шекспір",
        year: 1595,
        genre: "Комедія",
        rating: 4.7,
        isAvailable: true
      }
  ];

  // Save books to localStorage if not already saved
  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(books));
  }

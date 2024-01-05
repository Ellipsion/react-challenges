import ColorQuiz from "./challenges/01/ColorQuiz";
import WordSearch from "./challenges/02/WordSearch";
import Sudoku from "./challenges/03/Sudoku";

const challenges = [
  {
    name: "Guess the Color",
    difficulty: "Easy",
    imageUrl: "/screenshots/challenge1.png",
    updated: "30th Dec'23",
    path: "1",
    element: <ColorQuiz />,
  },
  {
    name: "Search Synonyms",
    difficulty: "Easy",
    imageUrl: "/screenshots/challenge2.png",
    updated: "1st Jan'24",
    path: "2",
    element: <WordSearch />,
  },
  {
    name: "Sudoku",
    difficulty: "Intermediate",
    imageUrl: "/screenshots/challenge3.png",
    updated: "5th Jan'24",
    path: "3",
    element: <Sudoku />,
  },
];

export { challenges };

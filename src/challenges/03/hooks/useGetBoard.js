import React, { useEffect, useState } from "react";
import { fetchBoard } from "../api/fetchBoard";

const useGetBoard = () => {
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBoard = async () => {
    setLoading(true);
    fetchBoard().then((data) => {
      setBoard(data?.newboard?.grids[0]?.value);
      setSolution(data?.newboard?.grids[0]?.solution);
      setLoading(false);
    });
  };

  useEffect(() => {
    getBoard();
  }, []);

  return { board, solution, getBoard, loading };
};

export default useGetBoard;

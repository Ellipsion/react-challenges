import { useState } from "react";
import { fetchSuggestions } from "../api/fetchData";

const useGetSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getSuggestions = async (word) => {
    setLoading(true);
    fetchSuggestions(word)
      .then(setSuggestions)
      .then(() => setLoading(false));
  };

  return { suggestions, getSuggestions, isLoading };
};

export default useGetSuggestions;

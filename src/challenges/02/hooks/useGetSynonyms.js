import { useState } from "react";
import { fetchSynonyms } from "../api/fetchData";

const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getSynonyms = async (word) => {
    setLoading(true);
    fetchSynonyms(word)
      .then(setSynonyms)
      .then(() => setLoading(false));
  };

  return { synonyms, getSynonyms, isLoading };
};

export default useGetSynonyms;

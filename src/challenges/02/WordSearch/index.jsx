import React, { useState } from "react";
import useGetSynonyms from "../hooks/useGetSynonyms";
import useGetSuggestions from "../hooks/useGetSuggestions";
import Header from "../components/DummyHeader";
import SearchBar from "../components/SearchBar";
import WordList from "../components/WordList";

const WordSearch = () => {
  const [word, setWord] = useState("");
  // const [suggest, setSuggest] = useState(false);
  const { synonyms, getSynonyms, isLoading } = useGetSynonyms()
  // const { suggestions, getSuggestions, isLoading: loadingSuggestions } = useGetSuggestions()

  const handleSubmit = async (e) => {
    e.preventDefault();
    getSynonyms(word)
    // setSuggest(false)
  }



  return (
    <div className="flex relative overflow-hidden min-h-screen flex-1 flex-col">
      <Header />
      <div className="h-[80px] flex bg-black justify-center items-center w-full bg-gradient-to-r from-white to-fuchsia-200 px-5 lg:px-12">
        <div className="relative h-[140px] sm:mx-auto w-full md:max-w-lg">
          <form onSubmit={handleSubmit}>
            <SearchBar value={word} onChange={(e) => setWord(e.target.value)} />
          </form>
        </div>
      </div>
      {
        (synonyms.length > 0) && (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  rounded-md p-10">
            <h1 className="font-bold text-4xl text-center">Synonyms</h1>
            <WordList loading={isLoading} synonyms={synonyms} />
          </div>
        )
      }

    </div>
  );
};

const Loader = () => {
  return (
    <ul className="w-full flex flex-col mt-10">
      {
        new Array(5).fill(0).map((item, idx) => <li className="bg-gradient-to-r to-gray-200 from-gray-100 rounded p-2 w-3/4 border-b font-medium text-sm animate-pulse" key={`${item}-${idx}`}>
          <div className="h-5 w-2/5 bg-gray-300"></div>
        </li>)
      }
    </ul>
  )
}

export default WordSearch;

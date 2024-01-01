import React, { useState } from "react";
import useGetSynonyms from "../hooks/useGetSynonyms";
import useGetSuggestions from "../hooks/useGetSuggestions";

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
    <div className="flex relative overflow-hidden bg-zinc-200 min-h-screen flex-1 flex-col justify-center px-6  py-12 lg:px-8">
      <div className="z-10 sm:mx-auto sm:w-full sm:max-w-sm  rounded-md p-5">
        <h1 className="font-bold text-zinc-400 text-4xl py-10 ">Search Synonyms</h1>
        <form className="relative w-full" onSubmit={handleSubmit}>
          <label className="text-sm text-zinc-600 font-medium" htmlFor="word-input">Your Word</label>
          <div className="flex gap-5">
            <input value={word} onChange={(e) => setWord(e.target.value)} id="word-input" className="w-full h-full bg-gray-100 rounded text-black p-2 hover:outline-none hover:bg-gray-50 transition-colors focus:outline-none focus:bg-white" type="text" />
            <button>Search</button>
          </div>
          {
            // (suggest && suggestions) && (
            //   <ul className="absolute w-full flex rounded-lg flex-col mt-1">
            //     {suggestions.map((syn) => (
            //       <li className="bg-gray-50  p-2 w-3/4 border-b font-medium text-sm" key={`${syn.word}-${syn.score}`}>{syn.word}</li>
            //     ))}
            //   </ul>
            // )
          }

        </form>
        {
          isLoading
            ?
            <Loader />
            :
            <ul className="w-full flex flex-col mt-10">
              {synonyms.map((syn) => (
                <li className="bg-gray-100 rounded p-2 w-3/4 border-b font-medium text-sm" key={`${syn.word}-${syn.score}`}>{syn.word}</li>
              ))}
            </ul>
        }

      </div>
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

const API_URL = import.meta.env.VITE_API_URL ?? "https://api.datamuse.com";

export async function fetchSynonyms(word) {
  const max = 5;
  const searchTerm = word.replace(" ", "+");
  return fetch(`${API_URL}/words?rel_syn=${searchTerm}&max=${max}`).then(
    (response) => response.json()
  );
}

export async function fetchSuggestions(word) {
  const max = 5;
  const searchTerm = word.replace(" ", "+");
  return fetch(`${API_URL}/sug?s=${searchTerm}&max=${max}`).then((response) =>
    response.json()
  );
}

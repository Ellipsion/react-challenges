// https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty},results,message}}
const API_URL = "https://sudoku-api.vercel.app/api"

export async function fetchBoard() {
    const query = "{newboard(limit:1){grids{value,solution,difficulty},results,message}}"
    return fetch(`${API_URL}/dosuku?query=${query}`)
        .then(res => res.json())

}
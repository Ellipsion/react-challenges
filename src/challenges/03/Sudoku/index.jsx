import React, { useEffect, useState } from 'react'

import useGetBoard from '../hooks/useGetBoard'

const Sudoku = () => {

    const { board, solution, getBoard, loading } = useGetBoard()
    const [gameState, setGameState] = useState([])
    const [solved, setSolved] = useState(false)

    const isReadOnly = (rid, cid) => (board[rid][cid] !== 0)
    const parseCellValue = (value) => value !== 0 ? value : ""

    useEffect(() => {
        if (board) {
            setGameState(board)
        }
    }, [board])

    const handleSolve = () => {
        setGameState(solution)
        setSolved(true)
    }

    const handleClear = () => {
        getBoard();
        setSolved(false)
    }

    const updateBoard = (rid, cid, value) => {
        const newBoard = gameState.map((row, row_idx) => {
            if (row_idx === rid) {
                return row.map((cell, cell_idx) => {
                    if (cell_idx === cid) {
                        return value
                    }
                    return cell
                })
            }
            return row
        })
        setGameState(newBoard)
    }

    return (
        <div className="flex relative overflow-hidden bg-zinc-100 min-h-screen flex-1 flex-col justify-center px-6  py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm border bg-white shadow-sm border-gray-200 rounded flex flex-col items-center md:py-8">
                <h1 className='font-bold text-2xl text-gray-600 mb-5'>Sudoku</h1>
                {
                    loading
                        ?
                        <Loader />
                        :

                        <div className='w-fit'>
                            <ul>
                                {
                                    gameState?.map((row, rid) => (
                                        <li className={`flex ${((rid + 1) % 3 == 0 && rid !== 8) && "border-b border-black"}`}>
                                            {
                                                row.map((value, cid) => {
                                                    const readOnly = isReadOnly(rid, cid)
                                                    const cellValue = parseCellValue(value)
                                                    return <Cell value={cellValue} onChange={(e) => updateBoard(rid, cid, e.target.value)} readOnly={readOnly} cid={cid} solved={solved} />
                                                })
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                }

                <div className='mt-5'>
                    {
                        !loading && (
                            solved
                                ?
                                <Button onClick={handleClear}>New Game</Button>
                                :
                                <Button onClick={handleSolve}>Solve</Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const Button = ({ children, ...props }) => {
    return <button {...props} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>{children}</button>
}

const Loader = () => {
    const initialBoard = [
        new Array(9).fill(0),
        new Array(9).fill(1),
        new Array(9).fill(2),
        new Array(9).fill(3),
        new Array(9).fill(4),
        new Array(9).fill(5),
        new Array(9).fill(6),
        new Array(9).fill(7),
        new Array(9).fill(8),
    ]
    const [board, setBoard] = useState(initialBoard)

    const createBoard = () => {
        return new Array(9).fill(new Array(9).fill(0)).map((row) => row.map(() => Math.floor(Math.random() * 10)))
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setBoard(createBoard())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-fit '>
            <ul className='relative min-h-80'>
                <li className='absolute z-10 top-0 left-0 flex items-center justify-center w-full h-full '>
                    <h1 className='text-fuchsia-600 text-5xl  font-mono tracking-wider font-bold'>Loading...</h1>
                </li>
                {
                    board.map((row, rid) => (
                        <li className={`flex animate-pulse  ${((rid + 1) % 3 == 0 && rid !== 8) && "border-b border-black"}`}>
                            {row.map((value, cid) => {
                                return <div className={`w-9 h-9 ${(value === cid) && "bg-fuchsia-100"} ${((cid + 1) % 3 == 0 && cid !== 8) && "border-r border-r-black"}`} />
                            })}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const Cell = ({ cid, readOnly, solved, ...props }) => {
    return (<input {...props} disabled={readOnly || solved} inputMode='numeric' className={`w-9 h-9 border text-center  ${readOnly && "bg-fuchsia-200"} ${((cid + 1) % 3 == 0 && cid !== 8) && "border-r-black"}`} />)
}

export default Sudoku
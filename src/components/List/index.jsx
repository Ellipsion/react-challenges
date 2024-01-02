import { Link } from "react-router-dom"

const challenges = [
    {
        name: 'Guess the Color',
        difficulty: 'Easy',
        imageUrl:
            '/screenshots/challenge1.png',
        updated: "30th Dec'23",
    },
    {
        name: 'Search Synonyms',
        difficulty: 'Easy',
        imageUrl:
            '/screenshots/challenge2.png',
        updated: "1st Jan'24",
    },
]

export default function List() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {challenges.map((item, idx) => (

                <li key={`challenge-${idx}`} >
                    <Link to={`/challenge/${idx + 1}`} className="flex justify-between gap-x-6 py-5 hover:translate-x-1 ease-out transition-transform">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-xl bg-gray-50" src={item.imageUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Challenge {idx + 1}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">{item.difficulty}</p>
                            </div>

                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Updated on <time dateTime={""}>{item.updated}</time>
                            </p>

                        </div>
                    </Link>
                </li>

            ))}
        </ul>
    )
}

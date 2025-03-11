import { FaPeopleArrows } from "react-icons/fa"

function Card({heading,para}) {//for resusable card component
    return (
        <div>
            <div className="w-52 h-44 p-2 flex flex-col border-2 items-center justify-between bg-slate-100 shadow-xl shadow-black ">
                <h1 className="text-center text-xl">{heading}</h1>
                <p className="text-xs text-center">{para}</p>
                <button className="text-sm py-1 px-2 bg-black text-white rounded-full ">Learn More &rarr;</button>

            </div>
            
        </div>
    )
}

export default Card



    
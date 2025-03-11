import { FaCalendar, FaStar } from "react-icons/fa";

function EventCard({event}) {
    const {title,date,image,description,category,loction}=event;
    return (
        <div className="">
            <div className="shadow-2xl md:w-72 flex flex-col gap-4 p-2 rounded-lg  lg:items-center">
                <img src={image} className=" w-80  md:w-72 h-56 rounded-md" />
                <div className="space-y-4 self-start">
                    <h1>{title}</h1>

                    <div className="space-y-2">
                        <p className="flex items-center"><FaCalendar className="text-slate-400"/>{date}</p>
                        <p className="text-blue-500 text-xs flex items-center"><FaStar className="text-yellow-600"/>Join this event with others</p>
                    </div>
                    
                </div>
                <div className="self-stretch">
                    <button className="w-full items-stretch bg-black text-white px-2 py-1 rounded-lg mb-2">Event details &rarr;</button>
                </div>



            </div>

            
        </div>
    )
}

export default EventCard

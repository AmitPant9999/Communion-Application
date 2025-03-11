import { useState } from "react";

function Filter({setEventType,eventType}) {
  return (
    <div>
      <div className="flex justify-center space-x-2 ">
        <button
          className={`${eventType===''? 'bg-blue-600 text-white':''}text-center w-20 border-2 px-2 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white`}
          onClick={() => setEventType("")}
        >
          All
        </button>

        <button
        className={`${eventType==='religious'? 'bg-blue-600 text-white':''}text-center w-20 border-2 px-2 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white`}
          onClick={() => setEventType("religious")}
        >
          Religious
        </button>
        <button
           className={`${eventType==='social'? 'bg-blue-600 text-white':''}text-center w-20 border-2 px-2 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white`}
          onClick={() => setEventType("social")}
        >
          Social
        </button>
        <button
           className={`${eventType==='charity'? 'bg-blue-600 text-white':''}text-center w-20 border-2 px-2 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white`}
          onClick={() => setEventType("charity")}
        >
          Charity
        </button>
      </div>
    </div>
  );
}

export default Filter;

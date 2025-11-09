import { useState } from "react";
function Counter(){
    const [count ,setCount]=useState(0);
    return(
        <div className="text-center mt-10">
            <h1 className="text-2xl font-bold text-blue-500 mb-4">
                Count:{count}
            </h1>
            <button
            onClick={()=> setCount(count+1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                increase
            </button>
        </div>
    );
}
export default Counter;
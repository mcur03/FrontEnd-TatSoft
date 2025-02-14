import React from "react";
import Tipografia from "./Tipografia";

const TextArea = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Tipografia>
        <div className="flex flex-col items-center">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <h1 className="text-purple-900 font-bold text-base">Descripción</h1>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-96 text-sm text-black bg-white border-2 border-purple-500 rounded-lg 
            focus:outline-none focus:ring-purple-500 focus:border-purple-700 dark:bg-white dark:text-black"
          />
        </div>
      </Tipografia>
    </div>
  );
};

export default TextArea;

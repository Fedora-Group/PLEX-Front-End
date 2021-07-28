import React from "react";
import { useHistory } from "react-router";

const BackToHome = () => {
  const history = useHistory();
  return (
    <div className=" min-h-screen bg-center bg-origin-content bg-kicked-img bg-cover bg-no-repeat  ">
      <div>
        <p
          className="text-tama font-semibold  text-center  text-center pt-48 pl-48 pr-48"
          style={{ "font-size": "2rem" }}
        >
          sorry you have been Banned <br />
          or the meeting has been ended
        </p>
      </div>

      <div className='text-center mt-10'>
        <button
          className=" rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to home
        </button>
      </div>
     </div>
  );
};

export default BackToHome;

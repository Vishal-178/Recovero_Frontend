import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
export default function Header(props) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between pt-4 xl:px-10">
        {/* logo */}
        <Link to="/">
          <div className="flex items-center p-2">
            <span className="text-xl font-bold ml-2">Recovero Test</span>
          </div>
        </Link>
        {/* right container */}
        {props.displaySearch ? (
          <div className="flex items-right">
            {/* search bar */}
            <div className="hidden sm:flex">
              <Search updateOnSearch={props.updateOnSearch} />
            </div>
            {/* right button */}
            <div className="flex items-center">
              <Link to="/create">
                <button className="bg-blue-500 text-white rounded-full px-4 py-1 mr-2">
                  Create
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* search bar on mobile size */}
      {props.displaySearch ? (
        <div className="flex justify-center mt-4">
          <div className="sm:hidden">
            <Search updateOnSearch={props.updateOnSearch} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

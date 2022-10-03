import React from "react";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

// search component
export default function Search(props) {
  const { searched, user } = useContext(DataContext);
  // on every change in the search input, update the searched data
  const searchOnEveryClick = (e) => {
    // if the search input is 3 or more characters long, search the data
    // else set the searched data to empty
    if (e.target.value.length >= 3) {
      user.forEach((item) => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          if (!searched.includes(item)) {
            searched.push(item);

            props.updateOnSearch();
          }
        }
      });
    } else {
      searched.length = 0;
      props.updateOnSearch();
    }
  };
  return (
    <div className="items-center rounded-full p-2">
      <input
        type="text"
        className="bg-gray-200 rounded-full w-64 px-4 py-1 outline-none"
        placeholder="Search"
        onChange={searchOnEveryClick}
      />
    </div>
  );
}

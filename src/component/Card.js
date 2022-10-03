import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import { toast } from "react-toastify";

// card component
export default function Card(props) {
  const { user } = useContext(DataContext);
  // delete user from the user array
  const deleteUser = () => {
    user.forEach((item) => {
      if (item.id == props.userData.id) {
        const index = user.indexOf(item);
        if (index > -1) {
          user.splice(index, 1);
          toast.success("User deleted successfully");
        }
        props.render();
      }
    });
  };
  return (
    <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-900">
        <div className="flex-auto p-4">
          <div className="flex flex-row flex-nowrap justify-between">
            <Link to={`/update/${props.userData.id}`}>
              <div className="flex flex-row">
                <div className="relative pr-4">
                  <img
                    className="block w-15 rounded-full"
                    src={props.userData.picture}
                    alt="Woman's Face"
                  />
                </div>
                <div className="relative w-auto flex-initial">
                  <div className="flex flex-col">
                    <span className="text-blue-300 uppercase font-bold text-xs">
                      Name
                    </span>

                    <h3 className="font-semibold text-base text-white text-ellipsis xl:truncate">
                      {props.userData.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            <div className="relative">
              {/* delete button */}
              <div className="relative w-auto">
                <div className="text-right">
                  <button
                    className="hover:bg-red-500  rounded-2xl"
                    onClick={deleteUser}
                  >
                    <img
                      className="w-7"
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to={`/update/${props.userData.id}`}>
            <div className="container mt-1 ml-2">
              <div className="relative w-auto flex-initial">
                <span className="text-blue-300 uppercase font-semibold text-xs pr-4">
                  Gender :
                </span>
                <span className="font-semibold text-base text-neutral-900">
                  {props.userData.gender}
                </span>
              </div>
              <div className="relative w-auto flex-initial">
                <span className="text-blue-300 uppercase font-semibold text-xs pr-4">
                  Phone No :
                </span>
                <span className="font-semibold text-base text-neutral-900">
                  {props.userData.phone}
                </span>
              </div>
              <div className="relative w-auto flex-initial">
                <span className="text-blue-300 uppercase font-semibold text-xs pr-4">
                  Group Name:
                </span>
                <span className="font-semibold text-base text-neutral-900">
                  {props.userData.group}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

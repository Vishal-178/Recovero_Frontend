import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

export default function Form() {
  // getting all the data from input and storing in state
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [group, setGroup] = useState("colleagues");
  const [gender, setGender] = useState("other");
  const { user } = useContext(DataContext);
  // id is use to get the id from url
  const { id } = useParams();
  // navigate is use to navigate to the home page
  const navigate = useNavigate();
  // handleLogin is use to handle the submit event
  const handleLogin = async (e) => {
    // stop page to rerender.
    e.preventDefault();
    // check if the inputs are empty
    if (name == "" || number == "" || image == "") {
      toast.error("Please fill all the fields");
      return;
    }
    // check if image is url and start with https
    if (!image.startsWith("https://")) {
      toast.error("Please enter a valid image url");
      return;
    }
    // check if the number is 10 digit long
    if (number.length !== 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    // if id is present in url, update the data
    // else add the data to the user
    if (id) {
      // update user
      user.forEach((item) => {
        if (item.id == id) {
          item.name = name;
          item.phone = number;
          item.picture = image;
          item.group = group;
          item.gender = gender;
        }
      });
      toast.success("User updated successfully");
    } else {
      // add user
      user.push({
        id: user.length + 1,
        name: name,
        phone: number,
        picture: image,
        group: group,
        gender: gender,
      });
      toast.success("User added successfully");
    }

    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center p-4 pt-10">
        <form className="w-full max-w-lg" onSubmit={handleLogin}>
          <div className="w-full  px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Other</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full  px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          {/* Group Image */}
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Group
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option>colleagues</option>
                <option>friends</option>
                <option>family</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {/* image Input */}
          <div className="w-full  px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Enter Your image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <p className="text-gray-600 text-xs italic">
              please only enter your image url here.
            </p>
          </div>
          {/* submit button */}
          <div className="w-full  px-3 mb-6 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

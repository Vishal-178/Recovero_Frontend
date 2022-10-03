import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
// Home page
export default function Home() {
  //render is use to rerender the page when delete
  const [render, setRender] = useState(false);
  //userData is use to store the data from context
  const [userData, setUserData] = useState([]);
    // user is use to store the data from context and searched is use to store the searched data
  const { user, searched } = useContext(DataContext);
  // render the page when delete
  const rerender = () => {
    setRender(!render);
  };
  // update the userData when user or searched is changed
  const updateSearchData = () => {
    if (searched.length > 0) {
      setUserData(searched);
    } else {
      setUserData(user);
    }
  };
  useEffect(() => {
    if (searched.length === 0) {
      setUserData(user);
    } else {
      setUserData(searched);
    }
  }, []);
  return (
    <div className="App">
      <Header
        displaySearch={true}
        render={rerender}
        updateOnSearch={updateSearchData}
      />
      <div className="container mx-auto px-4 xl:px-10">
        <div className="flex flex-wrap">
          {userData.map((item) => (
            <Card key={item.id} userData={item} render={rerender} />
          ))}
        </div>
      </div>
    </div>
  );
}

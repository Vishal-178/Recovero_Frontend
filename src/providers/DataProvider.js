import { createContext } from "react";
import data from "../helper/userData.json";
const initialState = {
  user: [],
  searched: [],
};
// Create a context which will be used to share the data to all the components.
export const DataContext = createContext(initialState);
// DataProvider is a component which will be used to wrap all the components.
export const DataProvider = ({ children }) => {
  var filteredData = [];
  var allData = data.results;
  // Filter the data to get only the required data.
  for (var i = 0; i < allData.length; i++) {
    filteredData.push({
      id: allData[i].id,
      name: allData[i].name,
      gender: allData[i].gender,
      phone: allData[i].phone,
      group: allData[i].group,
      picture: allData[i].picture,
    });
  }
  return (
    <DataContext.Provider value={{ user: filteredData, searched: [] }}>
      {children}
    </DataContext.Provider>
  );
};

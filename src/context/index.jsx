import { type } from "@testing-library/user-event/dist/type";
import { use } from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);

  const handleFormSubmit = (currentFormData) => {
    if(!currentFormData.description || !currentFormData.amount) return
    setAllTransaction([
        ...allTransaction,
        {...currentFormData, id: Date.now()}
    ])    
  }

  console.log(allTransaction);
  
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransaction,
        setAllTransaction,
        handleFormSubmit
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

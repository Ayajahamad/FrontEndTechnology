import { createContext } from "react";
import UserAPI from "../API/UserAPI";

// init Comtext
export const DataContext = createContext();

function DataProvider(props){
    const data = {
        userApi : UserAPI(),
        // postApi : usePostApi(),
        // commentApi : useCommentApi()
    }
    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;


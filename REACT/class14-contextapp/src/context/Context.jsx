import { createContext } from "react";
import UserAPI from "../API/UserAPI";
import PostAPI from "../API/PostApi"
import CommentAPI from "../API/CommentApi";

// init Comtext
export const DataContext = createContext();

function DataProvider(props){
    const data = {
        userApi : UserAPI(),
        postApi : PostAPI(),
        commentApi : CommentAPI()
    }
    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;


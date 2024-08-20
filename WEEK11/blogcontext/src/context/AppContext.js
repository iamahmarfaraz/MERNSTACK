import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



// Step1 :- Create Context
export const AppContext = createContext();

// Step2 :- Provider   
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [posts,setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogData(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)

        } catch (error) {
            console.log("Error in API Call");
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            return (<div className="flex justify-center items-center">404 : Error</div>);
        }
        setLoading(false);
    }

    function pageChangeHandler(page){
        setPage(page);
        fetchBlogData(page);
    }

   


    const value =    {
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchBlogData,
        pageChangeHandler 
    }

    return <AppContext.Provider value={value }>
        {children}
    </AppContext.Provider>

}
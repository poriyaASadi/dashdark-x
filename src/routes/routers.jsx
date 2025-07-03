import Home from "../pages/Home";

import NotFound from "../components/NotFound";
import { Navigate } from "react-router-dom";
export const router = [
    {path : '/',element : <Home/>},
    {path : '*',element : <Navigate to={'/not-found-page'}/>},
    {path : '/not-found-page', element :<NotFound/>}
]
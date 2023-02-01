import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { townConstuctor } from "../../helpers";
import api from "../../services/services";
import Home from "../Home/Home";
import { setTown } from "../../store/townSlice";

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const params= useParams();
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
        api.getCurrentWeatherByName(params.name!)
        .then(town =>{
            const newData = townConstuctor(town)
            dispatch(setTown({...newData}));
            setLoading(true)
        })
    },[params.name,dispatch]);

    return <Home isDataLoaded={loading}/>
}

export default Search;
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Home from "../Home/Home";

import { setTown } from "../../store/townSlice";

import { Town } from "../../helpers";
import api from "../../services/services";

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false)
        api.getCurrentWeatherByName(params.name?.trim()!)
            .then(town => {
                const newData = new Town(town)
                dispatch(setTown({ ...newData }));
                setLoading(true)
            })
            .catch(err => {
                navigate('/404', { state: { message: err.message } })
            })
    }, [params.name, dispatch, navigate]);

    return <Home isDataLoaded={loading} />
}

export default Search;
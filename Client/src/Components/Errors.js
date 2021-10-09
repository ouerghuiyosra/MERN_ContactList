import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Errors = ({error}) => {
    const [alert, setAlert] = useState(true);
    const errors = useSelector(state => state.authReducer.errors)
    console.log(errors)


    return (
        alert && (
            <div className="alert alert-dark" role="alert">
             {errors.msg}
            </div>

        )

    );
}

export default Errors

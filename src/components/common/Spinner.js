    import React from "react";
    import "./Spinner.css"; 
    import PropTypes from "prop-types";
    const Spinner = ({loading})=>{
        return(
            <div>
                {loading && <div className="loader">
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__bar"></div>
                        <div className="loader__ball"></div>
                        </div>}
            </div>

        );
    }
    Spinner.proptypes={
        loading:PropTypes.bool.isRequired
    }
    export default Spinner;
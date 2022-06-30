import React from "react";
import PropTypes from 'prop-types';
import Language from "./Language";

const Languages = ({ data }) => (
    <div className="skills">
        <div className='uppercase-bold'>
            Languages
        </div>
        <div>
            {data.map((language) => (
                <Language
                    data={language}
                    key={language.proficiency}
                />
            ))}
        </div>
    </div>
);

Languages.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        language: PropTypes.string.isRequired,
        proficiency: PropTypes.string.isRequired,
    })),
};

Languages.defaultProps = {
    data: [],
  };

export default Languages;
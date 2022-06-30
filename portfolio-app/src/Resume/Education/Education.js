import React from "react";
import PropTypes from 'prop-types';
import Degree from './Degree.js';

const Education = ({ data }) => (
    <div>
        <div className='uppercase-bold'>
            Education
        </div>
        {data.map((degree) => (
            <Degree
                data={degree}
                key={degree.school}
            />
        ))}

    </div>
);

Education.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        degree: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        link: PropTypes.string,
        year: PropTypes.numbers,
    })),
};

Education.defaultProps = {
    data: [],
  };

export default Education;
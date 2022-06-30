import React from "react";
import PropTypes from 'prop-types';


const Language = ({ data }) => (
    <article className="degree-container">
      <header>
        <div>{data.language}: {data.proficiency}</div>
      </header>
    </article>
  );
  
  Language.propTypes = {
    data: PropTypes.shape({
      language: PropTypes.string.isRequired,
      proficiency: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Language;
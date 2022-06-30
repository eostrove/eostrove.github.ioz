import React from "react";
import PropTypes from 'prop-types';
import Cell from "./Projects/Cell";
import data from "./Projects/projectsdata";

const Project = () => (
    <div className="wrapper">
        <div className="main">
            <h2><span>
                projects
            </span></h2>
            <div>
                {data.map((project) => (
                    <Cell
                        data={project}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    </div>
);

Project.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        project: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.numbers,
        bullet1: PropTypes.string.isRequired,
        bullet2: PropTypes.string.isRequired,
        bullet3: PropTypes.string.isRequired,
    }))
}

Project.defaultProps = {
    data: [],
};

export default Project;
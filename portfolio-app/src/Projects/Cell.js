import React from "react";
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
    <div className="cell-container">
        <article className="mini-post">
            <header>
                <h3><a href={data.link}>{data.title}</a></h3>
                <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
            </header>
            <a href={data.link}>
                <img src={data.image} alt={data.title} className="project-image"/>
            </a>
            <div className="bulletpoints">
                <ul>
                    <li>{data.bullet1}</li>
                    <li>{data.bullet2}</li>
                    <li>{data.bullet3}</li>
                </ul>
            </div>
        </article>
    </div>
);

Cell.ropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        project: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.numbers,
        bullet1: PropTypes.string.isRequired,
        bullet2: PropTypes.string.isRequired,
        bullet3: PropTypes.string.isRequired,
    })),
};

Cell.defaultProps = {
    data: [],
};

export default Cell;
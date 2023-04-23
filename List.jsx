//lease fix, optimize, and/or modify the component as much as you think is necessary.

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{ backgroundColor: isSelected ? 'green' : 'red' }}
            onClick={() => onClickHandler(index)}
        >
            {text}
        </li>
    );
});

SingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setSelectedIndex(0);
    }, [items]);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <ul style={{ textAlign: 'left' }}>
            {items &&
                items.map((item, index) => (
                    <SingleListItem
                        key={index}
                        onClickHandler={handleClick}
                        text={item.text}
                        index={index}
                        isSelected={selectedIndex === index}
                    />
                ))}
        </ul>
    );
});

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
        })
    ),
};

List.defaultProps = {
    items: null,
};

export default List;

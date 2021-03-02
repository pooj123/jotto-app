import React from 'react';
import PropTypes from 'prop-types';

export default (props) => {
    if (props.success) {
        return (
            <div data-test="comp-congrats">
                <span data-test="congrats-msg">
                    Congratulations. You have guessed the word right !!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="comp-congrats" />
        )
    }
}
import React, { useState } from "react";
import PropTypes from "prop-types";

const Select = ({ id, textLabel, selectClass, handleChange, optionClass, arr }) => {
	return (
		<>
			<label htmlFor={id}>{textLabel}</label>
			<select className={selectClass} id={id} value={""} onChange={(e) => handleChange && handleChange(e)}>
				{arr.map(({ value, text }, index) => (
					<option className={optionClass} key={`index ${index}`} value={value}>
						{text}
					</option>
				))}
			</select>
		</>
	);
};

Select.propTypes = {
	id: PropTypes.string,
	textLabel: PropTypes.string,
	selectClass: PropTypes.string,
	handleChange: PropTypes.func,
	optionClass: PropTypes.string,
	arr: PropTypes.array.isRequired,
};

export default Select;

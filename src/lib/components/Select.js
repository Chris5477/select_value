import React from "react";
import PropTypes from "prop-types";

const Select = ({ id, textLabel, selectClass, value, handleChange, optionClass, arr }) => {
	return (
		<div className="select-menu">
			<label htmlFor={id}>{textLabel}</label>
			<select className={selectClass} id={id} value={value} onChange={(e) => handleChange(e)}>
				{arr.map(({ val, text }, index) => (
					<option className={optionClass} key={`index ${index}`} value={val}>
						{text}
					</option>
				))}
			</select>
		</div>
	);
};

Select.propTypes = {
	id: PropTypes.string,
	textLabel: PropTypes.string,
	selectClass: PropTypes.string,
	value: PropTypes.string,
	handleChange: PropTypes.func,
	optionClass: PropTypes.string,
	arr: PropTypes.array.isRequired,
};

export default Select;

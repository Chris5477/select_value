import React, { useState } from "react";
import PropTypes from "prop-types";

const Select = ({ id, textLabel, selectClass, optionClass, arr }) => {
	const [value, setValue] = useState("");

	return (
		<>
			<label htmlFor={id}>{textLabel}</label>
			<select className={selectClass} id={id} value={value} onChange={(e) => setValue(e.target.value)}>
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
	optionClass: PropTypes.string,
	arr: PropTypes.array.isRequired,
};

export default Select;

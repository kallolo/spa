import React from 'react';
import './AddButton.css';

const AddButton = (props) => (
    <button onClick={props.handleNewButton} className="float"> + </button>
)

export default AddButton;
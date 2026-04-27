import React from "react";

interface FieldProps {
    label: string;
    type: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
}

const Field = ({label,type,value,onChange}:FieldProps) => {
    return(
        <label className="label_field">
            {label}: 
            <input className="input_field" type={type} value={value} onChange={onChange}/>            
        </label>
    )
}

export default Field; 
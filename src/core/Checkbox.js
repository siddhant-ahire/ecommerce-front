import React, { useState } from 'react'

const Checkbox = ({categories,handleFilters}) => {

    const [checked, setChecked] = useState([]);

    const handleToggle = c => () => {
        // return the first index or -1
        const currentCategoryID = checked.indexOf(c);
        const newCheckedCategoryID = [...checked];
        // if currenty checked was not already in checked state > push 
        //else pull/take off
        if(currentCategoryID === -1){
            newCheckedCategoryID.push(c)
        } else {
            newCheckedCategoryID.splice(currentCategoryID,1)
        }
        setChecked(newCheckedCategoryID);
        handleFilters(newCheckedCategoryID);
    }


    return categories.map((c,i)=>(
        <li className="list-unstyled" key={i}>
            <input onChange={handleToggle(c._id)} value={checked.indexOf(c.id === -1)} type='checkbox' className="form-check-input" />
            <label className="form-check-label">{c.name}</label>
        </li>
    ))
}

export default Checkbox

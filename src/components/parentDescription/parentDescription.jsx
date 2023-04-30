import React, { useState } from 'react';
import "./parentDescription.css";
export function ParentDescription(props) {
    const [descriptionsExpanded, setDescriptionsExpanded] = useState(false);
    const toggleDescriptions = () => {
        setDescriptionsExpanded(!descriptionsExpanded);
    }
    return (
              <div className="descriptions">
                <p className={`descriptions-header ${descriptionsExpanded ? 'show' : ''}`} onClick={toggleDescriptions}>
                    {props.title}
                    <i  className={`fa-solid fa-chevron-${descriptionsExpanded ? 'down' : 'up'}`}></i>
                </p>
                {descriptionsExpanded && (
                    <p className={`descriptions-content ${descriptionsExpanded ? 'show' : ''}`}> {props.content}</p>
                )}
            </div>
       
    )
}

export default ParentDescription;

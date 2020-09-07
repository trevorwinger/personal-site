import React from 'react';

const Education = () => {
    const undergrad = ['BA: Philosophy', 'BS: Linguistics', 'BA: Cognitive Science', 'BA: Computer Science', 'MCS: Computer Science']
    return(
        <div>
            <h2>Education</h2>
            <ul>
                {
                    undergrad.map((ug => <li style={{textAlign:'left'}}>{ug}</li>))
                }
            </ul>
        </div>
    )
}

export default Education;
import React from 'react';

const Family = (props) => {
    return ( 
        <div>
            { props.children.map((child, index) => React.cloneElement(child, {...props, key: index })) }
        </div> 
    );
}
 
export default Family;
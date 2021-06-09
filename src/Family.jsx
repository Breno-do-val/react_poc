import React from 'react';

const Family = (props) => {
    return (
        <div className="h-100 p-5 text-white bg-dark rounded">
            <h2>Elementos aninhados</h2>
            <p>Estratégia para extender a props do elemento pai para os elementos filhos</p>
            {
                props.children.map((child, index) => React.cloneElement(child, { ...props, key: index }))
            }
        </div>
    );
}

export default Family;
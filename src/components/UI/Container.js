import React from 'react'

export const Container = (props) => {
    const justify = props.justify || 'center';
    return (
        <div className={`bg-dark row align-items-center container-component justify-content-${justify} main-form flex-column`}>
            {props.children}
        </div>
    )
}

//importaciones

import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//componente funcional 
const Functions = ({onContentClear, onDelete}) =>
    {
        return (
            <section className="functions">
                <Button type="button-long-text" text="Clear" clickHandler={onContentClear} />
                <Button text="&larr;" clickHandler={onDelete} />
            </section>
        )
    }

Functions.propTypes ={
    onContentClear: PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired
}

//exportando el componente
export default Functions

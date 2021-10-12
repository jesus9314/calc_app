import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//Componente funcional

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)

MathOperations.propTypes =
{
    onClickOperations : PropTypes.func.isRequired,
    onclickEqual : PropTypes.func.isRequired
}
export default MathOperations
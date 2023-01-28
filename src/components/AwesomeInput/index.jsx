import React from 'react'
import classes from './index.module.css'
function AwesomeInput() {
  return (
    <div className={classes.form}>
        <input type="text" name='name'
        autoComplete='off' required />
        <label htmlFor="name" className={classes.labelName}>
            <span className={classes.contentName}>
                Name
            </span>
        </label>
    </div>
  )
}

export default AwesomeInput
import React, { useState } from 'react'
import PT from 'prop-types'
import clnm from 'classnames'

import './TodoInput.styl';

const TodoInput = ( {value, onSave, isNew, editing, placeholder} ) => {

  const b = 'TODOInput';

  const [text, setText] = useState( value||'' );

  const handleChange = e =>
      setText( e.target.value );

  const handleBlur = e =>
      !isNew && onSave( e.target.value );

  const handleSubmit = e => {
    if (e.which === 13) {
      onSave(e.target.value);
      isNew && setText( '' )
    }
  };

  return (
    <input
      type="text"
      value={text}
      className={clnm(b, {'-edit': editing, '-new': isNew})}
      placeholder={placeholder}
      autoFocus={true}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
};

TodoInput.propTypes = {
  onSave: PT.func.isRequired,
  value: PT.string,
  placeholder: PT.string,
  editing: PT.bool,
  isNew: PT.bool
};

export default TodoInput
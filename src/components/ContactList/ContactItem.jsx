import React from 'react'
import PropTypes from 'prop-types';


export function ContactItem({contact,onBtnClick}) {
    const style = { display: 'flex', alignItems: 'baseline' };
  return (
    <div key={contact.id} style={style}>
        <p style={{ marginRight: '25px' }}>
          {contact.name}:{contact.number}
        </p>
        <button
          name={contact.name}
          onClick={() => onBtnClick(contact.id)}
          type="button"
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
  )
}

ContactItem.propTypes = {
    contact:
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ,
    onBtnClick: PropTypes.func.isRequired,
  };
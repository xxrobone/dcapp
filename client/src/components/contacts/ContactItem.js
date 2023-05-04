import React from 'react'
import {RiMailOpenLine, RiPhoneLine, RiEdit2Line, RiDeleteBin3Line} from 'react-icons/ri'

const ContactItem = ({contact}) => {
    const {id, name, email, phone, type} = contact;
  return (
    <div className="card bg-dark border-rounded">
        <h3 className='text-primary text-left'>
            {name} {' '}<span 
            style={{float: 'right'}}
            className={`badge ${type === 'teacher' ? 'badge-teacher' : 'badge-student'}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </h3>
          <ul className='list'>
            {email && (
              <li style={{display: 'flex', alignItems: 'center'}}>
                <RiMailOpenLine />{' '}{email}
              </li>)}
            {phone && (
              <li style={{display: 'flex', alignItems: 'center'}}>
                <RiPhoneLine />{' '}{phone}
              </li>
            )}
          </ul>
          <div>
          <button className='btn btn-light btn-sm'><RiEdit2Line /></button>
          <button className='btn btn-light btn-sm' style={{color: 'tomato'}}><RiDeleteBin3Line /></button>

          </div>
    </div>
  )
}

export default ContactItem
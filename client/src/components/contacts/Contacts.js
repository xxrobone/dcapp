import React, {useContext, Fragment} from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext

    console.log(contacts)
  return (
    <Fragment>
    {contacts.map(contacts => (
            <ContactItem contact={contacts} key={contacts.id} />
    ))}

    </Fragment>
  )
}

export default Contacts
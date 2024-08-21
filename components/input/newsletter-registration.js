import { useContext, useRef } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef = useRef()
  const notification = useContext(NotificationContext)

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value
    
    notification.showNotification({
      title: 'Sending the email...',
      status: 'pending',
      message: 'Please Wait...'
    })

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    }).then(response => {

      if(response.ok){
        return response.json()
      }
      
      return response.json().then((data) => {
        throw new Error(data.message || 'Something went wrong!')
      })
    })
    .then(data => {
      notification.showNotification({
      title: 'Success!',
      status: 'success',
      message: data.message
    })})
    .catch(error => {
      notification.showNotification({
        title: 'Error!',
        status: 'error',
        message: error.message || 'Something went wrong!'
      })
    })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            ref={emailRef}
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

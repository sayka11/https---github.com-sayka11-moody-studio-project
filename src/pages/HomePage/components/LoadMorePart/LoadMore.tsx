import './LoadMore.scss';
import React from 'react';
import emailIcon from "../../../../assets/Image-home-page/email-icon.png";

export const LoadMore = () => (
    <div className="buttonConteiner">
        <button id="loadButton">LOAD MORE PRODUCTS</button>
        <div className="wrapper">
            <div className="signUpWrapper">
                <div className="sigUptxt-1">SING UP FOR THE NEWSLETTER</div>
                <div className="sigUptxt-2">Subscribe for the latest stories and promotions</div>
            </div>
            <div className="inputWrap">
                <form>
                    <input type="email" name="email" id="email" placeholder="Enter your e-mail address" required />
                    <button id='emailButton' type="submit">
                        <img className='emailImage' src={emailIcon} alt="" /></button>
                </form>
                <span>Thank You For Subscribing!</span>
            </div></div>
    <script>const scriptURL = 'https://script.google.com/macros/s/AKfycbze4qqbt511_pm2iPrMEOgNSyNmZseaSFvHkN7gKxJae4rpCMsbvfEgq1hp1nC6xXOXww/exec'</script>
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {e.preventDefault() 
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
    </div>



);
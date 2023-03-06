import React from 'react';



function ContactMe(props) {
    return (
        <section id="email">
            <h2>Contact Me</h2>
            <p>Please submit your contact information and I'll reach out as soon as I can.</p>
            <p>Thanks for visiting!</p>
            <form action="mailto:bdh747flyna1@hotmail.com?subject=Email from My Site">
                <div class="forminput">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div class="forminput">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactMe;
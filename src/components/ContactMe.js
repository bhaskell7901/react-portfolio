import React from 'react';
import { useForm } from 'react-hook-form';

function ContactMe(props) {
    const { register, handleSubmit, formState } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: ""
        }
    });
    
    const { errors } = formState;

    return (
        <section id="email">
            <h2>Contact Me</h2>
            <p>Please submit your contact information and I'll reach out as soon as I can.</p>
            <p>Thanks for visiting!</p>
            <form onSubmit={handleSubmit()} action="mailto:bdh747flyna1@hotmail.com?subject=Email from My Site">
                <div className="forminput">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" {...register("name", { required: true, maxLength: 50 })}/>
                    {errors.name && <p style={{ size: "12px", color:"red" }} >This is a required field.</p>}
                </div>
                <div className="forminput">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    {errors.name && <p style={{ size: "12px", color:"red" }}>A valid email is required.</p>}
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactMe;
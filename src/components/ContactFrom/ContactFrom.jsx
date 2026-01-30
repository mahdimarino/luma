import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const onSubmit = data => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        fetch('https://mahdismahi.com/mailing/a2.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            name="name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors?.name && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input
                            type="email"
                            placeholder="Email *"
                            name="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors?.email && <p>{errors.email?.message}</p>}
                    </div>

                    <div className="col-md-12 col-12 mb-6">
                        <input
                            type="text"
                            placeholder="Number *"
                            name="number"
                            {...register("number", {
                                required: "Number is required",
                            })}
                        />
                        {errors?.number && <p>{errors.number?.message}</p>}
                    </div>

                    <div className="col-md-12 col-12 mb-6">
                        <input
                            type="text"
                            placeholder="Subject *"
                            name="subject"
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                        />
                        {errors?.subject && <p>{errors.subject?.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea
                            name="message"
                            placeholder="Message"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;

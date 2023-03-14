import React, { useState } from "react";
import "./Form.scss";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    send("service_no4ma78", "template_0ovlhez", data, "EdrVifmFPmkeO3LY-")
      .then((response) => {
        console.log("success!", response.status, response.text);
        formSuccess();
        
      })
      .catch((err) => {
        console.log("failed...", err);
        
      });
  };

  const formSuccess = () => {
    toast("thank for submitting your Query");

    // resetting form
    document.getElementById("queryform").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryform" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="input-field">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              {...register("from_name", { required: "Name is required" })}
            />
            {errors.from_name?.message && (
              <p className="error">{errors.from_name?.message}</p>
            )}
          </div>
          <div className="input-field">
            <input
              type="text"
              name="reply_to"
              placeholder="Email"
              {...register("reply_to", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.reply_to?.message && (
              <p className="error">{errors.reply_to?.message}</p>
            )}
          </div>
        </div>
        <div className="container">
          <div className="input-field">
            <input
              type="text"
              name="phone_number"
              placeholder="Phone"
              {...register("phone_number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
            />
            {errors.phone_number?.message && (
              <p className="error">{errors.phone_number?.message}</p>
            )}
          </div>
          <div className="input-field">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
            />
            {errors.subject?.message && (
              <p className="error">{errors.subject?.message}</p>
            )}
          </div>
        </div>
        <div className="input-field-full-width">
          <textarea
            type="textarea"
            className="textarea"
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: "message is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
              maxLength: {
                value: 500,
                message: "Minimum 500 characters required",
              },
            })}
          ></textarea>
          {errors.message?.message && (
            <p className="error">{errors.message?.message}</p>
          )}
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
}

export default Form;

"use client";

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Button } from "../ui/button";

export const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: "your-form-id",
  });
  const [message, setMessage] = useState("");
  return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
    <h1 className="text-4xl font-bold mb-2">Contacto</h1>
      <form className="w-full max-w-lg p-2" method="post">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="full-name"
              className="block uppercase tracking-wide text-xs font-bold mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              required
              placeholder="Escribe tu nombre completo"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-xs font-bold mb-2"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              required
              placeholder="Escribe tu correo electrónico"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-xs font-bold mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
              required
              minLength="100"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
        </div>
    
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
          <Button   className='md:text-lg p-4 md:p-6  font-semibold w-full bg-[#008DDA]  '>Enviar</Button>
           
          </div>
        </div>
      </form>
 
    </div>
  );
};
export default ContactForm;

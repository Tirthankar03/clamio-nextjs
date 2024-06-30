import React from 'react';

const TextArea = ({ label, register, name }:any) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2">{label}</label>
    <textarea
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
      {...register(name)}
    ></textarea>
  </div>
);

export default TextArea;

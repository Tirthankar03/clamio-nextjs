"use client"
import React, { useState } from 'react'

function ToggleText() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleText = () => {
        setIsExpanded(!isExpanded);
      };
  return (
    <div>
           <p className="text-center md:w-3/4 mx-auto mt-2 px-4">
            {isExpanded ? (
              <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <button className="text-blue-500 ml-2" onClick={toggleText}>Less...</button>
              </>
            ) : (
              <>
                Lorem ipsum dolor sit amet, consectetur...
                <button className="text-blue-500 ml-2" onClick={toggleText}>More...</button>
              </>
            )}
          </p>
    </div>
  )
}

export default ToggleText
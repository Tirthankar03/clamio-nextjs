import React from 'react'
import Card from "@/Reusable Components/Card"
function LibraryPage() {
  return (
    <div>

<div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Library</h2>
        <button className="mb-4 px-4 py-2 border rounded">View All</button>
        <Card/>
      </div>
    </div>
  )
}

export default LibraryPage
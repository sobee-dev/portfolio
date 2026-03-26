'use client'

import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          
          <h2 className="text-slate-900 dark:text-white">
            My <span className="text-blue-800">Blog</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Take a peek at my timeline of events 
          </p>
        </div>

        <div className=''>
          Coming soon..
        </div>
      </div>
    </main>
  )
}

export default page

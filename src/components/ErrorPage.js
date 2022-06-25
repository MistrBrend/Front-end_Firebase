import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='errorPage'>
        <h1>Error! Page not found</h1>
          <Link to="/"><div className='errorHome'>Go back to home</div></Link>
    </div>
  )
}

export default ErrorPage
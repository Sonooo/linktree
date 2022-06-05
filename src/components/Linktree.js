import React from 'react'

export default function Linktree() {
    return (
        <div className="container">

        <div className="row">


          <div className="col-md-6 mb-4">

            <a href="http://github.com/sonooo" className='btn btn-block btn-dark'> Github</a>
            <a href="http://github.com/sonooo" className='btn btn-block btn-info'> Twitter</a>
            <a href="http://github.com/sonooo" className='btn btn-block btn-success'> WhatsApp</a>


          </div>
          <div className="col-md-6 mb-4">
            <a href="http://github.com/sonooo" className='btn btn-block ' style={{ background: "pink" }} > Instagram</a>
            <a href="http://github.com/sonooo" className='btn btn-block btn-primary'> Facebook</a>
            <a href="http://github.com/sonooo" className='btn btn-block btn-info'> LinkedIn</a>

          </div>



        </div>

      </div>
    )
}

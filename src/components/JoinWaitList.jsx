import React, { useState } from 'react'
import JoinWaitlist2 from './JoinWaitlist2'

const JoinWaitList = ({ openModal}) => {

const [openJoinModal2,setOpenJoinModal2]=useState(false)
  return (
   <>
     <div  onClick={()=>openModal(true)} className="modal fade cmn-popwrp" id="joinModal" tabIndex="-1" role="dialog" aria-labelledby="joinModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-body">
                        <div className="cmn-pop-content-wrapper">
                            <div className="cmn-pop-head">
                                <h2>Be first in line</h2>
                                <p>Sign up to unlock early access, exclusive sneak‑peeks, and insider perks—zero spam, 100% good stuff.</p>
                            </div>

                            <div className="cmn-pop-inr-content-wrp">
                                <div className="join-form-wrp">
                                    <form>
                                        <div className="join-form">
                                            <div className="input-grp">
                                                <label>Email</label>
                                                <input type="email" placeholder="you@email.com"/>
                                            </div>
                                            <div className="input-grp">
                                                <p>optional question</p>
                                                <label>What feature are you most interested in?</label>
                                            <select defaultValue=".">
                                                <option value="." disabled>Features</option>
                                               <option value="feature-1">Feature 1</option>
                                              <option value="feature-2">Feature 2</option>
                                             </select>    

                                            </div>

                                            <div className="btn-wrp">
                                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="cmn-btn">Cancel</button>
                                                <button type="button" className="cmn-btn"  data-bs-target="#joinModalConfirm" data-bs-toggle="modal" >Join the waitlist</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
   <JoinWaitlist2   openModal2={setOpenJoinModal2} />
   </>
  )
}

export default JoinWaitList

"use client";
import Image from 'next/image';
import React from 'react'
import checkCircle from '@/assets/check-circle-theme.svg';

const JoinWaitlist2 = ({openModal2}) => {
  return (
  <>
  
    <div  onClick={()=>openModal2(true)} className="modal fade cmn-popwrp" id="joinModalConfirm" tabIndex="-1" role="dialog" aria-labelledby="joinModalConfirm" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-body">
                        <div className="cmn-pop-content-wrapper">
                            <div className="modal-icon">
                                <Image src={checkCircle} alt="Icon"/>
                            </div>
                            <div className="cmn-pop-head">
                                <h2>Almost there!</h2>
                                <p>We’ve sent a confirmation link to your inbox. Click it to secure your spot—no confirmation, no sign-up.</p>
                            </div>

                            <div className="cmn-pop-inr-content-wrp">
                                <div className="join-form-wrp">
                                    <form>
                                        <div className="join-form">
                                            <p className="note-txt">Didn’t see it? Re‑enter your email below:</p>
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
                                                <button type="submit" className="cmn-btn">Join</button>
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
  
  </>
  )
}

export default JoinWaitlist2

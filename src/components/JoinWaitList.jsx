"use client";

import React, { useState, useEffect } from "react";
import JoinWaitlist2 from "./JoinWaitlist2";
import Select from "react-select";

const JoinWaitList = ({ openModal }) => {
  const [openJoinModal2, setOpenJoinModal2] = useState(false);
  const [email, setEmail] = useState("");
  const [features, setFeatures] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // ✅ Added

  useEffect(() => {
    setIsMounted(true); // ✅ Only render <Select> after client hydration
  }, []);

  const options = [
    { value: "Financial Education", label: "Financial Education" },
    { value: "Stock Screener", label: "Stock Screener" },
    { value: "Investment Strategy builder", label: "Investment Strategy builder" },
    { value: "Investor Community", label: "Investor Community" },
    { value: "AI Coach", label: "AI Coach" },
  ];

    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedFeatures = features.map((f) => f.value);

      if (!email.trim()) {
        alert("Please enter your email.");
        return;
      }

      if (selectedFeatures.length === 0) {
        alert("Please select at least one feature.");
        return;
      }

      console.log("Email:", email);
      console.log("Selected Features:", selectedFeatures);

      const joinModalEl = document.getElementById("joinModal");
      if (joinModalEl) {
        const modalInstance = window.bootstrap.Modal.getInstance(joinModalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      const confirmModalEl = document.getElementById("joinModalConfirm");
      if (confirmModalEl) {
        const bootstrapModal = new window.bootstrap.Modal(confirmModalEl);
        bootstrapModal.show();
      }

      // Optional: also set state to show <JoinWaitlist2 />
      setOpenJoinModal2(true);
    };

    useEffect(() => {
      setIsMounted(true);

      const modalEl = document.getElementById("joinModal");

      const handleModalHidden = () => {
        setEmail("");
        setFeatures([]);
        setOpenJoinModal2(false);
      };

      if (modalEl) {
        modalEl.addEventListener("hidden.bs.modal", handleModalHidden);
      }

      return () => {
        if (modalEl) {
          modalEl.removeEventListener("hidden.bs.modal", handleModalHidden);
        }
      };
    }, []);


    const handleClose = () => {
      setOpenJoinModal2(false);
      setFeatures([]);
      setEmail("");

      const joinModalEl = document.getElementById("joinModal");
      if (joinModalEl) {
        const modalInstance = window.bootstrap.Modal.getInstance(joinModalEl);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    }

  return (
    <>
      <div
        onClick={() => openModal(true)}
        className="modal fade cmn-popwrp"
        id="joinModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="joinModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="cmn-pop-content-wrapper">
                <div className="cmn-pop-head">
                  <h2>Be first in line</h2>
                  <p>
                    Sign up to unlock early access, exclusive sneak-peeks, and
                    insider perks—zero spam, 100% good stuff.
                  </p>
                </div>

                <div className="cmn-pop-inr-content-wrp">
                  <div className="join-form-wrp">
                    <form onSubmit={handleSubmit}>
                      <div className="join-form">
                        <div className="input-grp">
                          <label>Email</label>
                          <input
                            type="email" value={email}
                            placeholder="you@email.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input-grp">
                          <p>optional question</p>
                          <label>What feature are you most interested in?</label>

                          {/* ✅ Client-only render for <Select /> */}
                          {isMounted && (
                            <Select
                              isMulti
                              options={options}
                              value={features}
                              onChange={setFeatures}
                              className="react-select-container"
                              classNamePrefix="react-select"
                              placeholder="Features"
                            />
                          )}

                        </div>

                        <div className="btn-wrp">
                          <button
                            type="button"
                            // data-bs-dismiss="modal"
                            // aria-label="Close"
                            className="cmn-btn"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="cmn-btn"
                            // data-bs-target="#joinModalConfirm"
                            // data-bs-toggle="modal"
                          >
                            Join the waitlist
                          </button>
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

      <JoinWaitlist2 openModal2={setOpenJoinModal2} />
    </>
  );
};

export default JoinWaitList;

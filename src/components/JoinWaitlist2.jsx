"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import checkCircle from "@/assets/check-circle-theme.svg";
import Select from "react-select";

const JoinWaitlist2 = ({ openModal2 }) => {
  const [email, setEmail] = useState("");
  const [features, setFeatures] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // ✅ Added

  useEffect(() => {
    setIsMounted(true); // ✅ Only render <Select> after client hydration
  }, []);

  const options = [
    { value: "Financial Education", label: "Financial Education" },
    { value: "Stock Screener", label: "Stock Screener" },
    {
      value: "Investment Strategy builder",
      label: "Investment Strategy builder",
    },
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

    // ✅ Reset form
    setEmail("");
    setFeatures([]);

    // ✅ Close modal
    const confirmModalEl = document.getElementById("joinModalConfirm");
    if (confirmModalEl) {
      const modalInstance = window.bootstrap.Modal.getInstance(confirmModalEl);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };

  return (
    <>
      <div
        onClick={() => openModal2(true)}
        className="modal fade cmn-popwrp"
        id="joinModalConfirm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="joinModalConfirm"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="cmn-pop-content-wrapper">
                <div className="modal-icon">
                  <Image src={checkCircle} alt="Icon" />
                </div>
                <div className="cmn-pop-head">
                  <h2>Almost there!</h2>
                  <p>
                    We've sent a confirmation link to your inbox. Click it to
                    secure your spot—no confirmation, no sign-up.
                  </p>
                </div>

                <div className="cmn-pop-inr-content-wrp">
                  <div className="join-form-wrp">
                    <form onSubmit={handleSubmit}>
                      <div className="join-form">
                        <p className="note-txt">
                          Didn't see it? Re-enter your email below:
                        </p>
                        <div className="input-grp">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input-grp">
                          <p>optional question</p>
                          <label>
                            What feature are you most interested in?
                          </label>
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
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            className="cmn-btn"
                          >
                            Cancel
                          </button>
                          <button type="submit" className="cmn-btn">
                            Join
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
    </>
  );
};

export default JoinWaitlist2;

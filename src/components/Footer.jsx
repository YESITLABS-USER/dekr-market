import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <footer>
            <div className="container">
                <div className="footer-inr">
                    <div className="ftr-title-text">Have questions or feedback? Reach us at <a href="mailto:support@dekr.io">support@dekr.io</a></div>
                    <div className="ftr-widget">
                        <div className="copyright">&copy; 2025 Dekr, Inc. All rights reserved.</div>
                        <p>By joining our waitlist, you agree to receive occasional updates, product news, and insider tips. No spam—we promise.</p>
                        <div className="policy-links"><a href="#url">Privacy Policy</a> | <a href="#url"> Terms of Service</a></div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer

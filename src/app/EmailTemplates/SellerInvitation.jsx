import React from 'react';

function SellerInvitation({ name = "seller name", link = "https://sellora.com" }) {
  const currentYear = new Date().getFullYear();

  const styles = {
    emailContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#f4f6f8",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 0 10px rgba(0,0,0,0.05)",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    },
    emailHeader: {
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#004080",
      borderBottom: "1px solid #eaeaea",
    },
    logo: {
      maxHeight: "60px",
    },
    emailBody: {
      padding: "30px",
      color: "#333333",
    },
    heading: {
      marginTop: 0,
    },
    paragraph: {
      lineHeight: "1.6",
    },
    ctaButton: {
      display: "inline-block",
      backgroundColor: "#28a745",
      color: "#ffffff",
      padding: "12px 24px",
      marginTop: "20px",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    footer: {
      textAlign: "center",
      fontSize: "12px",
      color: "#888888",
      padding: "20px",
    },
    linkPara: {
      marginTop: "20px",
    },
    anchor: {
      color: "#004080",
      textDecoration: "underline",
      wordBreak: "break-word",
    },
  };

  return (
    <html lang="en">
      <body>
        <div style={styles.emailContainer}>
          <div style={styles.emailHeader}>
            <a href="https://sellora.com">
              <img
                src="https://sellora.com/front/assets/images/logo-01.png"
                alt="Sellora Logo"
                style={styles.logo}
              />
            </a>
          </div>

          <div style={styles.emailBody}>
            <h2 style={styles.heading}>Hello {name},</h2>
            <p style={styles.paragraph}>
              You've been invited to become a seller on <strong>sellora.com</strong> through our affiliate network!
            </p>
            <p style={styles.paragraph}>
              Join our platform and start listing your products to reach thousands of customers. Signing up is quick and easy.
            </p>
            <a target="_blank" rel="noreferrer" href={link} style={styles.ctaButton}>
              Register as a Seller
            </a>
            <p style={{ ...styles.paragraph, ...styles.linkPara }}>
              If the button doesn’t work, copy and paste this link into your browser:<br />
              <a target="_blank" rel="noreferrer" href={link} style={styles.anchor}>
                {link}
              </a>
            </p>
          </div>

          <div style={styles.footer}>
            &copy; {currentYear} Sellora.com. All rights reserved.<br />
            You were invited to join via our affiliate program.
          </div>
        </div>
      </body>
    </html>
  );
}

export default SellerInvitation;

import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Heading = styled.h2`
  font-size: 36px;
  color: #65ffe3;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  p {
    font-size: 18px;
    margin: 10px 0;
  }

  a {
    color: #4caf50;
    text-decoration: none;
  }

  a:hover {
    color: #45a049;
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Heading>Contact</Heading>
      <Paragraph>
        If you'd like to get in touch, please feel free to reach out through the
        following methods:
      </Paragraph>
      <ContactInfo>
        <p>
          Email:{" "}
          <a href="mailto:jagannathb082004@gmail.com">
            jagannathb082004@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+919346060936">9346060936</a>
        </p>
        <p>Location: Vizag, Andhra Pradesh</p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;

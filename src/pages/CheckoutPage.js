import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <div>
          <article>
            <h4>Hello, </h4>
            <p>Your total amount:</p>
            <p>Test Card Number: 4242 4242 4242 4242</p>
          </article>
        </div>
        <div>
          <button type="submit">Pay</button>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }

  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
`;
export default CheckoutPage;

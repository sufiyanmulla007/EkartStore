import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Checkout = () => {
const history = useNavigate();
const handleSubmit =(e)=>{
  e.preventDefault();
  history("/Final");
}
  return (
    <Wrapper>
    <div className='container'>
    <div>
    <h3>SHIOPPING DETAILS</h3>
   <form>
  <label for="H.No">H.No :</label>
  <input type="text"  name="H.No" required/>
  <label for="City">City :</label>
  <input type="text"  name="City" required/>
  <label for="number">Pin Code:</label>
  <input type="number"  name="number" required/>
  <label for="number">Phone No:</label>
  <input type="number"  name="Phone No" required/>
  {/* <label for="country">country:</label>
  <input type='country' name="country" required/> */}
 {/* <input type="submit" value="Submit"/> */}
  <button className='btn' onClick={handleSubmit}>Confim Order</button>
</form>
    </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h3 {
      font-size: 3.2rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin: 0 auto;
        padding: 30px;
      }
      
      label {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
      
      input[type="text"],
      input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      
      .btn {
        width: 100%;
        padding: 10px;
        color:white;
        font-size: 16px;
        background-color:blue;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
    
  }
`;
export default Checkout;

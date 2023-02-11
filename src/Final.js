import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';
import swal from 'sweetalert';
const Final = () => {
const order = useNavigate();
const handleSubmit =(e)=>{
  e.preventDefault();
  swal({
    title: "Are you sure?",
    text: "ORDER CONFIRMED!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your order succesfully place!", {
        icon: "success",
      });
    } else {
      swal("Your order succesfully place");
    }
  });
  order("/");
}
  return (
    <Wrapper>
    <div className='container'>
    <p>Payment Mode</p>
    <form>
    <div className='pay'>
    <label for="html">COD</label>
    <input type="radio" id="html" name="fav_language" value="HTML"/>
    </div>
    <div className='pay'>
    <label for="html">ONLINE</label>
    <input type="radio" id="html" name="fav_language" value="HTML"/>
    </div>
    <Button onClick={handleSubmit}>Place Order</Button>
    </form>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    p{
      font-size: 3.10rem;
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
        padding: 18rem;
      }
      .pay {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        border: none;
        background-color: gray;
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
export default Final;

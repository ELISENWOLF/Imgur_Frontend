import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

// export const ImageLogo = styled.div`
//     width:  100%;
//     position: relative;
//     left: -50px;

// `;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15,0.19);
`;

export const MutedLink = styled.a`
    font-size: 11px;
    text-align: center;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;

    &:hover {
        box-shadow: 2px 0px 0px rgba(200, 200, 200, 0.8);
    }

`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(241, 196, 15);
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input`
    width: 100%;
    color: white;    
    height: 42px;
    outline: none;
    border: 1px solid rgba(48, 47, 49, 0.3);
    padding: 0px 10px;
    background-color: rgb(48, 47, 47);
    transition: all 200ms ease-in-out;


&::placeholder {
    color: rgba(200,200, 200, 1);
}

&:not(:last-of-type) { 
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}

&:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196,15);
}

&:hover {
    box-shadow: 2px 0px 0px rgba(200, 200, 200, 0.8);
}

`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;  
  border: 2px solid transparent;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  font-size: 11px;
  background: linear-gradient(
    58deg, 
    rgba(241, 196, 15, 1) 20%, 
    rgba(243, 172, 18, 1) 100%
);

&:hover {
    filter: brightness(1.06);
    box-shadow: 1px 1px 3px black;
}

&:disabled {
    filter: contrast(1);
}
`;

export const FieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FieldError = styled.span`
    color: #b32e2e;
    font-size: 11px;
    min-height: 18px;
`;

export const FormSuccess = styled.span` 
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const FormError = styled.span` 
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;
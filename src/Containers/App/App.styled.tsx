import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const BodyContainer = styled.div`
  background: #e4edf2;
  padding 15px;
`;

export const Container = styled.div`
  padding 15px;
`;

export const Form = styled.form`
  width: 50%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  margin: auto;
  padding: 2rem;
  margin-top: -20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 24px;
  color: #758698;
  padding: 8px;
  border: solid 1px #e4edf2;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-size: 24px;
  color: #758698;
  min-width: 40%;
`;

export const EmiTitle = styled.h3`
  color: #251f20;
  font-size: 40px;
  text-align: center;
  margin: 3rem;
  font-weight: lighter;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  margin: 2rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px 0px;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TermName = styled.h3`
  font-size: 24px;
  font-weight: lighter;
  color: #758698;
  margin: 2rem;
`;

export const TermValue = styled.p`
  font-size: 24px;
  font-weight: lighter;
  color: #758698;
  margin: 2rem;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: lighter;
  color: #758698;
  text-align: center;
  margin: 0 0 30px;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
`;

export const Td = styled.td`
  text-align: left;
  border: 1px solid #ddd;
  padding: 12px;
`;

export const Th = styled.th`
  text-align: left;
  border: 1px solid #ddd;
  padding: 12px;
  border-bottom: 2px solid #dee2e6;
`;
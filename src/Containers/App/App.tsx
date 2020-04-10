import React, { useState, useEffect } from 'react';
import { calculateEmi, calculateMonthly } from '../../util/calculator';
import {
  BodyContainer,
  Form,
  FormInput,
  Label,
  FormGroup,
  EmiTitle,
  Card,
  CardWrap,
  TermName,
  TermValue,
  Wrap,
  CardTitle,
  Table,
  Th,
  Td,
} from './App.styled';
import PieChart from '../../Components/PieChart';
import Header from '../../Components/Header';
import './App.css';
import { IStatement } from './Types';

const App = () => {
  const [form, setForm] = useState({
    principal: 10000,
    rate: 10,
    tenure: 1,
  });
  const [loanTerms, setLoanTerms] = useState({
    emi: 0,
    interest: 0,
    totalPayable: 0,
  });

  const [statements, setStatements] = useState([] as IStatement[]);

  useEffect(() => {
    const { principal, rate, tenure } = form;
    let terms = calculateEmi(principal, rate, tenure);
    setLoanTerms(terms);
    let monthly = calculateMonthly(principal, rate, tenure, terms.emi);
    setStatements(monthly);
  }, [form]);

  const updateField = (e) => {
    const { name, value } = e.target;
    const parsed = parseInt(value);
    if (parsed) {
      setForm({
        ...form,
        [name]: parsed,
      });
    }
  };

  const renderForm = () => {
    return (
      <Form>
        <FormGroup>
          <Label>Loan Amount</Label>
          <FormInput name="principal" value={form.principal} onChange={updateField} data-testid="principalInput" />
        </FormGroup>
        <FormGroup>
          <Label>Interest Rate (%)</Label>
          <FormInput name="rate" value={form.rate} onChange={updateField} data-testid="rateInput" />
        </FormGroup>
        <FormGroup>
          <Label>Tenure (Years)</Label>
          <FormInput name="tenure" value={form.tenure} onChange={updateField} data-testid="tenureInput" />
        </FormGroup>
      </Form>
    );
  };

  const renderLoanDetails = () => {
    return (
      <Card>
        <Wrap>
          <TermName>Loan EMI</TermName>
          <TermValue>{Math.round(loanTerms.emi)}</TermValue>
        </Wrap>
        <Wrap>
          <TermName>Total Interest</TermName>
          <TermValue data-testid="interest">{loanTerms.interest}</TermValue>
        </Wrap>
        <Wrap>
          <TermName>Prinicipal</TermName>
          <TermValue data-testid="principal">{form.principal}</TermValue>
        </Wrap>
        <Wrap>
          <TermName>Total payable</TermName>
          <TermValue data-testid="payable">{loanTerms.totalPayable}</TermValue>
        </Wrap>
      </Card>
    );
  };

  const renderTable = () => {
    return (
      <Card>
        <Table>
          <thead>
            <tr>
              <Th>Month/Year</Th>
              <Th>Prinicipal</Th>
              <Th>Interest</Th>
              <Th>Balance</Th>
            </tr>
          </thead>
          <tbody>
            {statements &&
              statements.map((monthly, index) => {
                return (
                  <tr key={index}>
                    <Td>{monthly.date}</Td>
                    <Td>{Math.round(monthly.monthlyPrincipal)}</Td>
                    <Td>{Math.round(monthly.monthlyInterest)}</Td>
                    <Td>{Math.round(monthly.balance)}</Td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card>
    );
  };

  return (
    <>
      <Header />
      <BodyContainer>
        {renderForm()}
        <EmiTitle>
          Your Monthly Loan EMI: <span data-testid="emititle">{Math.round(loanTerms.emi)}</span>
        </EmiTitle>
        <CardWrap>
          {renderLoanDetails()}
          <Card>
            <CardTitle> Pie Chart</CardTitle>
            <PieChart interest={loanTerms.interest} totalPayable={loanTerms.totalPayable} />
          </Card>
        </CardWrap>
        {renderTable()}
      </BodyContainer>
    </>
  );
};

export default App;

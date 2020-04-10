import React, { Component } from 'react';

import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface PieChartProps {
  interest: number;
  totalPayable: number;
}

class PieChart extends Component<PieChartProps> {
  calculatePercentage = () => {
    const { totalPayable, interest } = this.props;
    let loanPercent: number = (interest / totalPayable) * 100;
    let interesetPercent = 100 - loanPercent;
    return [interesetPercent.toFixed(1), loanPercent.toFixed(1)];
  };

  render() {
    this.calculatePercentage();
    const options = {
      labels: ['Principla Loan Amount %', 'Total Interest %'],
      datasets: [
        {
          backgroundColor: ['#00A6B4', '#C9DE00'],
          hoverBackgroundColor: ['#003350', '#4B5000'],
          data: this.calculatePercentage(),
        },
      ],
    };
    return (
      <ChartContainer>
        <div>
          <Pie data={options} height={300} />
        </div>
      </ChartContainer>
    );
  }
}

export default PieChart;

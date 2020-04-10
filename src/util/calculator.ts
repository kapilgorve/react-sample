import { IStatement } from '../Containers/App/Types';

export function calculateEmi(principal, rate, tenure) {
  let totalMonths = tenure * 12;
  let monthlyInterestRatio = rate / 100 / 12;
  let top = Math.pow(1 + monthlyInterestRatio, totalMonths);
  let bottom = top - 1;
  let sp = top / bottom;
  let emi = principal * monthlyInterestRatio * sp;
  let totalPayable = totalMonths * emi;
  let interest = totalPayable - principal;

  return {
    emi: emi,
    interest: Math.round(interest),
    totalPayable: Math.round(totalPayable),
  };
}

export function calculateMonthly(principal, rate, tenure, emi) {
  let totalMonths = tenure * 12;
  let monthlyInterestRate = rate / 100 / 12;
  let monthly: IStatement[] = [];
  let balance = principal;
  let { currentMonth, currentYear } = startMonthYear();
  let date;
  for (let index = 0; index < totalMonths; index++) {
    let monthlyInterest = balance * monthlyInterestRate;
    let monthlyPrincipal = emi - monthlyInterest;
    balance = balance - monthlyPrincipal;
    if (currentMonth === 12) {
      currentMonth = 0; //reset month and year
      currentYear++;
    }
    date = `${Months[currentMonth]} ${currentYear}`;
    currentMonth++;
    monthly.push({ date, monthlyInterest, monthlyPrincipal, balance });
  }
  return monthly;
}

const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function startMonthYear() {
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  return { currentMonth, currentYear };
}

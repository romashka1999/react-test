// employer pays the compensation from the 4th to the 8th day of sick-leave
// The Estonian Health Insurance Fund pays from the 9th day
// The compensation rate is 70% of your monthly gross income.
// The maximum duration of one insurance event is 182 days, unless it’s tuberculosis. For tuberculosis it is up to 240 days.
export const calculateCompensation = (
  monthlyGrossIncome: number,
  totalSickDays: number,
  haveTuberculosis: boolean
) => {
  const INSURANCE_DAYS_WITHOUT_TUBERCULOSIS = 182;
  const INSURANCE_DAYS_WITH_TUBERCULOSIS = 240;

  const insuranceDays = haveTuberculosis
    ? INSURANCE_DAYS_WITH_TUBERCULOSIS
    : INSURANCE_DAYS_WITHOUT_TUBERCULOSIS;

  const monthDays = 30;
  const compensationRate = 0.7;
  const compensation = monthlyGrossIncome * compensationRate;
  const dailyAllowance = compensation / monthDays;

  let totalEmployerCompensationDays = 0;
  let totalEmployerCompensationPays = 0;
  let totalInsuranceCompensationDays = 0;
  let totalInsuranceCompensationPays = 0;

  // if (totalSickDays <= 3) we dont have any compensation
  if (totalSickDays >= 4) {
    let compensationDays = totalSickDays - 3;
    totalEmployerCompensationDays = Math.min(5, compensationDays);
    totalEmployerCompensationPays =
      dailyAllowance * totalEmployerCompensationDays;

    // rest days for insurance
    compensationDays -= 5;
    if (compensationDays > 0) {
      totalInsuranceCompensationDays = Math.min(
        insuranceDays,
        compensationDays
      );
      totalInsuranceCompensationPays =
        dailyAllowance * totalInsuranceCompensationDays;
    }
  }
  const total = totalEmployerCompensationPays + totalInsuranceCompensationPays;

  return {
    dailyAllowance: dailyAllowance.toFixed(2),
    totalEmployerCompensationDays,
    totalEmployerCompensationPays: totalEmployerCompensationPays.toFixed(2),
    totalInsuranceCompensationDays,
    totalInsuranceCompensationPays: totalInsuranceCompensationPays.toFixed(2),
    total: total.toFixed(2),
  };
};

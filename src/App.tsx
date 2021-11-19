import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { calculateCompensation } from "./utils/calculate-compensation.util";

const App = () => {
  const [income, setIncome] = useState(0);
  const [sickDays, setSickDays] = useState(0);
  const [employerCompensateDays, setEmployerCompensateDays] = useState(0);
  const [insuranceCompensateDayes, setInsuranceCompensateDayes] = useState(0);
  const [employerCompensation, setEmployerCompensation] = useState(0);
  const [insuranceCompensation, setInsuranceCompensation] = useState(0);
  const [totalCompensation, setTotalCompensation] = useState(0);
  const [dailyAllowance, setDailyAllowance] = useState(0);
  const [hasTuberculosis, sethasTuberculosis] = useState(false);

  const onCalculateClicked = () => {
    const ans = calculateCompensation(income, sickDays, hasTuberculosis);
    console.log(`ans`, ans);
    setEmployerCompensateDays(ans.totalEmployerCompensationDays);
    setEmployerCompensation(
      Number.parseFloat(ans.totalEmployerCompensationPays)
    );
    setInsuranceCompensateDayes(ans.totalInsuranceCompensationDays);
    setInsuranceCompensation(
      Number.parseFloat(ans.totalInsuranceCompensationPays)
    );
    setTotalCompensation(Number.parseFloat(ans.total));
    setDailyAllowance(Number.parseFloat(ans.dailyAllowance));
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-metalFrom to-metalTo">
      <div className="w-1080 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="w-660 lg:h-755 text-white mb-40 lg:mb-0">
          <section className="mb-10">
            <h1 className="font-bold text-heading1 mb-5">
              Quam Tristique Condimentum
            </h1>
            <p className="text-basicText">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
              <mark className="bg-transparent underline text-redTo cursor-pointer p-2">
                Curabitur blandit
              </mark>
              tempus porttitor. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Vestibulum id ligula porta felis euismod
              semper.
            </p>
          </section>

          <article>
            <div className="flex flex-col md:flex-row md:justify-between mb-5">
              <div className="w-380">
                <h2 className="font-bold text-heading2 mb-5">
                  Fringilla Euismod Adipiscing Ipsum
                </h2>
                <p className="text-basicText">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Maecenas faucibus mollis interdum.
                  Aenean lacinia bibendum nulla sed.
                </p>
              </div>
              <img src="" alt="" />
              <img
                src={`${process.env.PUBLIC_URL}/img/image.png`}
                alt="img"
                className="w-240 h-180"
              />
            </div>

            <div className="text-basicText flex flex-col items-end">
              <ul className="w-630 h-70 flex flex-col justify-between mb-10">
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Tellus Ullamcorper Inceptos
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Magna Condimentum
                </li>
              </ul>
              <ul className="w-600 h-70 flex flex-col justify-between mb-10">
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Mattis Tristique
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Pharetra Pellentesque Dapibus
                </li>
              </ul>
              <ul className="w-630 h-70 flex flex-col justify-between">
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Aenean Inceptos
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-1 bg-gradient-to-r from-redFrom to-redTo inline-block mr-2"></span>
                  Parturient Bibendum
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div className="w-320 lg:h-755 bg-white text-black px-5 py-24 cutCorner">
          <h2 className="font-bold text-heading3 mb-5">
            Compensation Calculator
          </h2>
          <Input
            inputId="avarageIncome"
            inputType="number"
            labelText="Average Income"
            className="mb-5"
            onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setIncome(Number.parseInt(e.target.value));
            }}
          />
          <Input
            inputId="daysOnSickLeave"
            inputType="number"
            labelText="Days on sick-leave"
            className="mb-5"
            onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setSickDays(Number.parseInt(e.target.value));
            }}
          />
          <div className="flex mb-5 items-center">
            <input
              type="checkbox"
              className="mr-3"
              value={"hasTuberculosis"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                sethasTuberculosis(e.target.checked);
              }}
            />
            <p>I have tubercolosis</p>
          </div>

          <Button
            buttonText={"Calculate"}
            onCLickHandler={onCalculateClicked}
            className="mb-5"
          />

          <div className="flex">
            <div>
              <p className="text-center text-14-15">The employer compensates</p>
              <p className="text-center mb-3 font-bold text-14-15">
                {employerCompensateDays} days
              </p>
              <p className="text-center font-bold text-18-20">
                {employerCompensation}€
              </p>
              <p className="text-center text-metalMiddle text-12-15">
                Daily allowance
              </p>
              <p className="text-center text-metalMiddle text-12-15">
                {dailyAllowance}€
              </p>
            </div>
            <div>
              <p className="text-center text-14-15">
                Health Insurance compensates
              </p>
              <p className="text-center mb-3 font-bold text-14-15">
                {insuranceCompensateDayes} days
              </p>
              <p className="text-center font-bold text-18-20">
                {insuranceCompensation}€
              </p>
              <p className="text-center text-metalMiddle text-12-15">
                Daily allowance
              </p>
              <p className="text-center text-metalMiddle text-12-15">
                {dailyAllowance}€
              </p>
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-14-15 text-center">
            Compensation total for 7 days (net)
          </p>
          <p className="font-bold text-24-30 text-center">
            {totalCompensation}€
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;

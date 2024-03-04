import React, { useState } from "react";
import "./HomePage.css";
import { useFormik } from "formik";

const HomePage = () => {
  const initialValues = {
    maritialStatu: "married",
    gender: "male",
    fiscalYear: "80/81",
    monthlySalary: "",
    noOfMonths: 12,
    totalSalary: "",
  };
  const [data, setData] = useState(initialValues);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setData({ ...data, [values.target.name]: values.target.value });
    },
  });
  // console.log("The data is", data);
  const handleDropdownChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleMonthlySalaryChange = (event) => {
    const monthlySalary = event.target.value;
    const totalSalary = monthlySalary * data.noOfMonths;
    setData({ ...data, monthlySalary, totalSalary });
  };
  const handleNoOfMonthsChange = (event) => {
    const noOfMonths = event.target.value;
    const totalSalary = data.monthlySalary * noOfMonths;
    setData({ ...data, noOfMonths, totalSalary });
  };
  return (
    <div className="container">
      <div className="text-3xl font-bold text-center p-4">
        NEPAL SALARY TAX CALCULATOR
      </div>
      <form>
        <div className="container-firstHead">
          <div>
            <label htmlFor="maritalStatus" className="container-label">
              Marital status :
            </label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              className="container-firstHead_Select"
              onChange={handleDropdownChange}
              value={data.maritalStatus}
            >
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="container-label">
              Gender :
            </label>
            <select
              name="gender"
              id="gender"
              className="container-firstHead_Select"
              onChange={handleDropdownChange}
              value={data.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="fiscalYear" className="container-label">
              Fiscal Year :
            </label>
            <select
              name="fiscalYear"
              id="fiscalYear"
              className="container-firstHead_Select"
              onChange={handleDropdownChange}
              value={data.fiscalYear}
            >
              <option value="80/81">2080/2081</option>
            </select>
          </div>
        </div>
        <div className="container-secondHead">
          <div>
            <label htmlFor="monthlySalary" className="container-label">
              Monthly Salary
            </label>
            <input
              id="monthlySalary"
              name="monthlySalary"
              type="number"
              onChange={(e) => {
                formik.handleChange(e);
                handleMonthlySalaryChange(e);
              }}
              value={formik.values.monthlySalary}
            />
          </div>
          <div></div>
          <div>
            <label htmlFor="totalMonths" className="container-label">
              No. of Months
            </label>
            <input
              id="totalMonths"
              name="totalMonths"
              type="number"
              onChange={(e) => {
                formik.handleChange(e);
                handleNoOfMonthsChange(e);
              }}
              value={data.noOfMonths}
            />
          </div>
        </div>
        <label htmlFor="email" className="container-label">
          Total Salary
        </label>

        <input
          id="totalSalary"
          name="totalSalary"
          type="number"
          value={data.totalSalary}
          readOnly
        />
      </form>
    </div>
  );
};
export default HomePage;

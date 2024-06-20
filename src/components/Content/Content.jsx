import React, { useContext } from "react";
import classes from "./Content.module.css";
import search from "../../assets/search.png";
import moreHorizontal from "../../assets/MOREHORIZONTAL.png";
import user from "../../assets/user.png";
import girl from "../../assets/girl.png";
import birth from "../../assets/birth.png";
import gender from "../../assets/gender.png";
import insure from "../../assets/insure.png";
import phone from "../../assets/phone.png";
import download from "../../assets/download.png";
import respiratory from "../../assets/respiratory.png";
import temperature from "../../assets/temperature.png";
import heart from "../../assets/Heart.png";
import { ReactComponent as Expand } from "../../assets/expand.svg";
import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { DataContext } from "../../context/DataContext";

const Content = () => {
  const { data: patients, findByName } = useContext(DataContext);

  const person = findByName("Jessica Taylor");
  const diagnostic = person?.diagnosis_history?.[4];

  // get data for chart
  const getMonthNumber = (monthName) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.indexOf(monthName) + 1;
  };

  const sortData = (data) => {
    return data?.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return getMonthNumber(a.month) - getMonthNumber(b.month);
    });
  };

  const sliceAndTransformData = (data) => {
    // Sort data by year and month
    const sortedData = sortData(data);
    // Get the first three items
    const slicedData = sortedData?.slice(0, -1);
    return slicedData?.map((item) => ({
      name: `${item.month}, ${item.year}`,
      systolic: item.blood_pressure.systolic.value,
      diastolic: item.blood_pressure.diastolic.value,
      amt: item.blood_pressure.systolic.value,
    }));
  };

  const transformedData = sliceAndTransformData(person?.diagnosis_history);

  return (
    <div className={classes.content}>
      <div className={classes.left}>
        <div className={classes.leftTop}>
          <h1>Patients</h1>
          <img src={search} alt="" />
        </div>
        <div className={classes.leftMain}>
          <div className={`${classes.MainWrap} ${classes.activePatient}`}>
            <div className={classes.userMain}>
              <img src={user} alt="" />
              <div className={classes.users}>
                <h1>Emily Williams</h1>
                <h2>Female, 18</h2>
              </div>
            </div>
            <img
              src={moreHorizontal}
              className={classes.optionsHorizon}
              alt=""
            />
          </div>
          {patients?.map((patient, index) => (
            <div className={classes.MainWrap} key={index}>
              <div className={classes.userMain}>
                <img src={patient?.profile_picture} alt="" />
                <div className={classes.users}>
                  <h1>{patient.name}</h1>
                  <h2>
                    {patient?.gender}, {patient?.age}
                  </h2>
                </div>
              </div>
              <img
                src={moreHorizontal}
                className={classes.optionsHorizon}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.mid}>
        <div className={classes.midTop}>
          <h1 className={classes.midTopText}>Diagnosis History</h1>
          <div className={classes.chartMain}>
            <div className={classes.chart}>
              <div className={classes.chartTitle}>
                <h1>Blood Tests</h1>
                <div className={classes.chartdate}>
                  <h2>Last 6 months</h2>
                  <Expand />
                </div>
              </div>
              <LineChart width={500} height={300} data={transformedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 220]} />
                <Tooltip />
                <Line type="monotone" dataKey="diastolic" stroke="#8C6FE6" />
                <Line type="monotone" dataKey="systolic" stroke="#E66FD2" />
              </LineChart>
            </div>
            <div className={classes.chartDetails}>
              <div className={classes.testResult}>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50px",
                    backgroundColor: "#E66FD2",
                  }}
                />
                Systolic
              </div>
              <h1>{diagnostic?.blood_pressure?.systolic?.value}</h1>
              <div className={classes.rate}>
                <ArrowUp />
                <h2>{diagnostic?.blood_pressure?.systolic.levels}</h2>
              </div>
              <hr className={classes.horizontalLine} />
              <div className={classes.testResult}>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50px",
                    backgroundColor: "#8C6FE6",
                  }}
                />
                Diastolic
              </div>
              <h1>{diagnostic?.blood_pressure?.diastolic.value}</h1>
              <div className={classes.rate}>
                <ArrowDown />
                <h2>{diagnostic?.blood_pressure?.diastolic.levels}</h2>
              </div>
            </div>
          </div>
          <div className={classes.historyBottom}>
            <div
              className={classes.colouredCard}
              style={{ backgroundColor: "#E0F3FA" }}
            >
              <img src={respiratory} alt="" />
              <h1>Respiratory Rate</h1>
              <h2>{diagnostic?.respiratory_rate?.value} bpm</h2>
              <div className={classes.ratingsArrow}>
                {diagnostic?.respiratory_rate?.levels ===
                "Lower than Average" ? (
                  <ArrowDown />
                ) : diagnostic?.respiratory_rate?.levels ===
                  "Normal" ? null : diagnostic?.respiratory_rate?.levels ===
                  "Higher than Average" ? (
                  <ArrowUp />
                ) : null}
                <h3>{diagnostic?.respiratory_rate?.levels}</h3>
              </div>
            </div>
            <div
              className={classes.colouredCard}
              style={{ backgroundColor: "#FFE6E9" }}
            >
              <img src={temperature} alt="" />
              <h1>Temperature</h1>
              <h2>{diagnostic?.temperature?.value}°F</h2>
              <div className={classes.ratingsArrow}>
                {diagnostic?.temperature?.levels === "Lower than Average" ? (
                  <ArrowDown />
                ) : diagnostic?.temperature?.levels ===
                  "Normal" ? null : diagnostic?.temperature?.levels ===
                  "Higher than Average" ? (
                  <ArrowUp />
                ) : null}
                <h3>{diagnostic?.temperature?.levels}</h3>
              </div>
            </div>
            <div
              className={classes.colouredCard}
              style={{ backgroundColor: "#FFE6F1" }}
            >
              <img src={heart} alt="" />
              <h1>Heart Rate</h1>
              <h2>{diagnostic?.heart_rate?.value} bpm</h2>
              <div className={classes.ratingsArrow}>
                {diagnostic?.heart_rate?.levels === "Lower than Average" ? (
                  <ArrowDown />
                ) : diagnostic?.heart_rate?.levels ===
                  "Normal" ? null : diagnostic?.heart_rate?.levels ===
                  "Higher than Average" ? (
                  <ArrowUp />
                ) : null}
                <h3>{diagnostic?.heart_rate?.levels}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.midBottom}>
          <div className={classes.bottomHeader}>
            <h1>Diagnostic List</h1>
          </div>
          <div className={classes.bottomTable}>
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <div style={{ paddingTop: "31px" }} />
              <tbody>
                {person?.diagnostic_list?.map((problem, index) => (
                  <tr key={index}>
                    <td>{problem.name}</td>
                    <td>{problem.description}</td>
                    <td>{problem.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightMain}>
          <div className={classes.rightTop}>
            <img src={girl} alt="" />
            <h1>Jessica Taylor</h1>
          </div>
          <div className={classes.userDetails}>
            <div className={classes.userInfo}>
              <img src={birth} alt="" />
              <div className={classes.userText}>
                <h1>Date of birth</h1>
                <h2>{person?.date_of_birth}</h2>
              </div>
            </div>
            <div className={classes.userInfo}>
              <img src={gender} alt="" />

              <div className={classes.userText}>
                <h1>Gender</h1>
                <h2>{person?.gender}</h2>
              </div>
            </div>
            <div className={classes.userInfo}>
              <img src={phone} alt="" />
              <div className={classes.userText}>
                <h1>Contact Info.</h1>
                <h2>{person?.phone_number}</h2>
              </div>
            </div>
            <div className={classes.userInfo}>
              <img src={phone} alt="" />

              <div className={classes.userText}>
                <h1>Emergency COntacts</h1>
                <h2>{person?.emergency_contact}</h2>
              </div>
            </div>
            <div className={classes.userInfo}>
              <img src={insure} alt="" />
              <div className={classes.userText}>
                <h1>Insurance Provider</h1>
                <h2>{person?.insurance_type}</h2>
              </div>
            </div>
            <div className={classes.btn}>
              <button>Show All Information</button>
            </div>
          </div>
        </div>
        <div className={classes.rightBottom}>
          <h1>Lab Results</h1>
          <div className={classes.testWrap}>
            {person?.lab_results?.map((results) => (
              <div className={classes.testCases}>
                <h2>{results}</h2>
                <img src={download} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

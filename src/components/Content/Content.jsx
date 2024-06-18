import React from 'react'
import classes from './Content.module.css'
import search from '../../assets/search.png'
import moreHorizontal from '../../assets/MOREHORIZONTAL.png'
import user from '../../assets/user.png'
import girl from '../../assets/girl.png'
import birth from '../../assets/birth.png'
import download from '../../assets/download.png'
import respiratory from '../../assets/respiratory.png'
import temperature from '../../assets/temperature.png'
import heart from '../../assets/Heart.png'
import { ReactComponent as Expand } from '../../assets/expand.svg'
import { ReactComponent as ArrowUp } from '../../assets/ArrowUp.svg'
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Content = () => {


    const data = [
        {
            name: 'Oct, 2023',
            systolic: 400,
            diastolic: 240,
            amt: 240,
        },
        {
            name: 'Nov, 2023',
            systolic: 300,
            diastolic: 139,
            amt: 221,
        },
        {
            name: 'Dec, 2023',
            systolic: 200,
            diastolic: 480,
            amt: 229,
        },
        {
            name: 'Jan, 2024',
            systolic: 278,
            diastolic: 390,
            amt: 200,
        },
        {
            name: 'Feb, 2024',
            systolic: 189,
            diastolic: 480,
            amt: 218,
        },
        {
            name: 'Mar, 2024',
            systolic: 239,
            diastolic: 380,
            amt: 250,
        },
    ];
    return (
        <div className={classes.content}>
            <div className={classes.left}>
                <div className={classes.leftTop}>
                    <h1>
                        Patients
                    </h1>
                    <img src={search} alt='' />
                </div>

                <div className={classes.leftMain}>
                    <div className={`${classes.MainWrap} ${classes.activePatient}`}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>

                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                    <div className={classes.MainWrap}>
                        <div className={classes.userMain}>
                            <img src={user} alt='' />
                            <div className={classes.users}>
                                <h1>
                                    Emily Williams
                                </h1>
                                <h2>
                                    Female, 18
                                </h2>
                            </div>
                        </div>
                        <img src={moreHorizontal} className={classes.optionsHorizon} alt='' />
                    </div>
                </div>
            </div>




            <div className={classes.mid}>
                <div className={classes.midTop}>
                    <h1 className={classes.midTopText}>
                        Diagnosis History
                    </h1>
                    <div className={classes.chartMain}>
                        <div className={classes.chart}>
                            <div className={classes.chartTitle}>
                                <h1>Blood Tests</h1>
                                <div className={classes.chartdate}>
                                    <h2>Last 6 months</h2>
                                    <Expand />
                                </div>

                            </div>

                            <LineChart width={450} height={270} data={data}
                            // margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={[0, 500]}  />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Line type="monotone" dataKey="diastolic" stroke="#8C6FE6" />
                                <Line type="monotone" dataKey="systolic" stroke="#E66FD2" />
                            </LineChart>
                        </div>
                        <div className={classes.chartDetails}>
                            <div className={classes.testResult}>
                                <div style={{width: '14px', height: '14px', borderRadius: '50px', backgroundColor: '#E66FD2'}} />
                                Systolic
                            </div>
                            <h1>160</h1>
                            <div className={classes.rate}>
                                <ArrowUp/>
                                <h2>Higher than Normal</h2>
                            </div>
                            <hr className={classes.horizontalLine}/>
                            <div className={classes.testResult}>
                                <div style={{width: '14px', height: '14px', borderRadius: '50px', backgroundColor: '#8C6FE6'}} />
                                Diastolic
                            </div>
                            <h1>78</h1>
                            <div className={classes.rate}>
                                <ArrowDown/>
                                <h2>Lower than Average</h2>
                            </div>
                        </div>
                    </div>
                    <div className={classes.historyBottom}>
                        <div className={classes.colouredCard} style={{ backgroundColor: '#E0F3FA' }}>
                            <img src={respiratory} alt='' />
                            <h1>Respiratory Rate</h1>
                            <h2>20 bpm</h2>
                            <h3>Normal</h3>
                        </div>
                        <div className={classes.colouredCard} style={{ backgroundColor: '#FFE6E9' }}>
                            <img src={temperature} alt='' />
                            <h1>Temperature</h1>
                            <h2>98.6°F</h2>
                            <h3>Normal</h3>
                        </div>
                        <div className={classes.colouredCard} style={{ backgroundColor: '#FFE6F1' }}>
                            <img src={heart} alt='' />
                            <h1>Heart Rate</h1>
                            <h2>78 bpm</h2>
                            <div>

                            </div>
                            <h3>Lower than Average</h3>
                        </div>
                    </div>

                </div>
                <div className={classes.midBottom}>
                    <div className={classes.bottomHeader}>
                        <h1>
                            Diagnostic List
                        </h1>
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
                            <div style={{ paddingTop: '31px' }} />
                            <tbody>
                                <tr>
                                    <td>Login Issue</td>
                                    <td>Users unable to login with correct credentials</td>
                                    <td>Open</td>
                                </tr>
                                <tr>
                                    <td>Payment Error</td>
                                    <td>Transactions fail for certain credit cards</td>
                                    <td>In Progress</td>
                                </tr>
                                <tr>
                                    <td>Page Load</td>
                                    <td>Homepage takes too long to load</td>
                                    <td>Resolved</td>
                                </tr>
                                <tr>
                                    <td>Page Load</td>
                                    <td>Homepage takes too long to load</td>
                                    <td>Resolved</td>
                                </tr>
                                <tr>
                                    <td>Page Load</td>
                                    <td>Homepage takes too long to load</td>
                                    <td>Resolved</td>
                                </tr>
                                <tr>
                                    <td>Page Load</td>
                                    <td>Homepage takes too long to load</td>
                                    <td>Resolved</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>




            <div className={classes.right}>
                <div className={classes.rightMain} >
                    <div className={classes.rightTop}>
                        <img src={girl} alt='' />
                        <h1>Jessica Taylor</h1>
                    </div>
                    <div className={classes.userDetails}>
                        <div className={classes.userInfo}>
                            <img src={birth} alt='' />

                            <div className={classes.userText}>
                                <h1>
                                    Date of birth
                                </h1>
                                <h2>
                                    Aug 26th, 1999
                                </h2>
                            </div>
                        </div>
                        <div className={classes.userInfo}>
                            <img src={birth} alt='' />

                            <div className={classes.userText}>
                                <h1>
                                    Date of birth
                                </h1>
                                <h2>
                                    Aug 26th, 1999
                                </h2>
                            </div>
                        </div>
                        <div className={classes.userInfo}>
                            <img src={birth} alt='' />

                            <div className={classes.userText}>
                                <h1>
                                    Date of birth
                                </h1>
                                <h2>
                                    Aug 26th, 1999
                                </h2>
                            </div>
                        </div>
                        <div className={classes.userInfo}>
                            <img src={birth} alt='' />

                            <div className={classes.userText}>
                                <h1>
                                    Date of birth
                                </h1>
                                <h2>
                                    Aug 26th, 1999
                                </h2>
                            </div>
                        </div>
                        <div className={classes.userInfo}>
                            <img src={birth} alt='' />

                            <div className={classes.userText}>
                                <h1>
                                    Date of birth
                                </h1>
                                <h2>
                                    Aug 26th, 1999
                                </h2>
                            </div>
                        </div>
                        <div className={classes.btn}>
                            <button>Show All Information</button>
                        </div>
                    </div>

                </div>
                <div className={classes.rightBottom}>

                    <h1>
                        Lab Results
                    </h1>
                    <div className={classes.testWrap}>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={`${classes.testCases} ${classes.active}`}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>
                        <div className={classes.testCases}>
                            <h2>
                                Urine Test
                            </h2>
                            <img src={download} alt='' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content

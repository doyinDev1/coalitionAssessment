import React from 'react'
import classes from './Navbar.module.css'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Overview } from '../../assets/home.svg';
import { ReactComponent as Patients } from '../../assets/patient.svg';
import { ReactComponent as Schedule } from '../../assets/schedule.svg';
import { ReactComponent as Message } from '../../assets/message.svg';
import { ReactComponent as Transactions } from '../../assets/transactions.svg';
import profile from '../../assets/profile.png'
import settings from '../../assets/settings.png'
import more from '../../assets/more.png'
const Navbar = () => {
    return (
        <div className={classes.navBar}>
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={classes.navlinks}>

                <ul>
                    <li>
                        <Overview />
                        Overview
                    </li>
                    <li>
                        <Patients />
                        Patients
                    </li>
                    <li className={classes.activelink}>
                        <Schedule />
                        Schedule
                    </li>
                    <li>
                        <Message />
                        Message
                    </li>
                    <li>
                        <Transactions />
                        Transactions
                    </li>
                </ul>
            </div>
            <div className={classes.profile}>
                <div className={classes.profileWrap}>
                    <img src={profile} alt='' />
                    <div className={classes.profileWrapped}>
                        <h1>
                            Dr. Jose Simmons
                        </h1>
                        <h2>
                            General Practitioner
                        </h2>
                    </div>
                    <div className={classes.profileRight}>
                    <img src={settings} alt='' />
                    <img src={more} alt='' />

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar

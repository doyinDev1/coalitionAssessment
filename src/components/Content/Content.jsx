import React from 'react'
import classes from './Content.module.css'
import search from '../../assets/search.png'
import moreHorizontal from '../../assets/MOREHORIZONTAL.png'
import user from '../../assets/user.png'
import girl from '../../assets/girl.png'
import birth from '../../assets/birth.png'

const Content = () => {
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
                2
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

                fdfdfdfdf
                </div>

            </div>
        </div>
    )
}

export default Content

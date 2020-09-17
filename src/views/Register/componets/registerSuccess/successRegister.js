import React from 'react';
import { Link } from 'react-router-dom';
import styles from './successRegister.module.scss';
import bg from '../../../../assets/img/logo_nexpg.png';
import successPage from '../../../../assets/img/undraw_done_a34v.svg';

const RegisterSuccess = () => (
    <div className={styles.success_container}>
        <div className={styles.register_logo_success}>
            <img src={bg} alt="logo" />
        </div>
        <div className={styles.container}>
            <div className={styles.success_image}>
                <img src={successPage} alt="success" />
            </div>
            <div className={styles.text}>
                <h1>Your Registration is successful.</h1>
                <p className={styles.text_para}>
                    Our team will review your registration data and get contact to you
<br />
                with a response as soon as fast within 3 days
                </p>
                <div className={styles.homeclick}>
                    <Link to="/"> Back to Mainpage</Link>
                </div>
                <div className={styles.account_info}>
                    <p>Already have an Account <span className={styles.special}> Login Here</span></p>
                </div>
            </div>

        </div>

    </div>

);

export default RegisterSuccess;

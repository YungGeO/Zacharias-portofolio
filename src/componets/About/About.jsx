import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";



export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Who I Am</h3>
                            <p>
                                I am George Zacharias
                            </p>
                            <p>
                                26 years-old living in greece
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>

                        <div className={styles.aboutItemText}>
                            <h3>Software Engineer</h3>
                            <p>
                                I Have a bachelor degree in computer science
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};
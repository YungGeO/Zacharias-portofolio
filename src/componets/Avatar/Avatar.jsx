import React from "react";
import styles from "./Avatar.module.css";
import { getImageUrl } from "../../utils";

export const Avatar = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm George</h1>
                <p className={styles.description}>
                    Hi, I am George, a junior software developer certainly looking for work.
                </p>

                {/* Button group container */}
                <div className={styles.buttonGroup}>
                    <a
                        className={styles.contactBtn}
                        href="mailto:zachariasg7@hotmail.gr"
                    >
                        Contact Me
                    </a>

                    <a
                        className={styles.contactBtn}
                        href="/Zacharias-portofolio/CV_Zacharias_Georgios.pdf"
                        download
                    >
                        Download English CV
                    </a>

                    <a
                        className={styles.contactBtn}
                        href="/Zacharias-portofolio/CV_Georgios_Zacharias.pdf"
                        download
                    >
                        Download Greek CV
                    </a>
                </div>
            </div>

            <img
                src={getImageUrl("avatar/me.jpeg")}
                alt="avatar photo"
                className={styles.avatarImg}
            />
        </section>
    );
};
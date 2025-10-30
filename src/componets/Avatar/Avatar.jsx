import React from "react";
import styles from "./Avatar.module.css";
import { getImageUrl } from "../../utils";



export const Avatar = () => {


    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, I'm George</h1>
                <p className={styles.description}>Hi i am George i am a junior software developer
                    certainly working on a full stack course from coursera.
                </p>
                <a className={styles.contactBtn}
                    href="mailto:zachariasg7@hotmail.gr">Contact Me
                </a>
            </div>
            <img src={getImageUrl("avatar/me.jpeg")}
                alt="avatar photo"
                className={styles.avatarImg}
            />

        </section>

    );
};
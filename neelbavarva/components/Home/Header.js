import { useEffect, useReducer, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home/Header.module.css'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import TwitterIcon from '../../public/icons/twitter.svg'
import GitHubIcon from '../../public/icons/github.svg'
import InstagramIcon from '../../public/icons/instagram.svg'
import DribbbleIcon from '../../public/icons/dribbble.svg'

export default function Header() {

    return (
        <div className={`${styles.header} ${styles.container}`}>
            <div className={styles.header_title}>
                Web and Android Developer creating thoughtful, intuitive interfaces.
            </div>
            <div className={styles.header_content}>
                <p>
                    Hi, I am Neel Bavarva, a final year electronics and 
                    communications engineering undergraduate pursuing my bachelor&apos;s 
                    degree from NIT Surat, India. Know more <Link href="/Main/About">About Me</Link>.
                </p>
                
                <p>
                    I am a self taught programmer. Through constant learning and creation, 
                    I produce aesthetic software to the highest standard.
                    I enjoy competing in hackathons and working on software projects.
                    I also like to work on my problem solving skills on <a href="https://leetcode.com/neelbavarva/" target="_blank" rel="noreferrer">Leetcode</a> and <a href="https://www.codechef.com/users/neelbavarva/" target="_blank" rel="noreferrer">CodeChef</a>.

                    Here&apos;s my <a href="https://drive.google.com/file/d/1oyi0gHekD9A7rUDXpGGzX2-RkawIIYFP/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>.
                </p>
            </div>

            <div className={styles.social_links}>
                <div>
                    <a href="https://twitter.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={TwitterIcon} />
                        </div>
                    </a>
                    <a href="https://twitter.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={InstagramIcon} />
                        </div>
                    </a>
                    <a href="https://twitter.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={DribbbleIcon} />
                        </div>
                    </a>
                    <a href="https://twitter.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={GitHubIcon} />
                        </div>
                    </a>
                </div>
                <div>
                    <button>
                        <a href="mailto:neelbavarva5@gmail.com">Email me</a>
                    </button>
                </div>
            </div>

            <hr className={styles.divider} />

        </div>
    )
}

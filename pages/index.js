import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FaGithub, FaTwitter, FaLinkedinIn, FaMediumM } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renato - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainWrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarItems}>
            <li>
              {' '}
              <a href="https://medium.com/@renatognunes" target="_blank" rel="noopener noreferrer">
                {' '}
                Articles
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:renatognunes@hotmail.com" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>
          <article className={styles.section}>
            <h1 className={styles.title}>Hi, I'm Renato 👋</h1>
            <p className={styles.description}>
              I'm a Full Stack Developer with experience in web development, testing, architecture design, technical specifications and project planning. For the past four years, I have been fortunate enough to work on many challenging projects and be part of some incredibly talented engineering teams.
            </p>
          </article>
          <article className={styles.section}>
            <h2 className={styles.headline}>Latest Articles</h2>
            <div className={styles.article}>
              <div>
                <h3 className={styles.headline2}>
                  From CSS Modules to Styled Components - for React Developers
                </h3>
                <span>
                  <a
                    href="https://medium.com/@renatognunes/styled-components-or-css-modules-for-react-developers-4eae5bf5cf25"
                    target="_blank"
                  >
                    Read →
                  </a>
                </span>
              </div>
              <p className={styles.description}>
                Using CSS Modules or Styled Components seems to have the same final result: styling the elements statically, but we often need to style the elements dynamically....
              </p>
            </div>
            <div className={styles.article}>
              <div>
                <h3 className={styles.headline2}>Ant Design + React for Beginners</h3>
                <span>
                  <a
                    href="https://medium.com/@renatognunes/ant-design-react-for-beginners-2ac4a1834ca2"
                    target="_blank"
                  >
                    Read →
                  </a>
                </span>
              </div>
              <p className={styles.description}>
                In this blog post, we’ll focus on Ant Design Components, which is what we’ll use for
                our React application.
              </p>
            </div>
            <div className={styles.article}>
              <div>
                <h3 className={styles.headline2}>Is React the new jQuery?</h3>
                <span>
                  <a
                    href="https://medium.com/@renatognunes/is-react-the-new-jquery-610daa96773"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read →
                  </a>
                </span>
              </div>
              <p className={styles.description}>
                If jQuery is dead, and React is the new jQuery, will React eventually follow the
                same path of its ancestor?
              </p>
            </div>
          </article>
          <article className={styles.section} id="projects">
            <h2 className={styles.headline}>Projects</h2>

            <div className={styles.grid}>
              <a
                href="https://www.fluxpanda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3 className={styles.headline2}>Live Stream Selling & Commerce Platform</h3>
                <p className={styles.description}>
                  Full Stack development of a complex live stream and commerce platform using the latest web development technologies and best practices.
                </p>
              </a>

              <a
                href="https://dev.decerp.coffeeinc.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3 className={styles.headline2}>Construction Management App</h3>
                <p className={styles.description}>
                  Leading Frontend development role for complex business applications in a demanding
                  startup environment.
                </p>
              </a>

              <a
                href="https://silly-blackwell-1b19de.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3 className={styles.headline2}>Realtime Chat Application</h3>
                <p className={styles.description}>
                  Create a chat room to interact with your friends in real time. Friends can join
                  the chat room by entering the same room name.
                </p>
              </a>

              <a
                href="https://www.teampoker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3 className={styles.headline2}>Dynamic Website with CMS</h3>
                <p className={styles.description}>
                  Leading end-to-end website development process using the JAMstack. Resulting in a
                  dynamic, and responsive website with an easily maintainable codebase.
                </p>
              </a>

              <a
                href="https://github.com/renatognunes/fullstack-application"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3 className={styles.headline2}>Full-Stack Application</h3>
                <p className={styles.description}>
                  A Courses Database System built with technologies such as React.js, Material UI,
                  Node.js, Express.js, SQLite.
                </p>
              </a>
            </div>
          </article>
        </main>
      </div>


      <footer className={styles.footer}>
        <ul>
          <li>
            <a href="https://github.com/renatognunes" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/renatognunes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@renatognunes" target="_blank" rel="noopener noreferrer">
              <FaMediumM />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/renatognunes" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <a href="mailto:renatognunes@hotmail.com" target="_blank" rel="noopener noreferrer">
          renatognunes@hotmail.com
        </a>
      </footer>
    </div>
  );
}

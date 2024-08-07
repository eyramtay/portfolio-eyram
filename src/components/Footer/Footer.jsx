import styles from "./FooterStyless.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Eyram Tay. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

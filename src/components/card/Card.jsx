import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.09.2023 – </span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
            <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, harum eaque illo praesentium nulla minus ullam quisquam qui libero quidem dolor soluta adipisci ratione, magni saepe, ipsum quam modi nobis!
        Asperiores ipsam.</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;

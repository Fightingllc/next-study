'use client'

import { useRouter } from "next/navigation";
import styles from "./styles/app.module.css"
export default function Home() {
  const router = useRouter();
  return (
    <>
    <div className="container">
      <h2 className="text-2xl font-bold">Home</h2>      
      <p className="text-gray-600">Welcome to Next.js!</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => router.push('/notes')}>
          <span className={styles.buttonText}>notes</span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
        </button>
      <span>&nbsp;</span>
        <button className={styles.button} onClick={() => router.push('/error')}>
          <span className={styles.buttonText}>404</span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
        </button>

        <span>&nbsp;</span>
        <button className={styles.button} onClick={() => router.push('/about')}>
          <span className={styles.buttonText}>about</span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
        </button>
      </div>
      </div>
    </>
  );
}

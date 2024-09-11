import styles from "./styles/app.module.css"
export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold">Home</h2>      
      <p className="text-gray-600">Welcome to Next.js!</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <span className={styles.buttonText}>Button</span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
          <span className={styles.blob}></span>
        </button>
      </div>
      
    </>
  );
}

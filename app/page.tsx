"use client";

import { useRouter } from "next/navigation";
import {
  Coldfusion as Collusion,
  Elixir,
  Fresh,
  Julia,
  Liquid,
  Pug,
  Pulumi,
} from "@react-symbols/icons";

import styles from "./styles/app.module.css";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <div className="flex justify-center m-6 mt-10">
          <Collusion width={128} height={128} />
          <div className="w-4"></div>

          <Julia width={128} height={128} />
          <div className="w-4"></div>

          <Fresh width={128} height={128} />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => router.push("/notes")}
          >
            <span className={styles.buttonText}>notes</span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
          </button>
          <div className="w-4"></div>
          <span>&nbsp;</span>
          <button
            className={styles.button}
            onClick={() => router.push("/error")}
          >
            <span className={styles.buttonText}>404</span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
          </button>
          <div className="w-4"></div>

          <span>&nbsp;</span>
          <button
            className={styles.button}
            onClick={() => router.push("/about")}
          >
            <span className={styles.buttonText}>about</span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
            <span className={styles.blob}></span>
          </button>
        </div>
        <div className="fixed bottom-0 left-0">
          <div className="flex justify-center m-6">
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
            <Pulumi width={60} height={60} />
            <Liquid width={60} height={60} />
            <Elixir width={60} height={60} />
          </div>
        </div>
      </div>
    </>
  );
}

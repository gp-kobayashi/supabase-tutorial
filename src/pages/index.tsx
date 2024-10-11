import Head from "next/head";
import TodoApp from "@/components/TodoApp";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <section>
           <TodoApp />         
        </section>
      </div>
    </>
  );
}

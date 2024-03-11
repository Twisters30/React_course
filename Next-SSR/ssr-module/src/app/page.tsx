import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
	    <div className="page-wrapper">
		    <h1>Home</h1>
		    <p>
			    Эта практическое задание поможет вам применить свои знания по
			    оптимизации загрузки страницы
		    </p>
	    </div>
    </main>
  );
}

import styles from "./loading.module.css"

export default function loading () {
	return (
		<div className={styles.loading}>
			<div></div>
			<div></div>
		</div>
	);
}
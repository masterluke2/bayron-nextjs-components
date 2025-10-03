import styles from '../styles/ProfileCard.module.css';

export default function ProfileCard({
  name = 'Your Name',
  age = 25,
  description = 'A short description about me.',
  imageUrl = 'https://picsum.photos/300',
}) {
  return (
    <section className={styles.card}>
      <img src={imageUrl} alt={`${name} portrait`} className={styles.avatar} />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.meta}>Age: {age}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </section>
  );
}

import styles from '../styles/ProfileCard.module.css';

export default function ProfileCard({
  name = 'Rain Secjadas',
  age = 20,
  description = 'I am Rain Secjadas. I am 19 years old. I’m a web developer who loves building clean UIs and learning new tools',
  imageUrl = 'https://picsum.photos/200',  
}) {
  return (
    <section className={styles.card} style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt={`${name}'s portrait`} className={styles.avatar} />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
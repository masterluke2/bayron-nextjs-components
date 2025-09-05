import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Footer from '../components/Footer';

const profile = {
  name: 'Luke Carlyle Bayron',
  age: 20,
  description: 'Passionate full-stack developer with a love for creating beautiful and functional web applications',
  imageUrl: 'https://picsum.photos/200/200',
  skills: ['JavaScript', 'React', 'Next.js'],
};

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
      <Header name={profile.name} />
      <ProfileCard
        name={profile.name}
        age={profile.age}
        description={profile.description}
        imageUrl={profile.imageUrl}
      />
      <SkillsList skills={profile.skills} />
      <Footer name={profile.name} />
    </main>
  );
}
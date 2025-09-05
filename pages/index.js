import Head from 'next/head';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Footer from '../components/Footer';

export default function Home() {
  const name = 'Rain Secjadas';  

  return (
    <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem', background: '#000', color: '#fff' }}>  {/* Dark background to match screenshot */}
      <Head>
        <title>My Profile</title>
      </Head>
      <Header name={name} />
      <ProfileCard
        name={name}
        age={19}
        description="I am Rain Secjadas. I am 19 years old. I’m a web developer who loves building clean UIs and learning new tools"
        imageUrl="https://picsum.photos/200"  // Placeholder; replace with a real image URL for the white circle in screenshot
      />
      <SkillsList skills={['React', 'NextJs']} />
      <Footer name={name} />
    </main>
  );
}
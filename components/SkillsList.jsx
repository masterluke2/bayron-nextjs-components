export default function SkillsList({ skills = ['JavaScript', 'React', 'Next.js'] }) {
  return (
    <section style={{ marginTop: '1.5rem' }}>
      <h3 style={{ marginBottom: 8 }}>My Skills</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8 }}>
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
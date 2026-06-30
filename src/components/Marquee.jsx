const items = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot',
  'PostgreSQL', 'React Native', 'Java', 'Python', 'Docker',
  'Firebase', 'Git', 'Figma', 'Tailwind',
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

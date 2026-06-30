import { useReveal } from '../../hooks/useReveal';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

import React, { ReactNode, useEffect, useRef, useState } from 'react';

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  eyebrow,
  title,
  description,
  children
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`proposal-section ${isVisible ? 'is-visible' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-shell">
        <div className="section-header">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
};

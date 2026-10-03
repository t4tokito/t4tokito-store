/** Real app logo — replaces the old emoji placeholders. */
export default function AppIcon({ app, size = 64, radius = 18, eager = false }) {
  return (
    <img
      src={app.icon}
      alt={app.iconAlt || `${app.name} app icon`}
      width={size}
      height={size}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        objectFit: 'cover',
        flexShrink: 0,
        display: 'block',
        background: '#000',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--line)',
      }}
    />
  );
}

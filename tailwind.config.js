module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'cyber-primary': 'var(--cyber-primary)',
        'cyber-secondary': 'var(--cyber-secondary)',
        'cyber-bg': 'var(--cyber-bg)',
        'cyber-surface': 'var(--cyber-surface)',
        'cyber-text': 'var(--cyber-text)',
        'cyber-accent': 'var(--cyber-accent)'
      },
      fontFamily: {
        'cyber': ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'glow': 'var(--glow-shadow)'
      }
    }
  },
  plugins: []
};
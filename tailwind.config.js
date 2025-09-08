/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1a2332',
        'primary-blue': '#2563eb',
        'teal': '#0891b2',
        'green': '#059669',
        'warm-gray': '#6b7280',
        'light-gray': '#f8fafc',
        'cream': '#fefcf3',
        'charcoal': '#374151',
        'soft-blue': '#e0f2fe',
        'gold': '#f59e0b',
        'uh-red': '#C8102E',
        'uh-red-dark': '#990000',
        'uh-black': '#1A1A1A',
        'uh-gray-700': '#4B5563',
        'uh-gray-200': '#E5E7EB',
        'uh-gray-50': '#F9FAFB',
        'uh-red': '#C8102E',
    'uh-black': '#1A1A1A',
    'uh-gray-100': '#E5E7EB',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        elegant: '0 10px 25px rgba(0,0,0,0.08)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
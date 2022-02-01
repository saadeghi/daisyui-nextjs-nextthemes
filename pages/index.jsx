import 'tailwindcss/tailwind.css'
import { useTheme } from 'next-themes'
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      The current theme is: {theme}
      <button className="btn" onClick={() => setTheme('light')}>Light Mode</button>
      <button className="btn" onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
export default function HomePage() {
  return (
    <>
      <ThemeChanger />
      <div className="p-10 bg-base-100 text-base-content">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>
    </>
  );
}


interface WidthDataList {
    id: String
}

const handleClick = () => {
  console.log('clicked');
}

export default function DarkModeToggle(props: any) {
  let darkMode = localStorage.getItem('darkMode');

    return (
      <button onClick={handleClick}> Dark </button>
  )}
  
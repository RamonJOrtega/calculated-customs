
const enableDarkMode = () => {
  document.body.classList.add('darkMode')

  localStorage.setItem('darkMode', 'ENABLED')
}
const disableDarkMode = () => {
  document.body.classList.remove('darkMode')

  localStorage.setItem('darkMode', 'DISABLED')
}
 
const handleClick = (darkMode: string | null) => {
  if (darkMode !=='ENABLED') {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
}


export default function DarkModeToggle(props: any) {
  let darkMode = localStorage.getItem('darkMode')


    return (
      <button onClick={()=> handleClick(darkMode) } > Dark </button>
    )
}
  
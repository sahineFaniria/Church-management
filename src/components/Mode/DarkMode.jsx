import React from 'react'
// import {NextUIProvider} from '@nextui-org/react'
// import {ThemeProvider as NextThemesProvider} from "next-themes";
// import {useTheme} from "next-themes";
import { useEffect, useState } from "react";



const DarkMode = () => {

  // const [mounted, setMounted] = useState(false)
  // const { theme, setTheme } = useTheme()

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if(!mounted) return null

  return (
    <div className=' h-svh' >
      <p className='text-center relative top-60 text-3xl font-bold'>Hello Sahine le developper en React js</p>
      {/* <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div> */}
    </div>
  )
}

export default DarkMode

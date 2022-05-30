import react, { useEffect } from 'react'
export function setState1() {
const [state, setState] = setState('')
  useEffect(() => {
    console.log('first')
  },[])

  useEffect(() => {
    console.log('second')
  },[state])
  return (
    <div>
      <h1>setState</h1>
    </div>
  )
}
import React from 'react'
import Test from './components/Test'
import { cookies } from 'next/headers'

export default function page() {
    const cookieStore = cookies()
    const test = cookieStore.get('test')
    
    console.log(test.value)
  return (
    <div>page
        <h1>Test</h1>
        <Test />
    </div>
  )
}

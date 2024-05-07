"use client"
import React from 'react'
import {setCookie, getCookie} from 'cookies-next'


export default function Test() {
    setCookie('test', 'nest')
    const test = getCookie('test')
    console.log(test)
  return (
    <div>Test</div>
  )
}

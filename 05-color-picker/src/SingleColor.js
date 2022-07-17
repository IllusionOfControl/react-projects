import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  const copyToClipboard = async () => {
    if (window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(hexValue);
      } catch (err) {
        console.error('Не удалось скопировать: ', err);
      }
    }
  }

  return (
    <article
      className={`color ${index < 10 ? 'color-dark' : 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        copyToClipboard();
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      <p className='alert'>{alert ? "copied to clipboard" : <>&nbsp;</>}</p>
    </article>
  )
}

export default SingleColor
import React from 'react'

export default function BoilingVeredict(props) {
  return (
    <div>The water is { props.temperature < 100 ? 'not' : '' } boiling</div>
  )
}
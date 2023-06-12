import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={className}>
      <div className='wrapper'>{children}</div>
    </section>
  )
}

export default Container

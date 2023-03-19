import React from 'react'
import { CoffeeCard } from './CoffeeCard'

const Shop = () => {
  return (
    <section className="bg-light-100">
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Our Collections
          </h1>
          <p className="text-light-grey text-sm mb-4">
            What would you like to sip today?
          </p>
        </div>
        <CoffeeCard />
      </section>
  )
}

export default Shop
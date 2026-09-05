

import React from 'react'
import services from '../data/Services.json'

const Services = () => {

  return (

    <div>

      {/* Our Services Section */}

      <div className="py-14 ">

        <h2 className="text-left text-2.5xl mb-4 text-gray-900">

          Our Services

        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 ">

          {services.map((service, index) => (

            <div

              key={index}

              className="flex flex-col items-center shadow-none rounded-lg hover:shadow-lg transition-shadow "

            >

              <img

                src={service.image}

                alt={service.title}

                className="w-full h-32 object-cover rounded-lg"

              />

              <div className="py-2 text-center">

                <p className="text-sm font-medium text-gray-700">

                  {service.title}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  )

}

export default Services


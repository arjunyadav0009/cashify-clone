// import React from 'react'
// import Sevices from '..data/sell.json'
// const Sell = () => {
//   return (
//     <div>


//         {/* Our Services Section */}

//       <div className="py-2">

//         <h2 className="text-left text-2.5xl mb-4 text-gray-900">

//           Sell Your Old Device Now

//         </h2>
  
//            {/* these are the map */}

//         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">

//           {services.map((service, index) => (

//             <div

//               key={index}

//               className="flex flex-col items-center shadow-none rounded-lg hover:shadow-lg transition-shadow"

//             >

//               <img

//                 src={service.image}

//                 alt={service.title}

//                 className=" w-full h-32 object-cover"

//               />

//               <div className="py-2 text-center">

//                 <p className="text-sm font-medium text-gray-700">

//                   {service.title}

//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//       </div>
//   )
// }

// export default Sell






import React from 'react'
import services from '../data/Sell.json'

const Sell = () => {

  return (

    <div>

      {/* Our Services Section */}

      <div className="py-2">

        <h2 className="text-left text-2.5xl mb-4 text-gray-900">

          Sell Your Old Device Now

        </h2>

        {/* these are the map */}

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">

          {services.map((service, index) => (

            <div
              key={index}
              className="flex flex-col items-center shadow-none rounded-lg hover:shadow-lg transition-shadow"
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

export default Sell



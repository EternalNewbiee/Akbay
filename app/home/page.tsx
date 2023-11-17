import Image from 'next/image'
// import './page.css'

import FeatureHeader from '@/components/FeatureHeader'
import Feature from '@/components/Feature'

export default function Home() {
  return (
    <div className="py-12 relative bg-emerald-800 ">
    <div
      className="absolute inset-0 bg-center bg-cover 	background-repeat: no-repeat"
      style={{ backgroundImage: "url(./images/home/featured.jpg)", 
               opacity: .1}}
    ></div>
    <div className="relative">
        <h2 className="text-white text-center text-base font-sans">Our events</h2>
        <h1 className="text-white text-center text-4xl font-sans font-bold">FEATURED CAMPAIGNS</h1>  
    </div>
    <div className="mx-auto max-w-7xl">
    <div className="relative grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 px-8">
          <Feature
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
            color = "black"
            image= "./images/home/featured.jpg"
          />  
           <Feature
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
            color="black"
            image= "./images/home/featured.jpg"
          />
           <Feature
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
            color="black"
            image= "./images/home/featured.jpg"
          />
        
        <div className=" rounded-t-lg rounded-l-lg h-96 flex flex-col justify-between p-6">
          <FeatureHeader
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
          />
           <FeatureHeader
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
          />
           <FeatureHeader
            date="17"
            month="NOV"
            title="Fundraising for James Ocampo"
            time="12:00am - 12:00pm"
            location="Cebu City, Philippines"
          />
        </div>
        </div>
      </div>
  </div>
  )
}

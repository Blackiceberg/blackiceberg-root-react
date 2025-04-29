import Header from "/components/Header";
import Entry from "/components/Entry";

export default function App() {
  return (
    <>
      <Header />
<main className="container">
      <Entry img={{
     src:"https://scrimba.com/links/travel-journal-japan-image-url", 
     alt:"Mount Fuji" 
    }} 
    title= "Mount Fuji"
    country= "Japan"
    googleMapsLink= "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
    dates= "12 Jan, 2021 - 24 Jan, 2021"
    text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
     />
       <Entry img={{
     src:"https://scrimba.com/links/travel-journal-australia-image-url", 
     alt:"Opera House" 
    }} 
    title= "Sydney Opera House"
    country= "Australia"
    googleMapsLink= "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36"
    dates= "27 May, 2021 - 8 Jun, 2021"
    text= "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
     />
       <Entry img={{
     src:"https://scrimba.com/links/travel-journal-japan-image-url", 
     alt:"Mount Fuji" 
    }} 
    title= "Mount Fuji"
    country= "Japan"
    googleMapsLink= "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
    dates= "12 Jan, 2021 - 24 Jan, 2021"
    text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
     />
  </main>
  </>
  )
}

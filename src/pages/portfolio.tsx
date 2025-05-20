import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Aurora from "@/components/Aurora";
import TiltedCard from "@/components/TiltedCard";



export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="  w-full h-screen overflow-hidden">
        <div className=" text-center ">
          <h1 className={`${title()} text-white text-center py-4`}>Portfolio</h1>
        </div>

       <div className=" relative grid grid-rows-2">
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <Aurora
          className="fixed top-0 left-0 w-screen h-screen z-10 "
          colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        </div>
        <div className="w-full h-full text-white grid grid-cols-3 gap-5 z-10">
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
  }
  onClick={() => window.open("https://design-orient-arcitect.vercel.app/", "_blank")}
/>

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>


          
         
    </div>
       </div>
        

        

        {/* Content */}
        
        
      </section>
    </DefaultLayout>

    
  );
}

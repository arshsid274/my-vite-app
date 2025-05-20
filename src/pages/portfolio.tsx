import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Aurora from "@/components/Aurora";
import TiltedCard from "@/components/TiltedCard";
import DesignOrientArcitect from "/src/assets/image.png";
import VaslAi from "/src/assets/Vaslai.png"



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
        <div className="w-full h-full text-white flex flex-col items-center md:grid md:grid-cols-3 gap-8 md:gap-5 z-10">
<TiltedCard
  imageSrc={DesignOrientArcitect}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
    className=""
  containerHeight="250px"
  containerWidth="300px"
  imageHeight="250px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="  tilted-card-demo-text">Design Orient Arcitect</p>
  }
  onClick={() => window.open("https://design-orient-arcitect.vercel.app/", "_blank")}
/>

<TiltedCard
  imageSrc={VaslAi}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
    className=""
  containerHeight="250px"
  containerWidth="300px"
  imageHeight="250px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="  tilted-card-demo-text">Kendrick Lamar - GNX</p>
  }
  onClick={() => window.open("https://vaslai-dashboard-collaboration.vercel.app/", "_blank")}
/>

<TiltedCard
  imageSrc={DesignOrientArcitect}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
    className=""
  containerHeight="250px"
  containerWidth="300px"
  imageHeight="250px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="  tilted-card-demo-text">Kendrick Lamar - GNX</p>
  }
  onClick={() => window.open("https://design-orient-arcitect.vercel.app/", "_blank")}
/>


          
         
    </div>
       </div>
        

        

        {/* Content */}
        
        
      </section>
    </DefaultLayout>

    
  );
}

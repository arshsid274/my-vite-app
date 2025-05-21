import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Aurora from "@/components/Aurora";
import TiltedCard from "@/components/TiltedCard";
import DesignOrientArcitect from "/src/assets/image.png";
import VaslAi from "/src/assets/Vaslai.png"



export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className=" relative w-full min-h-screen overflow-visible">
       

       <div className="  grid grid-rows-2">
        <div className="absolute top-0 left-0 w-screen h-screen ">
          <Aurora
          className="fixed top-0 left-0 w-screen h-full z-0 "
          colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        </div>
      </div>

       <div className="relative z-10 text-center py-6 ">
       <h1 className={`${title()} text-white text-center py-4`}>Portfolio</h1>
        </div>

       <div className="w-full h-full text-white flex flex-col items-center md:grid md:grid-cols-3 md:grid-rows-2 gap-8 md:gap-16 relative z-20">  
<TiltedCard
  imageSrc={DesignOrientArcitect}
  altText="Design Orient Arcitect"
  captionText="Design Orient Arcitect"
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
    <p className=" dark:text-white text-black bg-gradient-to-r from-[#00d8ff]  to-[#7cff67] text-2xl font-semibold tilted-card-demo-text rounded-lg px-2">Design Orient Arcitect</p>
  }
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
/>

<TiltedCard
  imageSrc={VaslAi}
  altText="Vaslai"
  captionText="Vaslai"
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
    <p className=" dark:text-white text-black bg-gradient-to-r from-[#00d8ff]  to-[#7cff67] text-2xl font-semibold tilted-card-demo-text rounded-lg px-2">Vaslai</p>
  }
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
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
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
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
    <p className="  tilted-card-demo-text">Design Orient Arcitect</p>
  }
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
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
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
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
  onClick={() => window.open("https://github.com/arshsid274", "_blank")}
/>


          
         
    </div>
        

        

        {/* Content */}
        
        
      </section>
    </DefaultLayout>

    
  );
}

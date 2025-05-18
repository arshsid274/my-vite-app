import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Aurora from "@/components/Aurora";
import CircularGallery from "@/components/CircularGallery";



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
<div style={{ height: '600px', position: 'relative'  }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>

<h1>hjvhjvvhjvjhvhjv</h1>
          
         
    </div>
       </div>
        

        

        {/* Content */}
        
        
      </section>
    </DefaultLayout>

    
  );
}

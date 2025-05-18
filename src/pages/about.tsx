import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FloatingPhone from "@/components/FloatingPhone";
import DecryptedText from "@/components/DecryptedText";
import { ShiftingDropDown } from "@/components/ShiftingDropDown";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="  ">
        <div className="w-full text-center ">
        <h1 className={`${title()} text-center `}>About Me</h1>


        

         <div className="grid  md:grid-cols-2 md:gap-9 py-4  " >
  <div className="">
    <FloatingPhone />
  </div>
  <div>
   <div className="px-4 md:px-0">
                  {/* Example 3: Animate on view (runs once) */}
               <div className="text-xl text-white font-bold py-12">
  
  

  <DecryptedText
text="I’m a passionate "
speed={100}
maxIterations={20}
characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|;:,.<>?/\\"
className="revealed text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold"
parentClassName="all-letters"
encryptedClassName="encrypted text-xl md:text-2xl lg:text-3xl text-[#40e6b9] font-bold"
/>




<DecryptedText
  text="Full Stack Developer"
  animateOn="view"
  revealDirection="center"
   className="revealed text-2xl md:text-3xl lg:text-4xl text-[#40e6b9] font-bold"
   encryptedClassName="encrypted text-2xl md:text-3xl lg:text-4xl text-[white] font-bold"
/>


<DecryptedText
text="with a sharp eye for design and a love  efficient code. From building responsive UIs to developing robust backend systems."
speed={100}
maxIterations={20}
characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|;:,.<>?/\\"
className="revealed text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold"
parentClassName="all-letters"
encryptedClassName="encrypted text-xl md:text-2xl lg:text-3xl text-[#40e6b9]   font-bold"
/>
<div className="flex items-center justify-center py-2">
<ShiftingDropDown/>
</div>


 
</div>

                </div>
  </div>
</div>

          
        </div>
      </section>
    </DefaultLayout>
  );
}

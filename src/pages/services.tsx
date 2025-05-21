import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import SpotlightCard from '@/components/SpotLightCard';




export default function services() {
  return (
    <DefaultLayout>
      <section className="">
        <div className="">
          <h1 className={title()}>Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 h-[200px] w-[200px] ">
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
 dwewfwf
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  feffwfw
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
wedwwfwf
</SpotlightCard>
          </div>
      
        </div>
      </section>
    </DefaultLayout>
  );
}

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import CircularGallery from "@/components/CircularGallery";


export default function services() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Services</h1>
          <div style={{ height: '600px', position: 'relative'  }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
        </div>
      </section>
    </DefaultLayout>
  );
}

import Consulta from "@/components/landing/consulta/Consulta";
import MaxWidthWrapper from "@/components/max-width-wrapper/MaxWidthWrapper";
import Testimonios from "@/components/testimonios/Testimonios";

export default async function page() {
  return (
    <div>
      <MaxWidthWrapper className={"max-w-7xl py-8"}>
        <Testimonios />
      </MaxWidthWrapper>
      <div className="mb-20">
        <Consulta />
      </div >
    </div>
  );
}

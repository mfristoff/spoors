import { Image } from "@/components/ui/image";

export default function ServiceMedia({ image }) {
  return (
    <section className="relative h-[320px] w-full overflow-hidden md:h-[460px]">
      <Image src={image} alt="" fittingType="fill" className="h-full w-full object-cover" />
    </section>
  );
}
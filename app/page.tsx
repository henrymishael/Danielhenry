import Bio from "@/components/bio";
import Footer from "@/components/navigations/footer";
import Works from "@/components/works";
import Image from "next/image";

export default function Home() {
  return (
    <main className='container flex flex-col gap-24'>
      <Bio />
      <Works />
    </main>
  );
}

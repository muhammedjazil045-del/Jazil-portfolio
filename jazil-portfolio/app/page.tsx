import { Nav, Hero, Showreel, Work, Services, About, Process, Contact } from "@/components/sections";
import { Cursor } from "@/components/ui";
export default function Page() {
  return (<><div className="grain" aria-hidden /><Cursor /><Nav />
    <main><Hero /><Showreel /><Work /><Services /><About /><Process /><Contact /></main></>);
}

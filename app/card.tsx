import * as React from "react"
import { TbEyeShare } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiNotepadBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="min-h-screen flex-col flex  items-center justify-between p-24">
      <CardHeader>

        {/* <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className=" pt-4 shadow-2xl rounded-lg max-w-sm w-full">
      <div className=" flex justify-centre items-center ">
        <Image className="flex items-center justify-centre w-52 rounded-lg" width={200} height={200} src="https://be10x.in/wp-content/uploads/2023/03/blue-professional-certificate-1024x724.png" alt="DEMO1" />
        <div className="px-5 ">
            <p className=" justify-center items-center flex py-2"><TbEyeShare />3 hrs ago</p>
            <p className=" py-2 items-center flex"><PiNotepadBold/>3</p>
            <p  className=" py-2 items-center flex"><TbCertificate/>3</p>
           



        </div>
        </div>
    
        <form>
          <div className="grid w-full items-center">
            <div className="">
                
                
              {/* <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" /> */}
            </div>
            {/* <div className="">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
                {/* </SelectContent>
              </Select>
            </div> */}
            <Label className="pb-5  text-lg" htmlFor="name">DEMO</Label>
            
          </div>
          <Label className="pb-2 text-sm" htmlFor="name">something</Label>
          <div className="pl-20 pt-1 bg-slate-500">
        <Button  className=" bg-slate-500 shadow-none hover:bg-gray-500">Edit Certificate <FaEdit/></Button>
        </div>
        
        <div className="pl-20 pt-3 bg-white">
        <Button className="bg-white text-black hover:bg-white shadow-none">< MdDelete/>Delete Certificate </Button>
        </div>
        </form>
      </CardContent>
      
      <CardFooter className=" " >
       
      </CardFooter>
    </Card>
  )
}

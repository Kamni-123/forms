
"use client";
import { CardWithForm } from "./card";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";



const formSchema = z
  .object({
    CertificateName : z.string(),
    Description: z.string(),
    X_coordinate: z.number(),
    Y_coordinate: z.number(), 
    SelectFeild: z.enum(["Male", "Female"]),
  })

.refine(
    (data) => {
      if (data.SelectFeild === "Male") {
        return "Male"; // Return "Male" if SelectField is Male
      } else {
        return "Female"; // Return "Female" for other cases
      }
    },
    {
      message: "SelectField must be either Male or Female",
      path: ["SelectField"],
    }
  );


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CertificateName: "",
      Description: "",
      X_coordinate: "",
      Y_coordinate: "",
      // SelectFeild: z.enum(["Male", "Female"]),
    },
  });

  // const accountType = form.watch("accountType");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className=" rounded-md">
    <CardWithForm/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <div className="max-w-lg w-full flex px-10 py-10 shadow-2xl rounded-3xl">
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-lg w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="CertificateName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Certificate Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Certificate name"
                      type="string"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
              control={form.control}
              name="Description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
              );
            }}
          />
          {/* {accountType === "company" && ( */}
            <FormField
              control={form.control}
              name="X_coordinate"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>X_coordinate</FormLabel>
                    <FormControl>
                      <Input placeholder="X_coordinate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          {/* )} */}
          <FormField
            control={form.control}
            name="Y_coordinate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Y_coordinate</FormLabel>
                  <FormControl>
                    <Input placeholder="Y_coordinate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="SelectField"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Select Field</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        </div>
      </Form>
    </main>
    </div>
  );
}

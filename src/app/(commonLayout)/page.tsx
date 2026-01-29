import { Hero } from "@/components/layout/hero1";
import Faq from "@/components/modules/home/faq";
import TutorCard from "@/components/modules/home/tutorCard";

import { tutorService } from "@/services/tutor.service";

import { Tutor } from "@/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowBigLeft, ArrowBigRight, TicketCheck } from "lucide-react";
import { Happy_Monkey } from "next/font/google";



export default async function Home() {

  const { data } = await tutorService.getTutor(
    {
      isFeatured: true
    },
    { cache: "no-store" }
  )



  return (
    <>
      <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black">
        <Hero />

      </div>

      <div className="container mx-auto">
        <p className="font-bold text-xl text-orange-400 mb-4 text-center">Our Team Experts</p>
        <h1 className="font-bold text-3xl text-center mb-8">Expert Mentors Guiding Your Growth</h1>
      </div>

      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          data?.map((tutor: Tutor) => (
            <TutorCard key={tutor.id} tutors={tutor} />
          ))
        }
      </div>


      {/* See How It Works */}
      <div className="container mx-auto mt-32">
        <p className="font-bold text-xl text-orange-400 mb-4 text-center">Booking Journey</p>
        <h1 className="font-bold text-3xl text-center mb-8">See How It Works</h1>
      </div>

      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 mt-16 gap-10">
        <div className="bg-stone-50 py-22 px-16 rounded-xl shadow-md">
          <div className="flex justify-between">

            <h1 className="text-2xl font-bold">Discover Mentors
            </h1>
            <span>
              <ArrowBigRight className="text-orange-400" />
            </span>
          </div>

          <p className="mt-4 text-md text-gray-600">Browse experts across career, tech, and personal development.</p>
        </div>
        <div className="bg-stone-50 py-22 px-16 rounded-xl shadow-md">
          <div className="flex justify-between">

            <h1 className="text-2xl font-bold">Book Your Session
            </h1>
            <span>
              <ArrowBigRight className="text-orange-400" />
            </span>
          </div>
          <p className="mt-4 text-md text-gray-600">Choose your mentor, pick a slot, and schedule instantly Session.</p>
        </div>
        <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
          <div className="flex justify-between">

            <h1 className="text-2xl font-bold">Get Guidance
            </h1>
            <span>
              <TicketCheck className="text-orange-400" />
            </span>
          </div>
          <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
        </div>
      </div>

      {/* category */}
      <div className="bg-black py-32 mt-32">
        <div className="container mx-auto ">
          <p className="font-bold text-xl text-orange-400 mb-4 text-center">Popular Categories</p>
          <h1 className="font-bold text-3xl text-white text-center mb-8">Explore Categories Designed for You</h1>
        </div>

        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-10">
          <div className="bg-stone-50 py-22 px-16 rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Discover Mentors
              </h1>
              <span>
                <ArrowBigRight className="text-orange-400" />
              </span>
            </div>

            <p className="mt-4 text-md text-gray-600">Browse experts across career, tech, and personal development.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16 rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Book Your Session
              </h1>
              <span>
                <ArrowBigRight className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Choose your mentor, pick a slot, and schedule instantly Session.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
          <div className="bg-stone-50 py-22 px-16  rounded-xl shadow-md">
            <div className="flex justify-between">

              <h1 className="text-2xl font-bold">Get Guidance
              </h1>
              <span>
                <TicketCheck className="text-orange-400" />
              </span>
            </div>
            <p className="mt-4 text-md text-gray-600">Join sessions tailored to your goals, challenges, and next steps.</p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="container mx-auto mt-32">

        <div className="container mx-auto">
          <p className="font-bold text-xl text-orange-400 mb-4 ">Your Questions are Answered</p>
          <h1 className="font-bold text-3xl mb-8">Frequently Asked Questions</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
          <div>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I find a mentor on this platform?</AccordionTrigger>
                <AccordionContent>
                  You can find mentors by browsing categories or using filters such as subject, hourly rate, and rating. Our search system helps you quickly discover mentors that match your learning needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do mentoring sessions work?</AccordionTrigger>
                <AccordionContent>
                  Once you book a mentor, the session will be conducted online through video calls or the agreed method. Session schedules are flexible and set based on mutual availability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">

                <AccordionTrigger>Are mentor ratings and reviews reliable?</AccordionTrigger>
                <AccordionContent>
                  Yes. All ratings and reviews are submitted by real students who have completed sessions with the mentor. This ensures transparency and helps you choose confidently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I join the platform as a mentor?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! If you have expertise in a subject, you can sign up as a mentor, create your profile, and start accepting bookings after approval.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>

          </div>
        </div>
      </div>


    </>
  );
}

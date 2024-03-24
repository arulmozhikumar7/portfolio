"use client";

import { PinContainer } from "./components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
      <div className="items-center justify-center w-full bg-black mt-9">
        <h1 className="p-4 text-3xl font-bold text-center text-white">
          MERN Stack Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-16 p-4 md:gap-1 md:grid-cols-3">
        <PinContainer
          title="Newsletter Prototype"
          href="https://newsletter-prototype-frontend.vercel.app"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="pb-2 text-base font-bold text-slate-100">
              Newsletter Prototype
            </h3>
            <div className="font-normal text-slate-500">
              A MERN stack web app with payment integration and email
              subscription for creating, subscribing to, and managing
              publications.
            </div>
            <a
              href="https://newsletter-prototype-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 w-full mt-4 font-bold text-center rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            >
              <img
                src="https://img.freepik.com/premium-photo/laptop-with-digital-splashes-mails_882954-29537.jpg?w=996"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
        </PinContainer>

        <PinContainer
          title="Expense Tracker"
          href="https://expense-tracker-psi-five-33.vercel.app"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="pb-2 text-base font-bold text-slate-100">
              Expense Tracker
            </h3>
            <div className="font-normal text-slate-500">
              A MERN stack web app for tracking personal expenses and viewing
              them in a chart.
            </div>
            <a
              href="https://expense-tracker-psi-five-33.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 w-full mt-4 font-bold text-center rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            >
              <img
                src="https://img.freepik.com/free-vector/tiny-people-preparing-invoice-computer-isolated-flat-illustration_74855-11116.jpg?w=826"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
        </PinContainer>

        <PinContainer
          title="Pizza Ordering Application"
          href="https://pizza-delivery-application-frontend.vercel.app/"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="pb-2 text-base font-bold text-slate-100">
              Pizza Ordering Application
            </h3>
            <div className="font-normal text-slate-500">
              A MERN stack web app for ordering pizza with user authentication ,
              inventory management and payment.
            </div>
            <a
              href="https://expense-tracker-psi-five-33.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 w-full mt-4 font-bold text-center rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            >
              <img
                src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?t=st=1710687556~exp=1710691156~hmac=6b48c7559aa92dcbfaff44d4bf2ee0639c90239f7e48aca5a1c25ffe53109492&w=826"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </a>
          </div>
        </PinContainer>
      </div>
    </>
  );
}

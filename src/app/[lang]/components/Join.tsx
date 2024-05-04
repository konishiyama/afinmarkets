"use client";

import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import getFirebaseInstance from "@/firebase/firebase";
import { useState } from "react";

interface JoinProps {
  join_props: {
    title1: string;
    titleBlue: string;
    title2: string;
    comment: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderOrg: string;
    placeholderMessage: string;
    submitButton: string;
  };
}

const Contact = ({ join_props }: JoinProps) => {
  const firebase = getFirebaseInstance();
  const [message, setMessage] = useState("");
  async function submitWaitingListForm(e: any) {
    e.preventDefault();
    const name: string = e.target[0].value;
    const email: string = e.target[1].value;
    console.log(email);
    const organization: string = e.target[2].value;
    const message: string = e.target[3].value;
    const res: any = await firebase.addWaitingList(
      name,
      email,
      organization,
      message
    );
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
    } else {
      setMessage("Something went wrong! Please try again");
    }
  }

  return (
    <Layout backgroundColor="bg-white">
      <SectionContainer section_title="Join">
        <div className="max-w-2xl mx-auto text-center">
          <div className="max-w-lg mb-8 mx-auto">
            <h2 className="mb-4 text-4xl font-bold font-heading">
              {join_props.title1}
              <span className="text-blue-500">{join_props.titleBlue}</span>
              {join_props.title2}
            </h2>
            <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn">
              {join_props.comment}
            </p>
          </div>
          <div>
            <form onSubmit={submitWaitingListForm}>
              <div className="mb-4">
                <input
                  required
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder={join_props.placeholderName}
                ></input>
              </div>
              <div className="mb-4">
                <input
                  required
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="email"
                  placeholder={join_props.placeholderEmail}
                ></input>
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                  type="text"
                  placeholder={join_props.placeholderOrg}
                ></input>
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                  placeholder={join_props.placeholderMessage}
                ></textarea>
              </div>
              <div className="flex w-full items-center">
                <button
                  className="w-full py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  {join_props.submitButton}
                </button>
              </div>
            </form>
          </div>
        </div>
        {message}
      </SectionContainer>
    </Layout>
  );
};

export default Contact;

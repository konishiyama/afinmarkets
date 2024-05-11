"use client";

import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import getFirebaseInstance from "@/firebase/firebase";
import { FormData } from "@/interfaces";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { JoinProps } from "@/interfaces";

const Join = ({ join_props }: JoinProps) => {
  // const firebase = getFirebaseInstance();
  const [modalTitle, setModalTitle] = useState(join_props.successfulModalTitle);
  const [modalComment, setModalComment] = useState(
    join_props.successfulModalComment
  );
  const [modalButton, setModalButton] = useState(
    join_props.successfulModalButton
  );
  const [signUpResult, setSignUpResult] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  // form data handling reference
  // https://codewithmarish.com/post/how-to-create-a-contact-form-in-nextjs-and-firebase
  async function submitWaitingListForm(e: any) {
    e.preventDefault();
    const formData: FormData = {
      name: e.target[0].value,
      email: e.target[1].value,
      organization: e.target[2].value,
      message: e.target[3].value,
    };
    // const res: boolean = await firebase.addWaitingList(formData);
    // if (res) {
    //   setModalTitle(join_props.successfulModalTitle);
    //   setModalComment(join_props.successfulModalComment);
    //   setModalButton(join_props.successfulModalButton);
    //   setSignUpResult(true);
    //   setModalOpen(true);
    // } else {
    //   setModalTitle(join_props.errorModalTitle);
    //   setModalComment(join_props.errorModalComment);
    //   setModalButton(join_props.errorModalButton);
    //   setSignUpResult(false);
    //   setModalOpen(true);
    // }
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
        {/* modal shown at wainting list submit*/}
        <Transition appear show={modalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {modalTitle}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{modalComment}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className={`inline-flex justify-center rounded-md border border-transparent ${
                          signUpResult
                            ? "bg-blue-100 text-blue-900 hover:bg-blue-200"
                            : "bg-red-100 text-red-900 hover:bg-red-200"
                        } px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                        onClick={closeModal}
                      >
                        {modalButton}
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </SectionContainer>
    </Layout>
  );
};

export default Join;

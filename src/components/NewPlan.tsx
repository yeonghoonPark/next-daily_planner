"use client";

import { useState } from "react";
import CreateNewPlan from "./CreateNewPlan";
import CreateNewPlanModal from "./CreateNewPlanModal";
import BaseBtn from "./ui/BaseBtn";
import ModalPortal from "./ui/ModalPortal";

export default function NewPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='flex justify-center'>
      <BaseBtn text='Create New Plan' onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <ModalPortal>
          <CreateNewPlanModal onClose={() => setIsModalOpen(false)}>
            <CreateNewPlan />
          </CreateNewPlanModal>
        </ModalPortal>
      )}
    </section>
  );
}

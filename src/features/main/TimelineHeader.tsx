import AddIcon from "../../icons/AddIcon";
import ArchiveUpIcon from "../../icons/ArchiveUpIcon";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import { useState } from "react";
import BillIcon from "../../icons/BillIcon";
import AddModal from "./AddModal";
import { AddModalType } from "../../types/types";

const TimelineHeader = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddMenu, setOpenAddMenu] = useState(false);
  const [modalType, setModalType] = useState<AddModalType>("self");

  const handleOpenModal = (type: AddModalType) => {
    setModalType(type);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleToggleAddMenu = () => {
    setOpenAddMenu((pre) => !pre);
  };

  return (
    <>
      <AddModal open={openModal} onCloseModal={handleCloseModal} type={modalType} />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center w-full h-8 bg-primary">
          <p className="text-gray-01 title-semi-18">Timeline</p>
        </div>

        <div className="flex justify-between px-6">
          <div className="flex items-center justify-center gap-2">
            <p>2024년 2월</p>
            <ArrowDownIcon />
          </div>

          <div className="relative">
            <div
              onClick={handleToggleAddMenu}
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
              <AddIcon />
              <p>추가하기</p>
            </div>

            {openAddMenu && (
              <ul className="absolute right-0 flex flex-col justify-center gap-2 px-2 py-2 shadow-md rounded-xl w-max bg-warm-gray-03">
                <li
                  className="flex items-center gap-2 p-2 cursor-pointer rounded-xl hover:bg-warm-gray-01 focus:bg-warm-gray-01 active:bg-warm-gray-01"
                  onClick={() => {
                    handleOpenModal("self");
                    handleToggleAddMenu();
                  }}
                >
                  <ArchiveUpIcon className="w-4 h-4" />
                  <p className="body-med-14">직접 등록하기</p>
                </li>

                <li
                  onClick={() => {
                    handleOpenModal("receipt");
                    handleToggleAddMenu();
                  }}
                  className="flex items-center gap-2 p-2 cursor-pointer rounded-xl hover:bg-warm-gray-01 focus:bg-warm-gray-01 active:bg-warm-gray-01"
                >
                  <BillIcon className="w-4 h-4" />
                  <p className="body-med-14">영수증 스캔하기</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineHeader;

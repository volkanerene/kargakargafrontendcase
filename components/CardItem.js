import React, { useState } from 'react';
import Image from 'next/image';
import {
  PlusIcon,
  ChatAlt2Icon,
  PaperClipIcon,
} from '@heroicons/react/outline';
import { Draggable } from 'react-beautiful-dnd';
import Modal from './Modal';

function CardItem({ data, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Draggable index={index} draggableId={data.id.toString()}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-white rounded-md p-3 m-3 mt-0 last:mb-0 cursor-pointer"
            onClick={openModal}
          >
            <label
              className={`
                px-2 py-1 rounded text-black text-sm
                ${
                  data.priority === 0
                    ? 'from-blue-600 to-blue-400'
                    : data.priority === 1
                    ? 'from-green-600 to-green-400'
                    : 'from-red-600 to-red-400'
                }
                `}
            >
              {data.priority === 0
                ? 'Operasyon Birimi'
                : data.priority === 1
                ? 'Teknik Birim'
                : 'Test ve Onay Birimi'}
            </label>
            <h5 className="text-md my-3 text-lg leading-6">{data.title}</h5>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                <span className="flex space-x-1 items-center">
                  <ChatAlt2Icon className="w-4 h-4 text-gray-500" />
                  <span>{data.chat}</span>
                </span>
                <span className="flex space-x-1 items-center">
                  <PaperClipIcon className="w-4 h-4 text-gray-500" />
                  <span>{data.attachment}</span>
                </span>
              </div>

              <ul className="flex space-x-3">
                {data.assignees.map((ass, index) => (
                  <li key={index}>
                    <Image
                      src={ass.avt}
                      width="36"
                      height="36"
                      objectFit="cover"
                      className="rounded-full"
                      alt="Assignee Avatar"
                    />
                  </li>
                ))}
                <li className="relative">
                  <button
                    className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                      rounded-full relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <PlusIcon className="w-5 h-5 text-gray-500" />
                    {isHovered && (
                      <span className="absolute top-0 left-0 mt-10 text-xs bg-gray-200 text-gray-700 p-1 rounded">
                        Add
                      </span>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Draggable>

      <Modal isOpen={isModalOpen} onClose={closeModal} task={data} />
    </>
  );
}

export default CardItem;

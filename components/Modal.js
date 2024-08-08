import React, { useState } from 'react';
import {Calendar} from "@nextui-org/calendar";
import {
    PlusIcon,
  } from '@heroicons/react/outline';
const Modal = ({ isOpen, onClose, task }) => {
  const [activeTab, setActiveTab] = useState('attachment');
  const [isHovered, setIsHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative flex">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="w-3/4 p-4">
        <div className="flex gap-x-4">
        <Calendar aria-label="Date (No Selection)" />
        </div>
          <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-semibold">Task Status</h4>
              <p>{task.status}</p>
            </div>
            <div>
              <h4 className="font-semibold">Assignment</h4>
              <div className="flex items-center">
                {task.assignees.map((ass, index) => (
                  <img
                    key={index}
                    src={ass.avt}
                    alt="Assignee Avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ))}
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
              </div>

            </div>
            <div>
              <h4 className="font-semibold">Priority</h4>
              <p>{task.priority}</p>
            </div>
          </div>
          <h4 className="font-semibold mb-2">Description</h4>
          <p>{task.description}</p>

          <div className="mt-4">
            <div className="flex mb-4">
              {['attachment', 'sub task', 'comment'].map((tab) => (
                <button
                  key={tab}
                  className={`p-2 ${
                    activeTab === tab ? 'border-b-2 border-blue-500' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div>
              {activeTab === 'attachment' && <p>Attachment</p>}
              {activeTab === 'sub task' && <p>Sub task</p>}
              {activeTab === 'comment' && <p>Comment</p>}
            </div>
          </div>
        </div>
        <div className="w-1/4 p-4 border-l">
          <h4 className="font-semibold mb-4">Activity</h4>
          <div>
            {task.activity.map((act, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm">{act}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

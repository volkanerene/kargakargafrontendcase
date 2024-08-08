import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
import BoardAdder from '../components/BoardAdder';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import BoardData from '../data/board-data.json';

const Home = () => {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);

  useEffect(() => {
    setReady(true);
  }, []);

  const handleAddBoard = (newBoard) => {
    setBoardData([...boardData, newBoard]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newBoardData = Array.from(boardData);
    const [removed] = newBoardData[source.droppableId].items.splice(source.index, 1);
    newBoardData[destination.droppableId].items.splice(destination.index, 0, removed);
    setBoardData(newBoardData);
  };

  return (
    <Layout>
      <div className="p-10 flex flex-col h-screen">
        <div className="flex flex-initial justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold text-gray-600">Frontend Case</h4>
          </div>
        </div>

        <div className="hidden md:block md:w-auto max-w-screen-xl mx-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-8 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 border border-gray-300 rounded-md shadow-md">
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-blue-700 font-bold bg-gray-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Boards</a>
            </li>
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">List</a>
            </li>
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</a>
            </li>
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</a>
            </li>
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</a>
            </li>
            <li className="md:border-r md:border-gray-300">
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Other</a>
            </li>
          </ul>
        </div>

        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="overflow-x-auto">
              <div className="flex flex-nowrap gap-5 my-5">
                {boardData.map((board, bIndex) => (
                  <div key={board.name} className="flex-shrink-0 w-80">
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-100 rounded-md shadow-md
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-100"}`}
                          >
                            <h4 className="p-3 flex justify-between items-center mb-2">
                              <span className="text-2xl text-gray-600">
                                {board.name}
                              </span>
                              <div className="flex">
                                <FaPlus className="w-5 h-5 text-gray-500" />
                                <HiOutlineDotsCircleHorizontal className="w-5 h-5 text-gray-500" />
                              </div>
                            </h4>

                            <div
                              className="overflow-y-auto overflow-x-hidden h-auto"
                              style={{ maxHeight: 'calc(100vh - 290px)' }}
                            >
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => (
                                  <CardItem
                                    key={item.id}
                                    data={item}
                                    index={iIndex}
                                    className="m-3"
                                  />
                                ))}
                              {provided.placeholder}
                            </div>
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                ))}
                <div className="flex-shrink-0 w-80">
                  <BoardAdder onAdd={handleAddBoard} />
                </div>
              </div>
            </div>
          </DragDropContext>
        )}
      </div>
    </Layout>
  );
};

export default Home;

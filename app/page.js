"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  let renderTask = "No task Avaliable";

 if(mainTask.length > 0) {
  renderTask = mainTask.map((t, i) => {
    return (
      <>
        <li key={i} className="flex items-center justify-between">
          <div  className="flex text-bold items-center justify-between w-2/3">
            <h5 className="text-xl font-bold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }} className="bg-blue-600 border-[1px] border-solid border-black rounded px-4 py-2 font-bold text-white"> Delete</button>
        </li>
      </>
    );
  });
 }

  return (
    <>
      <h1 className="bg-black text-white text-5xl font-bold text-center p-5">
        Prashant Dewan Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter description "
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white font-bold rounded px-4 py-2 text-xl m-5">
          Add Task
        </button>
      </form>

      <hr />
      <div className=" p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;

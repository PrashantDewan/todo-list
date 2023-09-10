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

  let renderTask = "No task Avaliable";

  renderTask = mainTask.map((t, i) => {
    return (
      <>
        <div key={i} className="flex text-bold gap-4">
          <h5>{t.title}</h5>
          <h6>{t.desc}</h6>
        </div>
      </>
    );
  });

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

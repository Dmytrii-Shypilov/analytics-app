"use client";

import { ChangeEvent, useState, useRef } from "react";
import TickIcon from "@/components/icons/TickIcon";
import UploadIcon from "@/components/icons/UploadIcon";
import DataTable from "@/components/DataTable/DataTable";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState(null)
  const input = useRef<HTMLInputElement>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log(e.target.files)
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      const data = JSON.parse(result)
      setFile(null)
      setResult(data)
      console.log(data);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex" onSubmit={onSubmit}>
        <div className="flex items-center justify-center w-[200px] h-[50px] p-[10px] border-2 border-dashed rounded-md">
          <input
            className="w-0 h-0"
            onChange={handleFile}
            ref={input}
            type="file"
          />
          {file ? (
            <TickIcon />
          ) : (
            <UploadIcon
              className="cursor-pointer hover:fill-red-500"
              onClick={() => input.current?.click()}
            />
          )}
          {file && <p>{file.name}</p>}
        </div>

        <button type="submit">send</button>
      </form>
      {result && <DataTable data={result} name={'Data'}/>}
    </main>
  );
}

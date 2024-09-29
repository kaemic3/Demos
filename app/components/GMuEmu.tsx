import { useEffect } from "react";


export default function GMuEmu() {
  const wasm = async () => {
    if(!document.getElementById("GMu"))
    {
      const script = document.createElement("script");
      script.src = "GMu.js";
      script.async = true;
      script.id = "GMu";

      document.body.appendChild(script);
      script.onload = async () => {
        // @ts-ignore
        window.Module = await Module({canvas: document.getElementById("canvas")});
      }
    }
  }
  useEffect( () => {
    wasm();
  }, []);
  return (
    <canvas className="pb-20" id="canvas" onContextMenu={ (event) => event.preventDefault() } tabIndex={-1}></canvas>
  );
}
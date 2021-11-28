export const importD3Lib = () =>
  new Promise((res) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js";
    script.onload = () => res();
    script.id = "d3-script";
    document.body.append(script);
  });

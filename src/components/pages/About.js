import { React, useState ,useEffect,useRef} from 'react';
import { Button, Popover} from 'antd';



const About = () =>{

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const ref = useRef();
  const ytref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  const clickContent = (
    <div ref={ref}>
      <iframe
        ref={ytref}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8bTLgYiAbyM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <iframe ref={ytref} width="560" height="315" src="https://www.youtube.com/embed/-8vwHjjV_IM?start=10" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}
      <button onClick={hide}>Close</button>
    </div>
  );
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("click", listener, true);
      return () => {
        document.removeEventListener("click", listener, true);
      };
    }, [ref, handler]);
  }
  return (
    <div>
 {/* <Button onClick={() => open === true ? useOnClickOutside : handleOpenChange()}>Open Popover</Button>   */}
  <Button onClick={() => setOpen(!open)}>Open Popover</Button>  
     {/* { open && ( */}
        <Popover
          content={clickContent}
          title="Title"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}>
           {/* <Button onClick={() => setOpen(!open)}>Open Popover</Button>   */}

        </Popover>
   
    </div>
  );
};
export default About

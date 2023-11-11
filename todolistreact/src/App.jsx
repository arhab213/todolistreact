import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [memo, setmemo] = useState([]);
  let Tmp = [...memo];
  let reference = useRef();
  let refEdit = useRef();
  let [edit, setedit] = useState(false);
  let [cancel, setcancel] = useState(false);
  let input = document.getElementsByClassName("input");
  const Delete = (index) => {
    let tmp = [...memo];
    tmp.splice(index, 1);
    return setmemo(tmp);
  };
  const ChangesHandeller = (e) => {
    let { name, value } = e.target;
    let tmp = [...memo];
    tmp[name] = value;
    setmemo(tmp);
  };

  return (
    <>
      <input id="Input" ref={reference} type="text" />

      <button
        onClick={() => {
          setmemo([...memo, reference.current.value]);
        }}
      >
        Do it
      </button>

      {memo
        ? memo.map((e, i) => {
            return (
              <div>
                {edit ? (
                  <div>
                    <input
                      ref={refEdit}
                      name={i}
                      type="text"
                      defaultValue={e}
                      onChange={ChangesHandeller}
                    />
                    <button onClick={() => setedit(false)}>save</button>
                    <button
                      onClick={() => {
                        setedit(!edit);
                        setmemo(Tmp);
                      }}
                    >
                      cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <div>{e}</div>
                    <button
                      onClick={() => {
                        setedit(!edit);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => Delete(i)}>Delete</button>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </>
  );
}

export default App;

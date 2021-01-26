export const ButtonTypeButton = (props) => {
  return (
    <button className={props.className} id={props.id}>
      {props.name}
    </button>
  );
};

export const justConsoleIt = () => console.log("testing....");

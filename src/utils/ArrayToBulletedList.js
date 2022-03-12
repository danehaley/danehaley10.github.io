const ArrayToBulletedList = (arr) => {
  return (
    <ul>
      {arr.map((elm) => {
        return <li className="bullet" key={elm}>{`${elm}`}</li>;
      })}
    </ul>
  );
};

export default ArrayToBulletedList;

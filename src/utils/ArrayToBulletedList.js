const ArrayToBulletedList = (arr) => {
  return (
    <ul>
      {arr.map((elm) => {
        return <li className="tag" key={elm}>{`${elm}`}</li>;
      })}
    </ul>
  );
};

export default ArrayToBulletedList;

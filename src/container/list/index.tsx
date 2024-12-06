import { useState } from "react";
import Button from "../../component/Button";

const List = () => {
  const [value, setValue] = useState<any>([]);
  const [tempValue, setTempValue] = useState<String>("");

  const handleAdd = () => {
    setValue([...value, { value: tempValue, isMark: false }]);
    setTempValue("");
  };
  const handleDelete = (index: Number) => {
    const filterValue = value?.filter(
      (val: string | Number, indexItem: Number) => {
        return indexItem !== index;
      }
    );
    setValue([...filterValue]);
  };

  const handleMarkCompleted = (e, index: Number) => {
    const findValue = value?.find((val: string | Number, indexItem: Number) => {
      return indexItem === index;
    });
    const filterValue = value?.filter(
      (val: string | Number, indexItem: Number) => {
        return indexItem !== index;
      }
    );
    setValue([
      ...filterValue.slice(0, index),
      { value: findValue.value, isMark: e.target.checked },
      ...filterValue.slice(index),
    ]);
  };
  return (
    <>
      <Button
        onClick={() => handleAdd()}
        buttonLabel="Add Todo"
        buttonStyle="blue"
      />

      <input
        onChange={(e) => {
          setTempValue(e.target.value);
        }}
        value={tempValue}
      />
      {value?.map((val: string | number, index: number) => (
        <>
          <input
            type="checkbox"
            value={val?.value}
            onChange={(e) => handleMarkCompleted(e, index)}
          />
          <p>{val?.value}</p>
          <Button
            onClick={() => handleDelete(index)}
            buttonLabel="Delete Todo"
            buttonStyle="red"
          />
        </>
      ))}
    </>
  );
};

export default List;

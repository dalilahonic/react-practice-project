import { useState } from 'react';
import HeaderOptions from './HeaderOptions';
import Options from './Options';

function MainOptions({ options, onChecked }) {
  const [isOpenData, setIsOpenData] = useState([]);

  function onOpen(isOpen, index) {
    setIsOpenData((prev) => {
      const updatedData = [...prev];
      updatedData[index] = {
        ...updatedData[index],
        isOpen: isOpen,
        index: index,
      };

      return updatedData;
    });
  }

  function handleChecked(isChecked, price, name) {
    onChecked(isChecked, price, name);
  }

  return (
    <>
      {options?.map((optionData, index) => (
        <div key={index}>
          <HeaderOptions
            onOpen={onOpen}
            title={optionData.prompt}
            index={index}
          />
          {isOpenData[index]?.isOpen &&
            optionData.options.map((option, index) => (
              <Options
                onChecked={handleChecked}
                key={index}
                name={option.name}
                price={option.price}
              />
            ))}
        </div>
      ))}
    </>
  );
}

export default MainOptions;

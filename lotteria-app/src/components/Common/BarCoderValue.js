import { useBarcode } from '@createnextapp/react-barcode';

export default function BarCoderValue(props) {
  const value = props?.value
  const { inputRef } = useBarcode({
    value: value,
    options: {
      displayValue: false,
    }
  });
  console.log(inputRef, 'inputRef')

  return (
    <img ref={inputRef} width="100%" />
  )
}
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  // to have access to value of the input field

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) return onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;

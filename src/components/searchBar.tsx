import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchData, setSearchData] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchValue);
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${searchValue}`, {
      method: "GET",
    })
      .then((response) => {
        response.json().then((data) => {
          setSearchData(data?.title);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  };
  return (
    <Box>
      <Box component={"form"} onSubmit={onSubmit} sx={{ display: "flex" }}>
        <TextField
          required
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <LoadingButton loading={loading} variant="contained">
          Search
        </LoadingButton>
      </Box>
      <Box sx={{ mt: 2 }}>Result : {searchData ?? "N/A"}</Box>
    </Box>
  );
}

export default SearchBar;

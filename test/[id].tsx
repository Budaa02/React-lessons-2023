import { useEffect, useState } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { OutlinedInput, Stack } from "@mui/material";

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}
const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn",
];

const ProductEdit = (
  { data }: { data: any },
  { title, subtext }: registerType
) => {
  // const PRODUCT_LIST_URL = "http://localhost:8282/product/edit";
  const product = data[0];
  // console.log(product);
  const [editProduct, setEditProduct] = useState(product);
  const [selectedNames, setSelectedNames] = useState([""]);
  const currentColors = editProduct?.colors?.map((c: any) => {
    return c?.color;
  });
  const currentSize = editProduct?.sizes?.map((c: any) => {
    return c?.size;
  });

  /*========== Category =========*/

  interface IproductCategory {
    _id: any;
    catId: number;
    cat_name: string;
    cat_description: string;
    parent_category_id: number;
  }
  const PRODUCT_CATEGORY_URL = "http://localhost:8282/productcategory/list";
  const [category, setCategory] = useState<IproductCategory[]>([]);
  async function fetchCategory(url: string): Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCategory(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchCategory(PRODUCT_CATEGORY_URL);
  }, []);

  /*========= Color =========*/
  interface Icolor {
    _id: any;
    itemId: number;
    color: [string];
  }
  const COLOR_URL = "http://localhost:8282/color/list";

  const [color, setColor] = useState<Icolor[]>([]);
  // console.log(color);

  async function fetchRoles(url: string): Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setColor(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchRoles(COLOR_URL);
  }, []);

  /*========== Size ==========*/
  interface Isize {
    _id: any;
    itemId: number;
    size: string;
  }
  const SIZE_URL = "http://localhost:8282/size/list";
  const [size, setSize] = useState<Isize[]>([]);
  async function fetchSize(url: string) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setSize(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchSize(SIZE_URL);
  }, []);

  interface IBrand {
    _id: any;
    itemId: number;
    brand: string;
  }
  const BRAND_URL = "http://localhost:8282/brand/list";
  const [brands, setBrands] = useState<IBrand[]>([]);
  async function fetchBrand(url: string): Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setBrands(FETCHED_JSON);
  }
  useEffect(() => {
    fetchBrand(BRAND_URL);
  }, []);
  const [productBrand, setProductBrand] = useState<string>("");
  const handleBrandChange = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, brands: event.target.value });
  };
  const [productGender, setProductGender] = useState<string>("");
  const handleChangeGender = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, gender: event.target.value });
  };
  /*========= Product Category ========*/
  const [productCategory, setProductCategory] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, category: event.target.value });
  };
  const [productPrice, setProductPrice] = useState<string>("");
  const hadnleChangePrice = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, price: Number(event.target.value) });
  };
  const [productName, setProductName] = useState<string>("");
  const hadnleChangeName = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, product_name: event.target.value });
  };
  const [productdescription, setProductdescription] = useState<string>("");
  const hadnleChangedescription = (event: SelectChangeEvent) => {
    setEditProduct({ ...editProduct, description: event.target.value });
  };

  /*========= Product Color ========*/
  const [productColor, setProductColor] = useState<[]>([]);
  const [selected, setSelected] = useState([]);

  const handleColorChange = (event: any) => {
    // console.log(event.target.value);
    // const colors = event.target.value;

    console.log("selected colors", event.target.value);

    // for (let i = 0; i < colors.length; i++) {
    //   color.push(colors[i]);
    // }
    // setProductColor(color);
    setEditProduct({ ...editProduct, colors: event.target.value });
  };

  useEffect(() => {
    console.log(editProduct);
  }, [editProduct]);

  /*========= Product Size ========*/
  const [productSize, setProductSize] = useState<[]>([]);
  const handleSizeChange = (event: any) => {
    setEditProduct({ ...editProduct, sizes: event.target.value });
  };
  // const [formdata, setFromdata] = useState()

  const URL = `http://localhost:8282/product/edit/${product._id}`;
  async function handleEditSubmit(e: any) {
    e.preventDefault();
    // console.log(editProduct);

    const product = {
      produdct_name: editProduct?.product_name,
      price: editProduct?.price,
      description: editProduct?.product_description,
      gender: editProduct?.gender,
      colors: editProduct?.colors,
      sizes: editProduct?.sizes,
      brands: editProduct?.brands?.brand,
      category: editProduct.cat_id?.cat_name,
      // definition: e.target?.definition?.value,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setEditProduct(FETCHED_JSON);

    // console.log(FETCHED_JSON.status);

    if (FETCHED_JSON.status === "success") {
      // link.push("/product/list");
      alert("Success");
    }

    // if (FETCHED_DATA.status === "success") {
    //   // link.push("/product/list");
    //   alert("Success");
    // }
    // try {
    //   const response = await axios.put(
    //     `http://localhost:8282/product/edit/${product._id}`,
    //     editProduct
    //   );
    //   const send = response.data;
    //   console.log("edit DATA", send);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  // console.log("edit", editProduct);
  return (
    <form>
      {title ? (
        <Typography
          fontWeight="700"
          variant="h2"
          mb={1}
        >
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box>
        <Stack mb={3}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="productId"
            mb="10px"
            mt="15px"
          >
            Product Id
          </Typography>
          <CustomTextField
            name="productId"
            id="productId"
            variant="outlined"
            fullWidth
            value={editProduct.product_id}
            // onChange={handleInputChange}
          />

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="productName"
            mb="10px"
            mt="15px"
          >
            Product Name
          </Typography>
          <CustomTextField
            name="productName"
            id="productName"
            variant="outlined"
            fullWidth
            value={editProduct.product_name}
            onChange={hadnleChangeName}
          />

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="price"
            mb="10px"
            mt="15px"
          >
            Price
          </Typography>
          <CustomTextField
            id="price"
            variant="outlined"
            fullWidth
            value={editProduct.price}
            name="price"
            onChange={hadnleChangePrice}
          />
          <FormControl
            fullWidth
            sx={{ marginTop: "30px" }}
          >
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              name="gender"
              defaultValue={editProduct.gender}
              onChange={handleChangeGender}
            >
              <MenuItem value="Men">Men</MenuItem>
              <MenuItem value="Women">Women</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ marginTop: "30px" }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={product.}
              label="Category"
              name="category"
              defaultValue={editProduct?.cat_id?.cat_name}
              onChange={handleChange}

              // value={editProduct.cat_id}
              // onChange={handleInputChange}
            >
              {/* <div>
                {editProduct.cat_id.cat_name}
              </div> */}
              {category &&
                category.map((c, idx) => {
                  return (
                    <MenuItem
                      value={c.cat_name}
                      key={idx}
                      // onChange={handleInputChange}
                    >
                      {c.cat_name}
                    </MenuItem>
                  );
                })}
              {/* {editProduct.cat_id && editProduct.map ((s:any, idx:number) => {
                return (
                  <Typography
                            variant="h6"
                            key={idx}
                          >
                            {s.cat_name}
                          </Typography>
                )
              })} */}
            </Select>
          </FormControl>
          {/* <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel>Multiple Select</InputLabel>
            <Select
              multiple
              value={selectedNames}
              onChange={(e: SelectChangeEvent<string[]>) =>
                setSelectedNames([])
              }
              input={<OutlinedInput label="Multiple Select" />}
              renderValue={(selected) => (
                <Stack
                  gap={1}
                  direction="row"
                  flexWrap="wrap"
                >
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Stack>
              )}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

          <FormControl sx={{ marginTop: 5 }}>
            <InputLabel id="demo-multiple-name-label">Color</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              name="color"
              defaultValue={currentColors}
              // value={currentColors}
              onChange={(e) => {
                console.log(e);
                handleColorChange(e);
              }}
              renderValue={(selected) => (
                <Stack
                  gap={1}
                  direction="row"
                  flexWrap="wrap"
                >
                  {selected.map((value: any) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Stack>
              )}
            >
              {color.map((c, idx) => (
                <MenuItem
                  key={idx}
                  value={c._id}
                >
                  {c.color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ marginTop: 5 }}>
            <InputLabel id="demo-multiple-name-label">Size</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              defaultValue={currentSize}
              // value={productSize}
              name="size"
              onChange={(e) => {
                console.log(e);
                handleSizeChange(e);
              }}
              renderValue={(selected) => (
                <Stack
                  gap={1}
                  direction="row"
                  flexWrap="wrap"
                >
                  {selected.map((value: any) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Stack>
              )}
            >
              {size.map((s, idx) => (
                <MenuItem
                  key={idx}
                  value={s.size}
                >
                  {s.size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ marginTop: 5 }}>
            <InputLabel id="demo-multiple-name-label">Brand</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // value={productBrand}
              name="brand"
              defaultValue={editProduct?.brands?.brand}
              onChange={handleBrandChange}
            >
              {brands.map((b, idx) => (
                <MenuItem
                  key={idx}
                  value={b.brand}
                >
                  {b.brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="productDescription"
            mb="10px"
            mt="15px"
          >
            Product Description
          </Typography>
          <CustomTextField
            id="productDescription"
            variant="outlined"
            fullWidth
            onChange={hadnleChangedescription}
          />
        </Stack>
        <Button
          onClick={handleEditSubmit}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          // component={Link}
          // href="/product/list"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};
export default ProductEdit;

export async function getServerSideProps(req: any) {
  const { id } = req.params;
  const res = await axios(`http://localhost:8282/product/list/byId/${id}`);
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
}

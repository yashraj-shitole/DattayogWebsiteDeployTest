import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const DropDown = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/products/agriculturalproducts"
        >
          Agricultural Products
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/products/dairyproducts"
        >
          Dairy Products
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          className="text-lg  transition-all delay-100 ease-in-out hover:text-primary"
          to="/products/tomatoprocessedproducts"
        >
          Tomato Processed Products
        </Link>
      ),
    },
  ];

  return (
    <Dropdown
      className=" cursor-pointer"
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <h1 >
           <Link className="transition-all delay-100 ease-in-out hover:text-primary" to="/products">Products</Link> 
          </h1>
          <DownOutlined className="transition-all delay-100 ease-in-out hover:text-primary" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;

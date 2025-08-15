import { Table, Button, Popconfirm, Image, Space } from "antd";
function ProductList() {
 const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: (imageUrl: string) => {
            return <Image src={imageUrl} />
    }
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
            title: 'Action',
            render: (product: any) => {
                return (
                    <Space>
                        <Button>Edit</Button>
                        <Popconfirm
                        title="Xoa nhe"
                        description="Ban co chac chan muon xoa san pham nay khong?"
                        okText="Yes"
                        cancelText="No"
                        >
                            <Button>Delete</Button>
                        </Popconfirm>
                    </Space>
                )
            }
    },

];

    return <Table dataSource={} columns={columns} />;
}
export default ProductList;
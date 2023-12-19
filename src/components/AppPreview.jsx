import {Card, Layout, Menu} from 'antd';

const { Sider, Content } = Layout;

const menuItems = [
  { key: 'brand', label: 'X Something' },
  { key: 'item-1', label: 'Item 1' },
  { key: 'item-2', label: 'Item 2' },
  { key: 'item-3', label: 'Item 3' },
  { key: 'item-4', label: 'Item 4' },
  { key: 'item-5', label: 'Item 5' },
];
const AppPreview = () => {
  return (
    <div id='app-preview'>
      <Layout className='app'>
        <Sider style={{ minHeight: '85vh' }}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['item-1']} items={menuItems} />
        </Sider>
        <Layout>
          <Content className='flex-col gap-10 m-20'>
            <Card>Lorem ipsum dolor sit amet. Sed voluptatem minus est obcaecati fuga eos?</Card>
            <Card>Lorem ipsum dolor sit amet. Sed voluptatem minus est obcaecati fuga eos aliquid internos et ipsa laborum ea consectetur voluptatem in doloremque harum. Sed obcaecati voluptatem est alias rerum ut dolorum natus et dicta aspernatur. Et Quis assumenda vel facere iste et voluptatem distinctio ab impedit nemo. Aut sapiente autem aut odio culpa eum exercitationem quam 33 minima recusandae qui galisum dolor sed natus consequuntur!
              Non vitae nihil non voluptatum impedit sit magnam totam. Aut voluptatibus doloremque est dolorem aliquid ut magni nostrum id ratione distinctio ut exercitationem officia qui aliquid voluptas.
            </Card>
            <Card>Lorem ipsum dolor sit eos?</Card>
            <Card>Lorem ipsum dolor sit amet. Sed voluptatem minus est obcaecati fuga eos aliquid internos et ipsa laborum ea consectetur voluptatem in doloremque harum. Sed obcaecati voluptatem est alias rerum ut dolorum natus et dicta aspernatur. Et Quis assumenda vel facere iste et voluptatem distinctio ab impedit nemo. Aut sapiente autem aut odio culpa eum exercitationem quam 33 minima recusandae qui galisum dolor sed natus consequuntur!
              Non v nostrum id ratione distinctio ut exercitationem officia qui aliquid voluptas.
            </Card>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default AppPreview;

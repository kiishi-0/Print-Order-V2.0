import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';

render(
  <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: '语雀',
        url: 'https://print-order.com',
        description: 'Lorem Ipsum Salem',
        openExternal: true,
      },
    ]}
    bottom="This is Print Order"
  />,
);
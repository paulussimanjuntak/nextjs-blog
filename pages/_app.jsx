import { Provider } from 'react-redux'
import Head from 'next/head'

import 'antd/dist/antd.css'
import 'suneditor/dist/css/suneditor.min.css'
import 'antd-button-color/dist/css/style.css'

import Layout from 'components/Layout'
import withReduxStore from 'store/with-redux-store'

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Golang Blog | MASTER OKKY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Blog Golang" />
        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/utility.min.css" />
      </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      
      <style jsx global>{`
        .text-black {
          color: #262626!important;
        }
        .w-100 {
          width: 100%!important;
        }
        .float-right {
          float: right!important;
        }
        .truncate-3 {
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .truncate-2 {
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .truncate-1 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default withReduxStore(App)

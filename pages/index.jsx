import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import CardArticle from 'components/Card/Article'

import { latestArticle, mostViewedArticle } from 'data/article'

const Home = () => {
  return (
    <>
      <section className="m-t-20">
        <h2>Latest Article</h2>
        <Row gutter={[15,15]}>
          {latestArticle.map(data => {
            let url = 'https://picsum.photos/200/150?random='
            let images = Array(4).fill().map(() => Math.round(Math.random() * 100)).map(x => url+x)
            return(
              <Col xl={6} lg={6} mg={6} sm={8} xs={12} key={data.id}>
                <CardArticle title={data.title} body={data.body} image={images} />
              </Col>
            )
          })}
        </Row>
      </section>

      <section className="m-t-20">
        <h2>Most Viewed</h2>
        <Row gutter={[15,15]}>
          {mostViewedArticle.map(data => {
            let url = 'https://picsum.photos/200/150?random='
            let images = Array(4).fill().map(() => Math.round(Math.random() * 100)).map(x => url+x)
            return(
              <Col xl={6} lg={6} mg={6} sm={8} xs={12} key={data.id}>
                <CardArticle title={data.title} body={data.body} image={images} />
              </Col>
            )
          })}
        </Row>
      </section>

      <section className="m-t-20 m-b-20">
        <Row justify="center">
          <Col>
            <Button type="primary" size="large">
              <Link href="/articles">
                See all
              </Link>
            </Button>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Home

import { Row, Col, Pagination, Input, Select } from 'antd'
import CardArticle from 'components/Card/Article'

import { allArticles } from 'data/article'

const Articles = () => {
  return(
    <>
      <h1>All Articles</h1>
      <section className="m-t-20">
        <Row gutter={[15,15]} className="m-b-20">
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Input
              placeholder="Find article"
              prefix={<i className="far fa-search" />}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Select defaultValue="s" className="w-100">
              <Select.Option value="s">Newest</Select.Option>
              <Select.Option value="a">Longest</Select.Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[15,15]}>
          {allArticles.map(data => {
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
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Articles

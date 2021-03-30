import { useState } from 'react'
import { Row, Col, Form, Button, Input, Comment, Avatar, Divider } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { latestArticle } from 'data/article'
import moment from 'moment'
import Comments from 'components/Comments'
import ItemsCarousel from 'react-items-carousel'
import CardArticleHorizontal from 'components/Card/ArticleHorizontal'

const url = 'https://picsum.photos/1200/700?random='
const DetailArticle = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const images = Array(4).fill().map(() => Math.round(Math.random() * 100)).map(x => url+x)

  const renderImages = images.map((img, i) => (
    <img src={img} key={i} className="w-100" />
  ))

  return(
    <>
      <Row gutter={[15,15]} className="m-t-20 m-b-20">
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <section>
            <ItemsCarousel
              infiniteLoop
              numberOfCards={1}
              slidesToScroll={1}
              outsideChevron={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              leftChevron={
                <LeftCircleOutlined style={{ fontSize: '26px', color: '#f5f5f593'}} />
              }
              rightChevron={
                <RightCircleOutlined style={{ fontSize: '26px', color: '#f5f5f593'}} />
              }
            >
              {renderImages}
            </ItemsCarousel>
            <Row justify="space-between" align="middle">
              <Col>
                <p className="m-b-0">Viewed: 103x</p>
                <p className="m-b-0">Posted: {moment().format("Do MMMM YYYY")}</p>
              </Col>
            </Row>
            <h2 className="m-t-0">Understanding Nominee Agreements For Land Ownership In Bali</h2>
            <p>In Indonesia, foreigners are prohibited to own a Hak Milk (freehold title) of land under the Indonesian Agrarian Law. Freehold lands only belong to Indonesian citizens.</p>
            <p>Foreigners are only entitled to Hak Pakai (leasehold title) of land, i.e. the right of use of land. Therefore, even a foreigner inherits a freehold land through a marriage with an Indonesian national, they will have to release the land by selling or granting it within a year upon the receipt of the land.</p>
            <p>If foreigners do not do so within the period specified by law, the inherited land will be taken by the state and the foreigner’s land ownership title will be removed as well.</p>
            <p>Legally, nominee agreements that leverage professional shareholder or director or commissioner services to transfer freehold lands to foreigners are not permitted as it does not conform to the legislation that was previously mentioned.</p>
            <p>However, there is always a solution. Foreigners can in fact take advantage of the binding power of nominee agreements to obtain land in Bali.</p>
          </section>

          <Divider />

          <section>
            <Comment 
              avatar={<Avatar src={`https://i.pravatar.cc/150?u=${Math.floor(Math.random() * 100) + 1}`} alt="Han Solo"/>}
              content={
                <>
                  <Form.Item className="m-b-10">
                    <Input.TextArea 
                      rows={3} 
                      placeholder="Isi komentar disini..."
                    />
                  </Form.Item>
                  <Form.Item className="m-b-0">
                    <Button htmlType="submit" type="primary">
                      Add Comment
                    </Button>
                  </Form.Item>
                </>
              }
            />
            <Comments head
              body="message"
              username="GM 0OkkY"
              content="est natus enim nihil est dolore omnis voluptatem numquam"
            >
              <Comments head
                body="message"
                username="WGM SH4NTY"
                content="naut expedita occaecati aliquam eveniet laudantium noccaecati deserunt quas accusantium unde"
              />
              <Comments head
                body="message"
                username="GM 0OkkY"
                content="maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et"
              />
              <Comments body="reply" />
            </Comments>
          </section>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className="position-sticky top-5-rem">
            <h3>Related articles</h3>
            {latestArticle.map(data => {
              let url = 'https://picsum.photos/200/150?random='
              let images = Array(4).fill().map(() => Math.round(Math.random() * 100)).map(x => url+x)
              return(
                <Col span={24} key={data.id}>
                  <CardArticleHorizontal title={data.title} body={data.body} image={images} />
                </Col>
              )
            })}
          </div>
        </Col>
      </Row>

      <style jsx>{`
        :global(.ant-comment-inner){
          padding: 10px 0 10px 0;
        }
        :global(.top-5-rem){
          top: 5rem;
        }
        :global(.position-sticky){
          position: sticky!important;
        }
      `}</style>
    </>
  )
}

export default DetailArticle

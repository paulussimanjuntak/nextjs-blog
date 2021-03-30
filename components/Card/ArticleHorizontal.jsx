import { useState } from 'react'
import { Card, Row, Col } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined, EyeOutlined  } from '@ant-design/icons'
import Link from 'next/link'
import ItemsCarousel from 'react-items-carousel'

const ArticleHorizontalCard = ({ title, body, image }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const renderImages = image.map((img, i) => (
    <img src={img} key={i} className="w-100" />
  ))

  return (
    <>
      <Card hoverable className="m-b-10">
        <Row>
          <Col span={10}>
            <ItemsCarousel
              infiniteLoop
              numberOfCards={1}
              slidesToScroll={1}
              outsideChevron={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              leftChevron={
                <LeftCircleOutlined style={{ fontSize: '20px', color: '#f5f5f593'}} />
              }
              rightChevron={
                <RightCircleOutlined style={{ fontSize: '20px', color: '#f5f5f593'}} />
              }
            >
              {renderImages}
            </ItemsCarousel>
          </Col>
          <Col span={14}>
            <div className="p-l-10 p-t-10 p-r-10 p-b-10">
              <Link href="/articles/[slug]" as={`/articles/${title.toLowerCase().split(" ").join("-")}`}>
                <a className="text-black">
                  <h3 className="truncate-1 m-b-0">{title}</h3>
                  <p className="truncate-3 m-b-0">{body}</p>
                  <p className="fs-12" style={{float: 'right'}}><EyeOutlined /> 103x</p>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
      <style jsx>{`
        :global(.ant-card-body){
          padding: 0px;
        }
      `}</style>
    </>
  )
}

export default ArticleHorizontalCard

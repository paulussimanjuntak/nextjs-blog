import { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Popconfirm, Row, Col } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ItemsCarousel from 'react-items-carousel'

const ArticleCard = ({ title, body, image }) => {
  const router = useRouter()
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const renderImages = image.map((img, i) => (
    <img src={img} key={i} className="w-100" />
  ))

  return (
    <>
      <Card 
        hoverable 
        cover={
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
        }
        actions={router.pathname.startsWith('/admin') ? [
          <Link key="edit" href="/admin/articles/[slug]" as={`/admin/articles/${title.toLowerCase().split(" ").join("-")}`}>
            <a><EditOutlined /></a>
          </Link>,
          <Popconfirm
            key="delete"
            title="Delete this article?"
            okText="Yes"
            cancelText="Cancel"
            placement="bottom"
            arrowPointAtCenter
          >
            <DeleteOutlined key="delete" />
          </Popconfirm>,
        ] : false}
      >
        <Link href="/articles/[slug]" as={`/articles/${title.toLowerCase().split(" ").join("-")}`}>
          <a className="text-black">
            <Row justify="space-between" align="middle">
              <Col span={18}>
                <h3 className="truncate-1 m-b-0">{title}</h3>
              </Col>
              <Col span={6}>
                <span style={{float: 'right'}}><EyeOutlined /> 103x</span>
              </Col>
            </Row>
            <p className="truncate-3 m-b-0">{body}</p>
          </a>
        </Link>
      </Card>
      <style jsx>{`
        :global(.ant-card-body){
          padding: 15px;
        }
      `}</style>
    </>
  )
}

export default ArticleCard

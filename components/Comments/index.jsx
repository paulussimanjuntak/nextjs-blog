import { Comment, Avatar, Popconfirm, Form, Input, Button } from 'antd'
import moment from 'moment'

const CommentContainer = ({ children, username, content, head, body }) => {
  let images = `https://i.pravatar.cc/150?u=${Math.floor(Math.random() * 100) + 1}`

  const author = ( 
    <>
      <b>{username}</b> 
      <span className="diskusi-date">
        &bull; {moment().startOf('seconds').fromNow()}
        <span className="hover-pointer action-btn">
          <Popconfirm
            title={`${head ? "Delete Discussion?" : "Delete Comment?"}`}
            okText="Yes"
            cancelText="Cancel"
            placement="bottomRight"
            arrowPointAtCenter
          >
            <i className="fal fa-ellipsis-h-alt" />
          </Popconfirm>
        </span>
      </span>
    </>
  )
  
  return(
    <>
      <Comment
        className="comment-modif"
        avatar={<Avatar src={images} alt="Golang Blog" />}
        author={body === "message" ? author : body === "reply" && <></>}
        content={body === "message" ? <p>{content}</p> : body === "reply" && (
          <Form name="comment-form">
            <Form.Item className="m-b-10">
              <Input.TextArea 
                autoSize={{ minRows: 1, maxRows: 2 }}
                placeholder="Isi komentar disini..."
              />
            </Form.Item>
            <Form.Item className="m-b-0">
              <Button type="primary">Send</Button>
            </Form.Item>
          </Form>
        )}
      >
        {children}
      </Comment>
      <style jsx>{`
        :global(.comment-modif .ant-comment-inner){
          padding: 10px 0 10px 0;
        }
        :global(.ant-comment-content-author-name > *){
          color: rgba(0, 0, 0, 0.7);
        }
        :global(.ant-comment-content-author-name > .diskusi-date){
          color: rgba(0, 0, 0, 0.38);
        }
        :global(.ant-comment-content-detail p){
          color: rgba(0, 0, 0, 0.54);
        }
        :global(.ant-comment-content-author-name){
          width: 100%;
        }
        :global(.ant-comment-content-author > .ant-comment-content-author-name .action-btn){
          float: right;
        }
        :global(.action-btn){
          color: #999999!important;
        }
        :global(.action-btn:hover){
          color #343a40!important;
        }
      `}</style>
    </>
  )
}

export default CommentContainer

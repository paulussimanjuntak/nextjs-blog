import { useState } from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'

const Editor = dynamic(import('components/Editor'), { ssr: false })

export const formImage = {
  file: { value: [], isValid: true, message: null },
}

const NewArticle = () => {
  const [imageList, setImageList] = useState(formImage)

  return(
    <>
      <h1>New Article</h1>
      <section className="m-t-20">
        <Form name="new-article" layout="vertical">
          <Form.Item label="Media" className="m-b-10">
            <Upload
              accept="image/*"
              listType="picture-card"
              fileList={imageList.value}
            >
              {imageList.file.value.length >= 4 ? null : 
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 4 }}>Upload</div>
                </div>
              }
            </Upload>
          </Form.Item>
          <Form.Item label="Title" className="m-b-10">
            <Input placeholder="Article Title" />
          </Form.Item>
          <Form.Item label="Description" className="m-b-10">
            <Editor 
              setContent={() => {}} 
              height="200"
            />
          </Form.Item>
          <Form.Item className="m-b-10">
            <Button type="primary">Save</Button>
          </Form.Item>

        </Form>
      </section>
    </>
  )
}

export default NewArticle
